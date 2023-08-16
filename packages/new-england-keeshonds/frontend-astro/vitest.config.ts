/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig({
  plugins: [nxViteTsPaths()],

  test: {
    /* for example, use global to avoid globals imports (describe, test, expect): */
    // globals: true,

    passWithNoTests: true,
  },
});
