import { Product } from "~/server/models/product.model";

interface IRequestBody {
  name: String;
  price: Number;
  src: String;
}

export default defineEventHandler(async (event) => {
  const { name, price, src } = await readBody<IRequestBody>(event);

  const newUserData = await Product.create({
    name,
    price,
    src,
  });

  return {
    id: newUserData._id,
    name: newUserData.name,
  };
});
