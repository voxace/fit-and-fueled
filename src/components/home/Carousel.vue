<template>
  <v-carousel v-resize="onResize" hide-delimiters :style="{ height: resized }">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: require('@/assets/services.jpg')
          },
          {
            src: require('@/assets/packages.jpg')
          },
          {
            src: require('@/assets/personal-training.jpg')
          },
          {
            src: require('@/assets/paleo-dietician.jpg')
          }
        ],
        resized: '150px'
      }
    },
    methods: {
      onResize () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs':
            this.resized = '100px';
            break;
          case 'sm':
            this.resized = '200px'
            break;
          case 'md':
            this.resized = '270px'
            break;
          case 'lg':
            this.resized = '350px'
            break;
          case 'xl':
            this.resized = '450px'
            break;
        }
      }
    }
  }
</script>

<style>

</style>
