# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).



## ⚠️ Tailwind Initialization Issue

If you encounter an error while running:

```bash
npx tailwindcss init -p
```

This may be due to version compatibility issues with the latest Tailwind release.

In that case, install a stable version manually:

```bash
npm install -D tailwindcss@3.4.17
```

After installing, run the initialization command again:

```bash
npx tailwindcss init -p
```

This should successfully generate the required configuration files:

- `tailwind.config.js`
- `postcss.config.js`