import { useMainStore } from "~/store/index";

export default defineNuxtPlugin(async () => {
  const store = useMainStore();
  await store.LoadProducts();
});
