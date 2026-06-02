# Deploying on DCDeploy (Git Flex)

## Build command

`npm run build` — produces `out/` and copies to `dist/`.

## Start command

`npm start` — serves static files on `PORT` (default 3000), bound to `0.0.0.0`.

## Git Flex checklist

| Setting | Value |
|---------|--------|
| Port | `3000` |
| Build command | `npm run build` |
| Start command | `npm start` |
| Branch | `main` (latest; needs `@fontsource/inter`, not `next/font/google`) |

## If build logs show `fonts.googleapis.com`

The deploy is on an **old commit** before `fixy`. Redeploy from current `main`.

## If the site returns `404 page not found`

Usually means the **build failed** and nothing is listening on port 3000. Check full build logs after the TypeScript/ESLint lines — you should see `sync-dist: copied out/ → dist/` and a successful exit.
