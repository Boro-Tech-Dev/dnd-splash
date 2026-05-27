
# DeployDeliver

Splash site for DeployDeliver — deploy real open-source apps, learn practical tech skills, and build career momentum.

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

Run `npm run build && npm start` to build and serve production output.

`npm run build` writes **`out/`** (Next export) and copies it to **`dist/`** for hosts that still publish `dist/`. The server prefers `out/`, then `dist/`.

Deploy must run **`npm run build`** before start (Tailwind/PostCSS are required at build time). A `Dockerfile` and `nixpacks.toml` are included for platforms that need explicit build steps.
