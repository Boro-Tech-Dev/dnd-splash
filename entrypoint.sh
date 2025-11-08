#!/bin/sh
set -euo pipefail

APP_DIR="${APP_DIR:-/srv/app}"
REPO_URL="${REPO_URL:-}"
BRANCH="${BRANCH:-main}"
POLL_INTERVAL="${POLL_INTERVAL:-300}"
INSTALL_CMD="${INSTALL_CMD:-}"
BUILD_CMD="${BUILD_CMD:-}"
START_CMD="${START_CMD:-}"

log() {
  echo "[$(date +"%Y-%m-%dT%H:%M:%S%z")] [nextjs] $*"
}

require_repo_url() {
  if [ -z "$REPO_URL" ]; then
    log "ERROR: REPO_URL environment variable is required."
    exit 1
  fi
}

ensure_app_dir() {
  mkdir -p "$APP_DIR"
  git config --global --add safe.directory "$APP_DIR" 2>/dev/null || true
}

clone_or_update_repo() {
  if [ ! -d "$APP_DIR/.git" ]; then
    log "Cloning repository $REPO_URL (branch: $BRANCH)..."
    git clone --depth 1 --branch "$BRANCH" "$REPO_URL" "$APP_DIR"
  else
    log "Updating repository to latest $BRANCH..."
    (cd "$APP_DIR" && git remote set-url origin "$REPO_URL")
    (cd "$APP_DIR" && git fetch --depth 1 origin "$BRANCH")
    (cd "$APP_DIR" && git reset --hard "origin/$BRANCH")
  fi
}

detect_package_manager() {
  if [ -f "$APP_DIR/pnpm-lock.yaml" ]; then
    echo "pnpm"
  elif [ -f "$APP_DIR/yarn.lock" ]; then
    echo "yarn"
  else
    echo "npm"
  fi
}

set_command_defaults() {
  pm="$1"

  if [ -z "$INSTALL_CMD" ]; then
    case "$pm" in
      pnpm) INSTALL_CMD="pnpm install --frozen-lockfile" ;;
      yarn) INSTALL_CMD="yarn install --frozen-lockfile" ;;
      *)
        if [ -f "$APP_DIR/package-lock.json" ] || [ -f "$APP_DIR/npm-shrinkwrap.json" ]; then
          INSTALL_CMD="npm ci"
        else
          log "No npm lockfile found; falling back to 'npm install'."
          INSTALL_CMD="npm install"
        fi
        ;;
    esac
  fi

  if [ -z "$BUILD_CMD" ]; then
    case "$pm" in
      pnpm) BUILD_CMD="pnpm run build" ;;
      yarn) BUILD_CMD="yarn run build" ;;
      *) BUILD_CMD="npm run build" ;;
    esac
  fi

  if [ -z "$START_CMD" ]; then
    case "$pm" in
      pnpm) START_CMD="pnpm run start -- --hostname 0.0.0.0 --port \${PORT:-3000}" ;;
      yarn) START_CMD="yarn run start --hostname 0.0.0.0 --port \${PORT:-3000}" ;;
      *) START_CMD="npm run start -- --hostname 0.0.0.0 --port \${PORT:-3000}" ;;
    esac
  fi
}

install_dependencies() {
  log "Installing dependencies with command: $INSTALL_CMD"
  (cd "$APP_DIR" && rm -rf node_modules)
  (cd "$APP_DIR" && sh -c "$INSTALL_CMD")
}

build_application() {
  log "Building application with command: $BUILD_CMD"
  (cd "$APP_DIR" && sh -c "$BUILD_CMD")
}

APP_PID=""

start_application() {
  export PORT="${PORT:-3000}"
  export HOSTNAME="${HOSTNAME:-0.0.0.0}"
  log "Starting application with command: $START_CMD"
  (cd "$APP_DIR" && sh -c "$START_CMD") &
  APP_PID=$!
  log "Application started with PID $APP_PID"
}

stop_application() {
  if [ -n "$APP_PID" ] && kill -0 "$APP_PID" 2>/dev/null; then
    log "Stopping application (PID $APP_PID)..."
    kill "$APP_PID"
    wait "$APP_PID" 2>/dev/null || true
    log "Application stopped."
  fi
  APP_PID=""
}

check_for_updates() {
  if [ "$POLL_INTERVAL" -le 0 ]; then
    return 1
  fi

  (cd "$APP_DIR" && git fetch --depth 1 origin "$BRANCH") || {
    log "Warning: git fetch failed; will retry later."
    return 1
  }

  local local_hash remote_hash
  local_hash="$(cd "$APP_DIR" && git rev-parse HEAD)"
  remote_hash="$(cd "$APP_DIR" && git rev-parse "origin/$BRANCH")"

  if [ "$local_hash" != "$remote_hash" ]; then
    log "New commits detected ($local_hash -> $remote_hash)."
    (cd "$APP_DIR" && git reset --hard "origin/$BRANCH")
    (cd "$APP_DIR" && rm -rf node_modules .next .turbo)
    return 0
  fi

  return 1
}

graceful_shutdown() {
  log "Received shutdown signal. Cleaning up..."
  stop_application
  exit 0
}

main_loop() {
  while :; do
    clone_or_update_repo
    pm="$(detect_package_manager)"
    set_command_defaults "$pm"
    log "Using package manager strategy: $pm"
    install_dependencies
    build_application
    start_application

    if [ "$POLL_INTERVAL" -le 0 ]; then
      wait "$APP_PID"
      break
    fi

    while :; do
      sleep "$POLL_INTERVAL" &
      wait $!
      if check_for_updates; then
        stop_application
        break
      fi

      if ! kill -0 "$APP_PID" 2>/dev/null; then
        log "Application process exited unexpectedly. Restarting..."
        break
      fi
    done
  done
}

require_repo_url
ensure_app_dir
trap graceful_shutdown INT TERM

main_loop

