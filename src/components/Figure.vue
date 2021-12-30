<template>
  <v-card
    class="mx-auto figure"
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

<style scoped>
.figure {
  transition: .4s;
}

.figure:hover {
  background-color: var(--main-blue);
  color: white;
  transform: scale(1.02);
  transition: .4s;
}
</style>