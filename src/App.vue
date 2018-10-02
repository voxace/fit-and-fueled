<template>
  <v-app light>
    <v-container>
      <app-header/>
      <v-content>
         <keep-alive include="home">
           <router-view/>
         </keep-alive>
        <app-widgets/>
        <app-footer/>
      </v-content>
    </v-container>
  </v-app>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Widgets from '@/components/Widgets.vue'
  import Footer from '@/components/Footer.vue'

  export default {
    name: 'App',
    components: {
      appHeader: Header,
      appWidgets: Widgets,
      appFooter: Footer
    }
  }
</script>

<style>
  .application--wrap {
    background: #81d742 url('assets/bg-pattern.jpg') center top repeat;
  }
  .v-content {
    background: white;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
  }
</style>
