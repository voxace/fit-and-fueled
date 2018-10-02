<template>
  <v-container grid-list-xl>
    <h1 class="display-2 text-xs-center">About</h1>
    <v-layout row wrap>
      <v-flex xs12 sm6 md9>
        <p class="body-1 my-3 text-xs-left">
          I am a registered Dietitian, Personal Trainer and Gym Instructor with over 10 years experience in the health and fitness industry.
          I studied at the University of Newcastle and hold a Bachelor’s Degree in Nutrition and Dietetics, for which I graduated with Distinction in 2012.
          I am a member of both The Dietitians Association of Australia and Fitness Australia, and a certified Les Mills Instructor with a passion for strength and functional training.
        </p>
        <p class="body-1 my-3 text-xs-left">
          I strongly believe in a whole foods based approach to health and nutrition and recognise the vital relationship between nutrition and exercise in achieving optimal wellbeing.
          My areas of expertise are paleo, sports nutrition and performance, weight loss and body composition. I can also assist you with chronic disease management, including Type 2
          Diabetes, Heart Disease and Hypertension.
        </p>
        <p class="body-1 my-3 text-xs-left">
          I believe in empowering people to make healthy choices. My underlying goal is to develop lifelong changes in my clients, removing the
          notion of food and nutrition as a temporary diet or ‘quick fix’, rather as a source of energy, nourishment and vitality. If you have ever struggled to reach your goals with
          typical dietary advice and exercise prescription, my holistic approach to health and well-being may be just what you are looking for.
        </p>
        <p class="body-1 my-3 text-xs-left">
          Fit and Fueled: Real Food. Effective Fitness
        </p>
      </v-flex>
      <v-flex xs12 sm6 md3>
        <img :src="zoe" class="responsive"/>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
  export default {
    name: 'about',
    data() {
      return {
        zoe: require('@/assets/about.jpg')
      }
    }
  }
</script>

<style scoped>
  img {
    border-radius: 5px;
  }
</style>
