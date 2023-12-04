import { writeFile } from "fs/promises";
import { Product } from "~/server/models/product.model";

interface IRequestBody {
  name: String;
  price: Number;
  src: String;
}

export default defineEventHandler(async (event) => {
  const files = await readMultipartFormData(event);
  let filePath: string = "";

  if (!files || files.length === 0) {
    throw createError({
      statusCode: 400,
      statusMessage: "Image Not Found",
    });
  }

  if (files.length > 1) {
    throw createError({
      statusCode: 400,
      statusMessage: "Only one file at a time",
    });
  }

  console.log(files[0]);
  if (files[0].name === "file") {
    const filename = files[0].filename;
    //   const mimetype = files[i].type;
    const data = files[0].data;

    filePath = `/images/dessins/${filename}`;
    const folderPath = `./public${filePath}`;
    await writeFile(folderPath, data);
  }

  return {
    message: "success",
    filePath,
  };
});
