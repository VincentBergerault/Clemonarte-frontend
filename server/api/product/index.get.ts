import { Product } from "~/server/models/product.model";

export default defineEventHandler(async () => {
  const users = await Product.find();

  return Product;
});
