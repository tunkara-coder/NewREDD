// Build script to ensure proper production setup
import { build } from 'vite'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

async function buildForProduction() {
  try {
    console.log('Building for production...')
    
    await build({
      configFile: resolve(__dirname, 'vite.config.js'),
      build: {
        outDir: 'dist',
        emptyOutDir: true
      }
    })
    
    console.log('Build completed successfully!')
  } catch (error) {
    console.error('Build failed:', error)
    process.exit(1)
  }
}

buildForProduction()