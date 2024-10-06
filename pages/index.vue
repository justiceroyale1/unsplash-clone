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

const queryString = ref("");
const search = ref("");
const searching = ref(false);
const setSearching = (value: boolean) => {
  searching.value = value;
};

const { debounce } = useHelpers();
const updateQueryString = debounce(function () {
  setSearching(true);
  queryString.value = search.value;
});

watch(search, (newValue) => {
  updateQueryString();
});
</script>

<template>
  <v-container class="pa-0" fluid>
    <v-sheet color="grey-lighten-2">
      <v-container class="py-10">
        <v-row>
          <v-col class="mx-auto py-10" cols="12" md="10">
            <div class="text-h4 font-weight-bold py-10" v-if="searching">
              Searching for
              <span class="montagu-slab text-grey-darken-2"> &ldquo; </span>
              <span class="text-grey-darken-2"> {{ search }} </span>
              <span class="montagu-slab text-grey-darken-2"> &rdquo; </span>
            </div>
            <v-text-field
              v-else
              v-model="search"
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
          <ImageList :search="queryString"></ImageList>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<style scoped>
.montagu-slab {
  font-family: "Montagu Slab", serif;
  font-optical-sizing: auto;
  font-style: normal;
}
</style>
