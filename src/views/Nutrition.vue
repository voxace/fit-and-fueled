<template>
  <v-container grid-list-xl>
    <h1 class="display-2 text-xs-center">Nutrition</h1>
    <v-layout row wrap>
      <v-flex xs12>
        <p class="body-1 my-3 text-xs-left">
          I offer custom dietetic advice that is adjusted to meet your specific lifestyle, individual needs and goals.
          I believe this results in far greater effectiveness than a ‘one-size-fits-all’ approach and my passion is in empowering you to make real,
          positive changes that will last a lifetime. I educate my clients on nutrition and will teach you how to eat real, whole food to energize your
          body and allow it to function as it was designed to.
        </p>
        <p class="body-1 mt-3 text-xs-left">
          During your first session, a full assessment of your health and medical history, current eating habits/preferences, overall lifestyle and
          personal goals will help to identify your individual needs. I will provide you with evidence-based nutrition advice and equip you with the
          knowledge and tools you need to succeed, including recommendations, guidelines, structured meal suggestions and goal setting. Follow-up visits
          are focused on accountability, assessment of goal-meeting progress, further nutrition education, addressing any challenges or problem areas,
          answering any food and nutrition questions that may have arisen, and helping you to stay motivated and inspired!
        </p>
      </v-flex>
      <v-flex xs12 md6>
        <p class="body-1 mb-3 text-xs-left">
          Areas addressed in individualised consults include, but are not limited to:
        </p>
        <ul>
          <li class="body-1 text-xs-left">Paleo and Wholefoods nutrition</li>
          <li class="body-1 text-xs-left">Weight management including weight loss, weight gain and body recomposition</li>
          <li class="body-1 text-xs-left">Sports Nutrition and eating for performance and recovery</li>
          <li class="body-1 text-xs-left">General health and wellness</li>
          <li class="body-1 text-xs-left">GI disorders: Coeliac disease, Irritable bowel syndrome, Crohn’s, low FODMAPS diet, Gluten free</li>
          <li class="body-1 text-xs-left">Type 2 Diabetes, Insulin resistance and impaired glucose tolerance</li>
          <li class="body-1 text-xs-left">Gut health: GI issues, diarrhoea, constipation, food intolerances</li>
          <li class="body-1 text-xs-left">Metabolic syndrome</li>
          <li class="body-1 text-xs-left">Cardiovascular disease: high cholesterol, high blood pressure, heart disease</li>
          <li class="body-1 text-xs-left">Iron deficiency anaemia</li>
          <li class="body-1 text-xs-left">Polycystic Ovarian Syndrome (PCOS)</li>
          <li class="body-1 text-xs-left">Preventing or delaying lifestyle diseases such as diabetes and heart disease</li>
        </ul>
      </v-flex>
      <v-flex xs12 md6>
        <img :src="food" class="responsive"/>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
  export default {
    name: 'nutrition',
    data() {
      return {
        food: require('@/assets/healthy-food.jpg')
      }
    }
  }
</script>

<style scoped>
  img {
    border-radius: 5px;
  }
</style>
