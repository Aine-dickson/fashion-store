<template>
    <section class="h-full overflow-y-auto pl-2 pt-1">
        <ol class="relative border-l border-gray-50 dark:border-gray-700">                  
            <li class="mb-6 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2023</time>
                <h5 class="font-semibold text-gray-900 dark:text-white">New Pant on market</h5>
                <p class="mb-3 text-sm font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pants including a office pants, charts, sweater pants, & pre-order try outs.</p>
                <button class="inline-flex items-center p-2 text-sm font-medium text-white bg-blue-600 border border-blue-700 rounded-lg focus:outline-none dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600">
                    Check it
                    <svg class="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </button>
            </li>
            <li class="mb-6 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2023</time>
                <h5 class="font-semibold text-gray-900 dark:text-white">Package Delivery</h5>
                <p class="text-sm font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in on paper and we keep a parity between the two versions even as we update the product.</p>
            </li>
        </ol>
    </section>
</template>

<script>
    import { defineComponent } from 'vue'

    export default defineComponent({
        setup(){

        }
    })
</script>