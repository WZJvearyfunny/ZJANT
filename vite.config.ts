import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    //设置别名
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [vue(),
  Components({
    // relative paths to the directory to search for components.
    dirs: ['src/components'],

    // valid file extensions for components.
    extensions: ['vue'],
    // search for subdirectories
    deep: true,
    // resolvers for custom components
    resolvers: [],

    // generate `components.d.ts` global declarations,
    // also accepts a path for custom filename
    // default: `true` if package typescript is installed
    dts: false,

    // Allow subdirectories as namespace prefix for components.
    directoryAsNamespace: false,
    // Subdirectory paths for ignoring namespace prefixes
    // works when `directoryAsNamespace: true`
    globalNamespaces: [],

    // auto import for directives
    // default: `true` for Vue 3, `false` for Vue 2
    // Babel is needed to do the transformation for Vue 2, it's disabled by default for performance concerns.
    // To install Babel, run: `npm install -D @babel/parser`
    directives: true,

    // Transform path before resolving
    importPathTransform: v => v,

    // Allow for components to override other components with the same name
    allowOverrides: false,

    // filters for transforming targets
    include: [/\.vue$/, /\.vue\?vue/],
    exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
  }),
  AutoImport({
    // targets to transform
    include: [
      /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      /\.vue$/, /\.vue\?vue/, // .vue
      /\.md$/, // .md
    ],

    // global imports to register
    imports: [
      // presets
      'vue',
      'vue-router',
      // custom
      {
        '@vueuse/core': [
          // named imports
          'useMouse', // import { useMouse } from '@vueuse/core',
          // alias
          ['useFetch', 'useMyFetch'], // import { useFetch as useMyFetch } from '@vueuse/core',
        ],
        'axios': [
          // default imports
          ['default', 'axios'], // import { default as axios } from 'axios',
        ],
        '[package-name]': [
          '[import-names]',
          // alias
          ['[from]', '[alias]'],
        ],
      },
    ],

    // Auto import for module exports under directories
    // by default it only scan one level of modules under the directory
    dirs: [
      // './hooks',
      // './composables' // only root modules
      // './composables/**', // all nested modules
      // ...
    ],

    // Filepath to generate corresponding .d.ts file.
    // Defaults to './auto-imports.d.ts' when `typescript` is installed locally.
    // Set `false` to disable.
    dts: './auto-imports.d.ts',

    // Auto import inside Vue template
    // see https://github.com/unjs/unimport/pull/15 and https://github.com/unjs/unimport/pull/72
    vueTemplate: false,

    // Custom resolvers, compatible with `unplugin-vue-components`
    // see https://github.com/antfu/unplugin-auto-import/pull/23/
    resolvers: [
      /* ... */
    ],

    // Generate corresponding .eslintrc-auto-import.json file.
    // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
    eslintrc: {
      enabled: false, // Default `false`
      filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
      globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
    },
  })],
  server: {
    port: 8080, //启动端口
    hmr: {
      host: '127.0.0.1',
      port: 8080
    },
    // 设置 https 代理
    proxy: {
      '/api': {
        target: 'your https address',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, '')
      }
    }
  }
})
