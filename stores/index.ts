type Store {
  products: Array<Products>;
};
type Product {
  id: Number;
  name: String;
  price: Number;
  src: String;
};

export const artStore = defineStore("art", {
  state: (): ICounterState => ({
    products: [],
  }),
  actions: {
    LoadProducts() {
      // Call to server
      this.products = [
        {
          id: 1,
          name: "Flowers of the year",
          price: 18.0,
          src: "../assets/images/dessins/dessin1.png",
        },
        {
          id: 2,
          name: "Sakura",
          price: 40.0,
          src: "../assets/images/dessins/dessin2.png",
        },
        {
          id: 3,
          name: "THis one is copyrighted ",
          price: 25.0,
          src: "../assets/images/dessins/dessin3.png",
        },
        {
          id: 4,
          name: "HAOUUUUUUUU",
          price: 30.0,
          src: "../assets/images/dessins/dessin4.png",
        },
        {
          id: 5,
          name: "Flowzers of the month",
          price: 50.0,
          src: "../assets/images/dessins/dessin5.png",
        },
      ];
    },
  },
});
