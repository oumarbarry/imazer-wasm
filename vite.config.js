import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import Unocss from 'unocss/vite';
import ViteRSW from 'vite-plugin-rsw';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({ reactivityTransform: true }), ViteRSW(), Unocss()],
});
