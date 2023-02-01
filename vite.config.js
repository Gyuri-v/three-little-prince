import { defineConfig } from 'vite';
import { resolve } from 'path';
import glsl from 'vite-plugin-glsl';

export default defineConfig({
  plugins: [glsl()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // sub: resolve(__dirname, 'sub/index.html'),
      },
      // 시영시디님 소스 __ 이후 다시 확인해보기
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.match(/\.([a-z0-9]+)$/i)[1];
          if (/(css)/i.test(extType)) {
            return `resources/${extType}/[name]-[hash][extname]`;
          } else if (/(png|jpe?g|svg|gif|tiff|bmp|ico)/i.test(extType)) {
            extType = 'images';
          } else if (/(woff2|woff2|otf|ttf)/i.test(extType)) {
            extType = 'fonts';
          }
          return `resources/${extType}/[name][extname]`; // remove hash
        },
        chunkFileNames: 'resources/js/[name]-[hash].js',
        entryFileNames: 'resources/js/[name]-[hash].js',
      },
    },
  },
});
