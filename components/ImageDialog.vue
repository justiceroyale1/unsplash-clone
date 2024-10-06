<script setup lang="ts">
const props = defineProps({
  dialog: {
    type: Boolean,
    default: false,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

const { dialog } = toRefs(props);

const emit = defineEmits(["close"]);

const model = ref(false);
const setModel = (value: boolean) => {
  model.value = value;
};

// watchEffect(() => {
//   if (dialog.value) {
//     setModel(dialog.value);
//   }
// });

watch(dialog, (newValue) => {
  setModel(newValue);
});

const closeDialog = () => {
  //   dialog.value = !dialog.value;
  //   setModel(false);
  emit("close");
};
</script>

<template>
  <v-dialog v-model="model" width="1024" persistent>
    <v-fab
      class="ml-auto"
      icon="$close"
      style="z-index: 300"
      variant="plain"
      @click="closeDialog"
    ></v-fab>
    <v-card>
      <v-img
        position="center center"
        height="600"
        class="align-end text-white"
        content-class="overflow-y-auto"
        :src="imageUrl"
        cover
      >
      </v-img>
      <!-- <v-card-text>
      </v-card-text> -->
      <v-card-title class="pl-10 pt-5">
        {{ author }}
      </v-card-title>

      <v-card-subtitle class="pl-10 pb-5">
        {{ location }}
      </v-card-subtitle>

      <!-- <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn text="Close Dialog" @click="toggleDialog"></v-btn>
      </v-card-actions> -->
    </v-card>
  </v-dialog>
</template>
