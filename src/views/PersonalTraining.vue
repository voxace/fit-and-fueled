<template>
  <v-container grid-list-xl>
    <h1 class="display-2 text-xs-center">Personal Training</h1>
    <v-layout row wrap class="mt-3">
      <v-flex xs12 md7>
        <p class="body-1 mb-3 text-xs-left">
          I offer a range of Personal Training services including:
        </p>
        <ul>
          <li class="body-1 text-xs-left">One-on-One Training</li>
          <li class="body-1 text-xs-left">Small group Training (2, 3 or 4 people)</li>
          <li class="body-1 text-xs-left">Strength Training</li>
          <li class="body-1 text-xs-left">Functional Training</li>
          <li class="body-1 text-xs-left">Training for weight loss/fat loss</li>
          <li class="body-1 text-xs-left">High Intensity Interval Training</li>
          <li class="body-1 text-xs-left">Fitness testing and assessment</li>
          <li class="body-1 text-xs-left">Personalised fitness programs and goal setting</li>
        <li class="body-1 text-xs-left">Regular monitoring of your progress and goals</li>
        </ul>
      </v-flex>
      <v-flex xs12 md5>
        <img :src="pt" class="responsive"/>
      </v-flex>
      <v-flex xs12>
        <p class="body-1 my-3 text-xs-left">
          My individual personal training programs are designed to help you achieve your goals regardless of your current level of fitness or training experience.
        </p>
        <p class="body-1 mt-3 text-xs-left">
          Individual training involves one trainer with one client, whilst group training involves one trainer with two or more clients at the same time.
          All group training prices are quoted as price per person. There are no membership or joining fees for any personal training services.
        </p>
        <p class="body-1 mt-3 text-xs-left">
          Please note your first session will be an introductory consultation to clarify your training objectives, conduct pre-exercise screening and do some basic fitness testing.
          This will allow me to better plan your program around your individual goals and current fitness level.
        </p>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
  export default {
    name: 'personal-training',
    data() {
      return {
        pt: require('@/assets/PT.jpg')
      }
    }
  }
</script>

<style scoped>
  img {
    border-radius: 5px;
  }
</style>
