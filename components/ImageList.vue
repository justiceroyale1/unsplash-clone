<script setup lang="ts">
import ImageCard from "./ImageCard.vue";

interface ImageItem {
  author: string;
  imageUrl: string;
  location: string;
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
  <masonry-wall class="mt-n15" :items="images" :column-width="200" :gap="16">
    <template #default="{ item, index }">
      <ImageCard
        :author="item.author"
        :image-url="item.imageUrl"
        :location="item.location"
      ></ImageCard>
    </template>
  </masonry-wall>
</template>
