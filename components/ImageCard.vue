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
});
</script>
<template>
  <v-card class="mx-auto" max-width="400">
    <v-img class="align-end text-white" :src="imageUrl" cover>
      <v-card-title class="fill-height bottom-gradient">
        {{ author }}
      </v-card-title>
      <!-- <div class="fill-height bottom-gradient"></div> -->
    </v-img>
  </v-card>
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
