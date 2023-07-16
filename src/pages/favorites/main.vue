<template>
    <section class="h-full overflow-y-auto">
        <article class="mt-2 w-[95%] mx-auto h-24 flex items-start bg-slate-300 border border-slate-400 rounded-lg overflow-hidden shadow dark:border-gray-700 dark:bg-gray-800">
            <div class="h-full w-[30%]">
                <img class="object-cover w-full h-full" src="/assets/aine.jpg" alt="">
            </div>
            <div>
                
            </div>
        </article>
    </section>
</template>

<script>
    import { defineComponent, ref } from 'vue'

    export default defineComponent({
        setup() {
            const favorites = ref([])

            return { favorites }
        }
    })
</script>