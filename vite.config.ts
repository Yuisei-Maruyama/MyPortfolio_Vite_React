import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import env from 'vite-plugin-env-compatible'
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), env(), tsconfigPaths()],
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  }
  // server: {
  //   port: 6666
  // },
  // preview: {
  //   port: 6666
  // }
})
