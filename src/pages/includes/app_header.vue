<template>
    <header class="bg-slate-300 border-gray-200 shadow-md dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <button @click="toggleMenu" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none dark:text-gray-400">
                <svg class="w-5 h-5 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <span @click="$router.push({name: 'home'})" class="flex items-center">
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Lady Styles Ug</span>
            </span>
            <div class="flex items-center justify-between md:order-2">
                <button type="button" class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                  <span class="sr-only">Open user menu</span>
                  <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo">
                </button>
                <!-- Dropdown menu -->
                <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                  <div class="px-4 py-3">
                    <span class="block text-sm text-gray-900 dark:text-white">Aine Dev</span>
                    <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">aine@ladystyles.com</span>
                  </div>
                  <ul class="py-2" aria-labelledby="user-menu-button">
                    <li>
                      <span @click="$router.push({name: 'accounts'})" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Account</span>
                    </li>
                    <li>
                      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Wallet</a>
                    </li>
                    <li>
                      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Actions</a>
                    </li>
                    <li>
                      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Log out</a>
                    </li>
                  </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    import { defineComponent } from 'vue';
    import { initFlowbite } from 'flowbite';
    import { onMounted } from 'vue';
    import { useAppStore } from 'src/stores/appStore'

    export default defineComponent({
        name: 'app_header',
        setup(){
            const store = useAppStore()

            onMounted(() => {
                initFlowbite()
            })

            const toggleMenu = () => {
                store.menuToggle()
            }

            return { toggleMenu }
        }
    })
</script>