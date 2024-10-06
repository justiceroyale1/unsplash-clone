<script setup lang="ts">
defineProps({
  author: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

const dialog = ref(false);
const openDialog = () => {
  dialog.value = true;
};
const closeDialog = () => {
  dialog.value = false;
};
</script>
<template>
  <v-card class="mx-auto" max-width="400" @click="openDialog">
    <v-img class="align-end text-white" :src="imageUrl" cover>
      <v-card-title class="fill-height bottom-gradient">
        {{ author }}
      </v-card-title>
    </v-img>
  </v-card>

  <ImageDialog
    :dialog="dialog"
    :author="author"
    :image-url="imageUrl"
    :location="location"
    @close="closeDialog"
  ></ImageDialog>
</template>

<style scoped>
.bottom-gradient {
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.85) 15%,
    transparent 80%
  );
}
</style>
