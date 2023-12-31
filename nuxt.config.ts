export default defineNuxtConfig({
    pages: true,
    css: [`~/assets/css/main.css`],
    modules: ['nuxt-icon', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
