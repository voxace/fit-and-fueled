<template>
  <v-toolbar class="white">
    <router-link to="/" tag="a" class="responsive"><img :src="logo" class="responsive"/></router-link>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">

      <v-btn v-for="item in items" :key="item.title"
        exact flat :to="item.link" ripple
        active-class="v-btn--active">
          {{ item.title }}
      </v-btn>

    </v-toolbar-items>
    <v-menu :nudge-bottom="50" left class="hidden-md-and-up">

        <v-toolbar-title slot="activator">
          <v-toolbar-side-icon></v-toolbar-side-icon>
        </v-toolbar-title>

        <v-list>

          <router-link tag="v-list-tile"
            v-for="item in items" :key="item.title"
            :to="item.link" active-class="active" exact>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </router-link>

        </v-list>
      </v-menu>
  </v-toolbar>
</template>

<script>
  export default {
    data() {
      return {
        logo: require('@/assets/logo-small-90px1.jpg'),
        items: [
          { title:'About', link:'/about' },
          { title:'Nutrition', link:'/nutrition' },
          { title:'Personal Training', link: '/personal-training' },
          { title:'Prices', link:'/prices' },
          { title:'Contact', link:'/contact' }
        ]
      }
    }
  }
</script>

<style scoped>
  .responsive {
    height: 90%;
    max-width: 100%;
  }
</style>
