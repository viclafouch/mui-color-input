import path from 'node:path'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import dts from 'vite-plugin-dts'
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true
  },
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
      '@shared': path.resolve(__dirname, './src/shared'),
      '@components': path.resolve(__dirname, './src/components')
    }
  },
  build: {
    target: 'esnext',
    minify: true,
    lib: {
      formats: ['es'],
      entry: path.resolve(__dirname, 'src/index.tsx'),
      name: 'Mui-color-input',
      fileName: (format) => {
        return `mui-color-input.${format}.js`
      }
    },
    rollupOptions: {
      output: {
        sourcemapExcludeSources: true,
        globals: {
          react: 'React',
          '@mui/material/Button': 'Button',
          '@mui/material/Box': 'Box',
          '@mui/material/Popover': 'Popover',
          '@mui/material/Slider': 'Slider',
          '@mui/material/TextField': 'TextField',
          '@mui/material/InputAdornment': 'InputAdornment',
          '@mui/material/styles': 'styles',
          'react/jsx-runtime': 'jsxRuntime'
        }
      }
    }
  },
  plugins: [
    peerDepsExternal(),
    react(),
    dts({
      rollupTypes: true,
      exclude: ['/**/*.stories.tsx', '/**/*.test.tsx']
    })
  ]
})
