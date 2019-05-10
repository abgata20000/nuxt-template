import * as path from "path"
import NuxtConfiguration from "@nuxt/config"
const StylelintPlugin = require("stylelint-webpack-plugin")
const pkg = require("./package.json")
const rootPath = path.resolve(__dirname) + "/app"
const environment = process.env.NODE_ENV || "development"
const envSet = require(`./env.${environment}.js`)

const config: NuxtConfiguration = {
  env: envSet,
  mode: "spa",
  // mode: 'universal',
  srcDir: "app",
  server: {
    port: 3333,
    host: "0.0.0.0"
  },
  resolve: {
    extensions: [".js", ".json", ".vue", ".ts"],
    root: rootPath,
    alias: {
      "~": rootPath,
      "@": rootPath
    }
  },

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  /*
   ** Global CSS
   */
  css: ["~assets/sass/application.scss"],
  styleResources: {
    scss: ["~assets/sass/_variables.scss", "~assets/sass/_mixin.scss"]
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/consola.js", "~/plugins/moment.js"],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxtjs/style-resources"
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    postcss: {
      plugins: {
        "postcss-preset-env": {
          autoprefixer: { grid: true }
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        if (!config.module) return
        if (!config.plugins) return
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        })
        // Run StyleLint on save
        config.plugins.push(
          new StylelintPlugin({
            files: ["**/*.vue", "**/*.scss"]
          })
        )
        // Use sound files
        config.module.rules.push({
          test: /\.(ogg|mp3|wav|mpe?g)$/i,
          use: "file-loader",
          exclude: /(node_modules)/
        })
      }
    }
  },
  router: {
    middleware: ["set-route-name"]
  }
}
export default config
