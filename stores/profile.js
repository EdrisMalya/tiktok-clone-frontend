import {defineStore} from "pinia";

export const useProfileStore = defineStore('profile', {
    state: () => ({
        id: '',
        name: '',
        bio: '',
        image: '',
        post: null,
        posts: null,
        allLInks: 0,
    }),
    actions: {

    },
    presets: true
})