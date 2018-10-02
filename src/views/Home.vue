<template>
  <div>
    <app-carousel/>
    <app-body/>
  </div>
</template>

<script>
  import Carousel from '@/components/home/Carousel.vue'
  import Body from '@/components/home/Body.vue'

  export default {
    name: 'home',
    components: {
      appCarousel: Carousel,
      appBody: Body,
    }
  }
</script>

<style scoped>

</style>
