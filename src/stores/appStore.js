import { defineStore } from 'pinia';

export const useAppStore = defineStore('counter', {
  state: () => ({
    menu: false,
  }),
  getters: {
  },
  actions: {
    menuToggle(){
      this.menu = !this.menu;
    }
  },
});
