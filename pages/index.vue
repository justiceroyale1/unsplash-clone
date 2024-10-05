<script setup lang="ts">
import ImageList from "~/components/ImageList.vue";

useSeoMeta({
  title: "Unsplash Clone",
  ogTitle: "Unsplash Clone",
  description:
    "This is a mini unsplash clone. It is built in fulfillment of the requirement for the Frontend Engineer Test by Cowrywise",
  ogDescription:
    "This is a mini unsplash clone. It is built in fulfillment of the requirement for the Frontend Engineer Test by Cowrywise",
  twitterCard: "summary_large_image",
});

const images = [
  {
    author: "John Doe",
    imageUrl: "/images/image1.jpg",
  },
  {
    author: "John Doe",
    imageUrl: "/images/image2.jpg",
  },
  {
    author: "John Doe",
    imageUrl: "/images/image3.jpg",
  },
  {
    author: "John Doe",
    imageUrl: "/images/image4.jpg",
  },
  {
    author: "John Doe",
    imageUrl: "/images/image5.jpg",
  },
  {
    author: "John Doe",
    imageUrl: "/images/image6.jpg",
  },
];
</script>

<template>
  <v-container class="pa-0" fluid>
    <v-sheet color="grey-lighten-2">
      <v-container class="py-10">
        <v-row>
          <v-col class="mx-auto" cols="12" md="10">
            <v-text-field
              placeholder="Search for photo"
              variant="solo"
              bg-color="white"
              base-color="black"
              prepend-inner-icon="mdi-magnify"
              rounded="24"
              class="py-15"
              flat
              hide-details
              clearable
            >
            </v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <v-container>
      <v-row>
        <v-col class="mx-auto" cols="12" md="8">
          <ImageList :items="images"></ImageList>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
