import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import { execSync } from 'child_process'

// Safely grab git info during build time
let commitHash = 'unknown'
let commitDate = 'unknown'

try {
  commitHash = execSync('git rev-parse --short HEAD').toString().trim()
  commitDate = execSync('git log -1 --format=%cd').toString().trim()
} catch  {
  // Fallback if git is not available or git history isn't present
}

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // Define global constants to inject into your Vue components
  define: {
    __GIT_COMMIT__: JSON.stringify(commitHash),
    __GIT_DATE__: JSON.stringify(commitDate),
  },
})
