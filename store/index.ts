
interface MyStoreState {
  products: Array<Product> | null;
}

interface Product {
  name: String;
  price: Number;
  src: String;
};

import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: (): MyStoreState => ({
    products: []
  })
  ,
  actions: {
    async LoadProducts() {
      const { data } = await useFetch("/api/product");

      if (data.value) {
        this.products = data.value.products as Array<Product>;
      }
    },
    async CreateProduct() {
      const { data } = await useFetch("/api/product", {
        method: "POST",
        body: JSON.stringify({
          id: 1,
          name: "Flowers of the year",
          price: 18.0,
          src: "../assets/images/dessins/dessin1.png",
        }),
      });
    },
  },
  getters: {
  },
});
// Call to server
// this.products = [
//   {
//     id: 1,
//     name: "Flowers of the year",
//     price: 18.0,
//     src: "../assets/images/dessins/dessin1.png",
//   },
//   {
//     id: 2,
//     name: "Sakura",
//     price: 40.0,
//     src: "../assets/images/dessins/dessin2.png",
//   },
//   {
//     id: 3,
//     name: "THis one is copyrighted ",
//     price: 25.0,
//     src: "../assets/images/dessins/dessin3.png",
//   },
//   {
//     id: 4,
//     name: "HAOUUUUUUUU",
//     price: 30.0,
//     src: "../assets/images/dessins/dessin4.png",
//   },
//   {
//     id: 5,
//     name: "Flowzers of the month",
//     price: 50.0,
//     src: "../assets/images/dessins/dessin5.png",
//   },
// ];

