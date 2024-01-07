<template>
  <div class="modal">
    <div class="modal-content">
      <div class="file-upload-container">
        <h1>Ajouter Produit</h1>
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
              id="file"
              ref="fileInput"
              type="file"
              name="file"
              style="display: none"
              @change="onFileChange"
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

          <!-- Select Input -->
          <label for="selectType">Select Type:</label>
          <select
            id="selectType"
            v-model="selectedType"
            name="selectType"
            required
          >
            <option
              v-for="option in typeOptions"
              :key="option.value"
              :value="option.value"
            >
              {{ option.label }}
            </option>
          </select>

          <button type="submit">Submit</button>
        </form>
        <button @click="$emit('close-modal')">Fermer</button>
        <ErrorAlert />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import ErrorAlert from "~/components/ErrorAlert.vue";

defineEmits(["close-modal"]);

// import { useMainStore } from "~/store/index";
// const store = useMainStore();

// const props = defineProps();

// const emit = defineEmits(["submit"]);

const isDragOver = ref(false);
const selectedFile = ref<File | null>(null);
const name = ref("");
const description = ref("");
const price = ref<number | null>(null);
const selectedType = ref(""); // New property for the selected type

const typeOptions = ref([
  { label: "Print", value: "print" },
  { label: "Bookmark", value: "bookmark" },
  { label: "Draw", value: "draw" },
]);

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
  if (
    name.value.length > 40 ||
    description.value.length > 200 ||
    price.value === null ||
    selectedType.value === "null"
  ) {
    alert("Please fill in all fields within the character limits.");
    return;
  }

  const formData = new FormData();
  formData.append("file", selectedFile.value as Blob);

  const { data: imgData, error }: any = await useFetch("/api/admin/upload", {
    method: "post",
    body: formData,
  });
  if (!error) {
    await useFetch("/api/product", {
      method: "post",
      body: {
        name: name.value,
        description: description.value,
        price: price.value,
        type: selectedType.value,
        src: imgData.value.filePath,
      },
    });
  } else {
    ErrorAlert.openAlert("Something went wrong!");
  }
};
</script>

<style scoped>
/* Add your styling for the modal */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.modal button {
  margin-top: 10px;
}
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
