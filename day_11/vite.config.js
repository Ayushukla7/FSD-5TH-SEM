import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const reactRuntime = fileURLToPath(
  new URL('./node_modules/react/jsx-runtime.js', import.meta.url),
);
const reactDevRuntime = fileURLToPath(
  new URL('./node_modules/react/jsx-dev-runtime.js', import.meta.url),
);

export default defineConfig({
  resolve: {
    alias: {
      'react/jsx-runtime': reactRuntime,
      'react/jsx-dev-runtime': reactDevRuntime,
    },
  },
});
