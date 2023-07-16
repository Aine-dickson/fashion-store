import { defineStore } from 'pinia';

export const useAppStore = defineStore('counter', {
  state: () => ({
    user: {
      meta: {
        userName: 'Aine Dixon', email: 'aine@ladystyle.com',
        role: 'admin', photo: 'assets/aine.jpg'
      },
      orders: [],
      favorite: [],
      wallet: {bal: ''},
      cart: [],
      notifications: [],

    },
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
