<template>
  <v-card
    class="mx-auto"
  >
    <v-img
      :src="image"
      height="100%"
      width="100%"
    ></v-img>

    <v-card-title>
      {{ caption }}
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: "",
    },
    caption: {
      type: String,
      default: "",
    },
  },
};
</script>