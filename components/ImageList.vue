<script setup lang="ts">
import ImageCard from "./ImageCard.vue";

interface ImageItem {
  author: string;
  imageUrl: string;
}

interface Props {
  items: ImageItem[];
}

const props = defineProps<Props>();

const images = computed(() => {
  if (props.items.length === 0) {
    return [];
  }

  return props.items;
});
</script>
<template>
  <v-row class="mt-n15">
    <v-col cols="4" v-for="(image, i) in images" :key="i">
      <ImageCard :author="image.author" :image-url="image.imageUrl"></ImageCard>
    </v-col>
  </v-row>
</template>
