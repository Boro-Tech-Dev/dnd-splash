# Deploying on DCDeploy (Git Flex)

## Build command

`npm run build` — produces the Next.js production build in `.next/`.

## Start command

Git Flex auto-detects Next.js and runs `next start`. Use **`npm start`** (same thing), bound to `0.0.0.0` on `PORT` (default 3000).

Do **not** use `output: 'export'` in `next.config.mjs` — static export requires a static file server (`serve`, `server.js`, nginx), not `next start`.

## Git Flex checklist

| Setting | Value |
|---------|--------|
| Port | `3000` |
| Build command | `npm run build` |
| Start command | `npm start` (or leave default Next.js detection) |
| Branch | `main` |

## If build logs show `fonts.googleapis.com`

The deploy is on an **old commit** before `fixy`. Redeploy from current `main`.

## If the site returns `404 page not found`

Check build logs for a successful `next build`, then confirm the process is **`next start`** (not `next start` with `output: export`, which crashes on startup). After deploy you should see `Ready` from Next.js, not `Error: "next start" does not work with "output: export"`.
