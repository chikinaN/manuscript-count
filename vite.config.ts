import build from '@hono/vite-build/cloudflare-pages'
import devServer from '@hono/vite-dev-server'
import adapter from '@hono/vite-dev-server/cloudflare'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
  console.log(mode)
  if (mode === 'client') {
    return {
      build: {
        rollupOptions: {
          input: [
            "./app/client.ts",
            "./app/style.css",
          ],
          output: {
            entryFileNames: 'static/client.js',
            chunkFileNames: 'static/assets/[name]-[hash].js',
            assetFileNames: 'static/assets/[name].[ext]',
          },
        },
        emptyOutDir: false,
      },
    }
  } else {
    return {
      ssr: {
        external: ['react', 'react-dom']
      },
      plugins: [
        build(),
        devServer({
          adapter,
          entry: 'src/index.tsx'
        })
      ]
    }
  }
})
