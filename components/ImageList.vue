<script setup lang="ts">
import ImageCard from "./ImageCard.vue";

interface Props {
  search: String;
}

const props = defineProps<Props>();

const tempImages = [
  {
    author: "John Doe",
    location: "Garki, Abuja",
    imageUrl: "/images/image1.jpg",
  },
  {
    author: "John Doe",
    location: "Garki, Abuja",
    imageUrl: "/images/image2.jpg",
  },
  {
    author: "John Doe",
    location: "Garki, Abuja",
    imageUrl: "/images/image3.jpg",
  },
  {
    author: "John Doe",
    location: "Garki, Abuja",
    imageUrl: "/images/image4.jpg",
  },
  {
    author: "John Doe",
    location: "Garki, Abuja",
    imageUrl: "/images/image5.jpg",
  },
  {
    author: "John Doe",
    location: "Garki, Abuja",
    imageUrl: "/images/image6.jpg",
  },
];

const images = computed(() => {
  return tempImages;
});

const loading = ref(true);

const getRandomHeight = () => {
  const heights = [240, 265, 285, 305];
  let index = Math.round(Math.random() * (heights.length - 1));

  return heights[index];
};
</script>
<template>
  <masonry-wall class="mt-n15" :items="images" :column-width="200" :gap="16">
    <template #default="{ item, index }">
      <v-card
        v-if="loading"
        :class="['mx-auto', `loader-card-${getRandomHeight()}`]"
        max-width="400"
        flat
      >
        <v-skeleton-loader
          theme="dark"
          color="grey-lighten-1"
          type="image, heading, subtitle"
        >
        </v-skeleton-loader>
      </v-card>
      <ImageCard
        v-else
        :author="item.author"
        :image-url="item.imageUrl"
        :location="item.location"
        :style="{ height: `${(index + 1) * 100}px` }"
      ></ImageCard>
    </template>
  </masonry-wall>
</template>
<style lang="css">
/**.loader-card.v-card__loader {
  display: none;
}**/
.loader-card-240 .v-skeleton-loader__image {
  height: 240px;
}
.loader-card-265 .v-skeleton-loader__image {
  height: 265px;
}
.loader-card-285 .v-skeleton-loader__image {
  height: 285px;
}
.loader-card-305 .v-skeleton-loader__image {
  height: 305px;
}
</style>
