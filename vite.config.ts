import * as path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import svgr from 'vite-plugin-svgr'

export default defineConfig(() => {
  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    plugins: [
      svgr({ include: '**/*.svg' }),
      dts({
        include: ['./src/**/*.{ts,tsx}', './src/index.tsx'],
        exclude: ['./src/stories']
      }),
      react()
    ],

    build: {
      lib: {
        entry: path.resolve(__dirname, 'src/index.tsx'),
        name: '@cubetiq/enhance-antd-table',
        fileName: 'index',
        sourcemap: true
      },
      rollupOptions: {
        external: ['react', 'react/jsx-runtime', 'react-dom']
      },

      outDir: 'build'
    },
    target: 'esnext'
  }
})
