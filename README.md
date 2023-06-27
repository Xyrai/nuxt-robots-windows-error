# Nuxt 3 Minimal Starter - @nuxtjs/robots 3.0 windows error replica

This repository is a replica of the @nuxtjs/robots package (v3) breaking on the latest version of Nuxt when using @nuxt/kit to install the module.

Keep in mind that the error only occurs on Windows machines.

**Error Log**
```bash
 ERROR  [worker reload] [worker init] Only URLs with a scheme in: file and data are supported by the default ESM loader. On Windows, absolute paths must be valid file:// URLs. Received protocol 'c:'

  at new NodeError (node:internal/errors:399:5)
  at throwIfUnsupportedURLScheme (node:internal/modules/esm/resolve:1059:11)
  at defaultResolve (node:internal/modules/esm/resolve:1135:3)
  at nextResolve (node:internal/modules/esm/loader:163:28)
  at ESMLoader.resolve (node:internal/modules/esm/loader:838:30)
  at ESMLoader.getModuleJob (node:internal/modules/esm/loader:424:18)
  at ModuleWrap.<anonymous> (node:internal/modules/esm/module_job:77:40)
  at link (node:internal/modules/esm/module_job:76:36)
```

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
