<template>
    <main class="relative h-full">
        <transition>
            <section v-if="menuState" @click="toggleMenu" class="absolute top-0 bottom-0 w-full bg-gray-900 bg-opacity-50">
                <app_nav/>
            </section>
        </transition>
        <router-view/>
    </main>
</template>

<script>
    import app_nav from 'src/pages/includes/app_nav.vue';
    import { defineComponent, computed } from 'vue';
    import { useAppStore } from 'src/stores/appStore';

    export default defineComponent({
        name: 'app_main',
        components: {
            app_nav
        },
        setup() {
            const store = useAppStore()
            const menuState = computed(() => {
                return store.menu
            })

            const toggleMenu = () => {
                store.menuToggle()
            }

            return { toggleMenu, menuState }
        }
    })
</script>

<style>
    .v-enter-active,
    .v-leave-active {
      transition: right 0.1s ease;
    }

    .v-enter-from,
    .v-leave-to {
      right: 100%;
    }
</style>