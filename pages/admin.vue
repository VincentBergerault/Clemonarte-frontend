<template>
  <div>
    <h1>File Upload</h1>
    <form>
      <label for="file">File: </label>
      <input type="file" name="file" @change="onChange" />
    </form>
  </div>
</template>

<script lang="ts" setup>
import { useMainStore } from "~/store/index";
const store = useMainStore();
definePageMeta({
  middleware: "auth", // this should match the name of the file inside the middleware directory
});

const onChange = async (e: any) => {
  const files = e.target.files;
  const formData = new FormData();
  formData.append("file", files[0]);
  const { data: imgData }: any = await useFetch("/api/admin/upload", {
    method: "post",
    body: formData,
  });

  await useFetch("/api/product", {
    method: "post",
    body: {
      name: "toto",
      price: 18,
      src: imgData.value.filePath,
    },
  });
};
</script>

<style></style>
