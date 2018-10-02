<template>
  <div>
    <div id="fb-root"></div>
    <section>
      <v-container grid-list-xl>
        <v-layout row wrap justify-center>
          <v-flex xs12 xl9 lg8 md8 sm6>
            <v-layout row wrap>
              <v-flex xs12>
                <v-card class="elevation-0 transparent">
                  <h1 class="display-2">Fit and Fueled</h1>
                  <h2 class="display-1 my-3">Real Food. Effective Fitness.</h2>
                  <h3 class="title font-weight-light my-3">Accredited Practising Dietitian and Certified Personal Trainer specialising
                    in whole food nutrition for weight loss, well-being and sports performance.<h3>
                </v-card>
              </v-flex>

              <v-flex md5 sm12>
                <v-card class="elevation-0 transparent">
                  <h1 class="headline">Nutrition</h1>
                  <p class="text-xs-center body-1 my-1">Whole Food / Paleo</p>
                  <p class="text-xs-center body-1 my-1">Sports Nutrition</p>
                  <p class="text-xs-center body-1 my-1">General Health & Wellbeing</p>
                  <p class="text-xs-center body-1 my-1">Special Dietary Conditions</p>
                  <p class="text-xs-center body-1 my-1">Weight loss</p>
                  </ul>
                  <v-btn color="success" large class="my-3" @click="findOutMoreNutrition()">Find out more!</v-btn>
                </v-card>

              </v-flex>

              <v-flex md2 sm12 class="hidden-sm-and-down">
                <v-divider vertical></v-divider>
              </v-flex>

              <v-flex md5 sm12>
                <v-card class="elevation-0 transparent">
                  <h1 class="headline">Personal Training</h1>
                  <p class="text-xs-center body-1 my-1">Individuals</p>
                  <p class="text-xs-center body-1 my-1">Small groups</p>
                  <p class="text-xs-center body-1 my-1">Weight management</p>
                  <p class="text-xs-center body-1 my-1">Functional Fitness</p>
                  <p class="text-xs-center body-1 my-1">Strength Training</p>
                  <v-btn color="success" large class="my-3" @click="findOutMorePT()">Find out more!</v-btn>
                </v-card>
              </v-flex>

            </v-layout>

            <v-layout row wrap justify-center>
              <v-flex xs12>
                <img :src="associations" class="responsive"/>
              </v-flex>
              <v-flex xs12>
                <h2 class="display-1">Health fund rebates available!</h2>
              </v-flex>
            </v-layout>

          </v-flex>



          <v-flex xs12 xl3 lg4 md4 sm6>
            <div
              class="fb-page"
              data-href="https://www.facebook.com/fitandfueled.com.au"
              data-tabs="timeline"
              data-small-header="true"
              data-adapt-container-width="true"
              data-height="700px"
              data-hide-cover="true"
              data-show-facepile="true">
              <blockquote cite="https://www.facebook.com/fitandfueled.com.au"
                class="fb-xfbml-parse-ignore">
                <a href="https://www.facebook.com/fitandfueled.com.au">Fit and Fueled</a>
              </blockquote>
            </div>
          </v-flex>

        </v-layout>
      </v-container>
    </section>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        associations: require('@/assets/associations.jpg')
      }
    },
    created() {
      if(!fbsdk) {
        var fbsdk = (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v3.1';
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
      }
    },
    methods: {
      findOutMoreNutrition() {
        this.$router.push('nutrition');
      },
      findOutMorePT() {
        this.$router.push('personal-training');
      }
    }
  }
</script>

<style>
  .responsive {
    height: auto;
    max-width: 100%;
  }
</style>
