<template>
  <div class="file-upload-container">
    <h1>File Upload</h1>
    <form @submit.prevent="onSubmit">
      <!-- File Upload -->
      <div
        class="drop-zone"
        :class="{ 'drag-over': isDragOver }"
        @dragover.prevent
        @drop.prevent="onDrop"
        @dragleave.prevent="onDragLeave"
      >
        <p v-if="!selectedFile">
          Drag & Drop your file here or click to browse
        </p>
        <p v-else>{{ selectedFile.name }}</p>
        <input
          type="file"
          name="file"
          id="file"
          @change="onFileChange"
          ref="fileInput"
          style="display: none"
        />
        <label for="file" class="browse-btn">Browse</label>
      </div>

      <!-- Name Input -->
      <label for="name">Name:</label>
      <input
        id="name"
        v-model="name"
        type="text"
        name="name"
        maxlength="40"
        placeholder="Enter name (max 40 characters)"
        required
      />

      <!-- Description Textarea -->
      <label for="description">Description:</label>
      <textarea
        id="description"
        v-model="description"
        name="description"
        maxlength="200"
        placeholder="Enter description (max 200 characters)"
        required
      ></textarea>

      <!-- Number Input -->
      <label for="price">Price:</label>
      <input
        id="price"
        v-model="price"
        type="number"
        name="price"
        placeholder="Enter price"
        required
      />

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
// import { useMainStore } from "~/store/index";

// const store = useMainStore();
const isDragOver = ref(false);
const selectedFile = ref<File | null>(null);
const name = ref("");
const description = ref("");
const price = ref<number | null>(null);

const onFileChange = (e: Event) => {
  const input = e.target as HTMLInputElement;
  if (input.files) {
    const file = input.files[0];
    handleFile(file);
  }
};

const onDrop = (e: DragEvent) => {
  isDragOver.value = false;
  const files = e.dataTransfer?.files;
  if (files && files.length > 0) {
    handleFile(files[0]);
  }
};

const onDragLeave = () => {
  isDragOver.value = false;
};

const handleFile = (file: File) => {
  selectedFile.value = file;
  // Additional file handling logic if needed
};

const onSubmit = async () => {
  // Validate and submit the form data
  if (
    name.value.length > 40 ||
    description.value.length > 200 ||
    price.value === null
  ) {
    alert("Please fill in all fields within the character limits.");
    return;
  }

  const formData = new FormData();
  formData.append("file", selectedFile.value as Blob);

  const { data: imgData }: any = await useFetch("/api/admin/upload", {
    method: "post",
    body: formData,
  });

  await useFetch("/api/product", {
    method: "post",
    body: {
      name: name.value,
      description: description.value,
      price: price.value,
      src: imgData.value.filePath,
    },
  });

  // Additional logic after submission if needed
};
</script>

<style scoped>
.file-upload-container {
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
}

.drop-zone {
  border: 2px dashed #ccc;
  padding: 20px;
  cursor: pointer;
}

.drag-over {
  border-color: #2196f3;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

label {
  font-weight: bold;
}

input,
textarea,
button {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

button {
  background-color: #2196f3;
  color: #fff;
  cursor: pointer;
}
</style>
