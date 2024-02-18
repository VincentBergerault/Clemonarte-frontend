import { defineStore } from "pinia";
import type { Product } from "~/utils/types";

type MyStoreState = {
  products: Array<Product> | null;
};

export const useMainStore = defineStore("main", {
  state: (): MyStoreState => ({
    products: [],
  }),
  actions: {
    async LoadProducts() {
      const { data } = await useApiFetch("api/product");

      if (data.value) {
        this.products = data.value as Array<Product>;
      }
    },
    async CreateProduct() {
      await useApiFetch("api/product", {
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
  getters: {},
});
