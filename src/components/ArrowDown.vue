<template>
    <img
        class="see-more-arrow"
        src="https://img.icons8.com/ios/32/ffffff/expand-arrow--v2.png"
    />
</template>

<script>
export default {};
</script>

<style scoped>
.see-more-arrow {
  margin: 20px auto 0 auto;
  display: block;
  animation-name: seeMoreArrow;
  animation-duration: 4s;
  animation-iteration-count: infinite;
}

@keyframes seeMoreArrow {
  0% {
    transform: translateY(0px)
  } 25% {
    transform: translateY(5px)
  } 100% {
    transform: translateY(0px)
  }
}
</style>
