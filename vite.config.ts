import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import env from 'vite-plugin-env-compatible'
import tsconfigPaths from 'vite-tsconfig-paths';
import VitePluginLinaria from 'vite-plugin-linaria'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), env(), tsconfigPaths(), VitePluginLinaria()],
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  },
  build: {
    sourcemap: true,
    outDir: 'dist'
  }
  // server: {
  //   port: 6666
  // },
  // preview: {
  //   port: 6666
  // }
})
