import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueRouter from 'unplugin-vue-router/vite'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    strictPort: true
  },
  plugins: [
    vueRouter({
      dts: 'src/types/typed-router.d.ts'
    }),
    vue(),
    vueJsx(),
    AutoImport({
      dts: 'src/types/auto-imports.d.ts',
      imports: ['vue', VueRouterAutoImports, 'pinia']
    }),
    Components({
      dts: 'src/types/components.d.ts',
      resolvers: []
    }),
    vueDevTools()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
})
