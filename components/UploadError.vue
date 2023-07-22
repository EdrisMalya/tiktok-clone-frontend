<template>
    <div class="w-[100%] relative flex justify-center">
        <div
            class="
                absolute
                top-6
                z-50
                mx-auto
                bg-black
                bg-opacity-70
                text-white
                px-14
                py-3
                rounded-sm
            "
            :class="errorType ? 'visible' : 'invisible'"
        >
            {{ error }}
        </div>
    </div>
</template>
<script setup>
    const props = defineProps(['errorType'])
    const { errorType } = props

    let error = ref('')

    watch(()=>error, ()=>{
        switch (errorType){
            case 'caption':
                error = 'Maximum 150 characters'
                break
            case 'bio':
                error = 'maximum 80 characters'
                break
            case 'file':
                error = "Unsupported file. Use MP4 instated"
                break
            default:
                error = ''
        }
    })

</script>