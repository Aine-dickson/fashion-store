<template>
    <section class="app-container h-screen grid bg-slate-200 text-gray-900">
        <div class="app-header h-full">
            <app_header/>
        </div>
        <div class="app-main h-full">
            <app_main/>
        </div>
        <div class="app-footer h-full">
            <app_footer/>
        </div>
    </section>
</template>

<script>
    import { defineComponent } from 'vue';
    import app_footer from 'src/pages/includes/app_footer.vue';
    import app_header from 'src/pages/includes/app_header.vue';
    import app_main from 'src/pages/includes/app_main.vue';

    export default defineComponent({
        components: {
            app_footer,
            app_header,
            app_main
        },
        setup() {
            
        }
    })
</script>

<style>
    .app-container{
        grid-template-columns: 100%;
        grid-template-rows: 10% 80% 10%;
        grid-template-areas: "header" "main" "footer";
    }
    .app-header{
        grid-area: header;
    }
    .app-footer{
        grid-area: footer;
    }
    .app-main{
        grid-area: main;
    }
</style>