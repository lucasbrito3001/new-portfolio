<template>
  <figure>
    <img :src="image" width="100%" height="100%" alt="" />
    <caption>
      {{
        caption
      }}
    </caption>
  </figure>
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
figure {
  position: relative;
  box-shadow: 1px 1px 6px 1px gray, -1px -1px 4px 4px var(--gray-bg);
}

figure:hover img {
  opacity: 0.5;
  transition: 0.3s;
}

figure:hover {
  background-color: var(--main-blue);
}

caption {
  position: absolute;
  bottom: 0;
  left: 0;
  color: white;
  background-color: var(--main-blue);
  width: 100%;
  text-align: left;
  padding: 10px;
}
</style>