import fs from 'fs';
import {resolve} from 'path';
import path from 'path';

import react from '@vitejs/plugin-react';
import lessToJS from 'less-vars-to-js';
import {defineConfig, loadEnv} from 'vite';
import eslintPlugin from 'vite-plugin-eslint';
import vitePluginImp from 'vite-plugin-imp';

const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './src/style/theme.less'), 'utf8')
);

// https://vitejs.dev/config/
export default ({mode}) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};
  // import.meta.env.VITE_NAME available here with: process.env.VITE_NAME
  // import.meta.env.VITE_PORT available here with: process.env.VITE_PORT
  return defineConfig({
    base: process.env.PUBLIC_URL || '/',
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          admin: resolve(__dirname, 'admin/index.html'),
        },
      },
      outDir: 'build',
      chunkSizeWarningLimit: 1024,
    },
    plugins: [
      react(),
      vitePluginImp({
        libList: [
          {
            libName: 'antd',
            style: (name) => `antd/es/${name}/style`,
          },
        ],
      }),
      eslintPlugin(),
    ],
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: themeVariables,
          javascriptEnabled: true,
        },
      },
    },
    resolve: {
      alias: {'@': path.resolve(__dirname, 'src')},
    },
    esbuild: {
      logOverride: {'this-is-undefined-in-esm': 'silent'},
    },
  });
};
