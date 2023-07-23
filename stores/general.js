import {defineStore} from "pinia";

export const useGeneralStore = defineStore('general', {
    state: () => ({
        isLoginOpen: false,
        isEditProfileOpen: false,
        selectedPost: null,
        ids: null,
        isBasicUrl: '/',
        posts: null,
        suggested: null,
        following: null,
    }),
    actions: {
    },
    presets: true
})