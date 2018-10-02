<template>
  <section>

    <v-divider class="mb-3"></v-divider>

          <v-layout row wrap align-center>

            <v-flex xs12 sm4>
              <h2 class="headline my-2">Connect</h2>
              <p class="body-1 my-0">Connect with us on Social Media below:</p>
              <v-layout row wrap align-center justify-center>
                <v-flex xs10 offset-xs1 class="mb-1 mt-3">
                  <a href="https://www.facebook.com/fitandfueled.com.au">
                    <v-icon x-large color="green accent-4" class="mx-2">fab fa-facebook-square</v-icon>
                  </a>
                  <a href="http://instagram.com/fitandfueledbyzoe">
                    <v-icon x-large color="green accent-4" class="mx-2">fab fa-instagram</v-icon>
                  </a>
                  <a href="https://twitter.com/FitnFueled">
                    <v-icon x-large color="green accent-4" class="mx-2">fab fa-twitter-square</v-icon>
                  </a>
                  <a href="http://au.linkedin.com/pub/zoe-steedman/79/244/5a6">
                    <v-icon x-large color="green accent-4" class="ml-2 mr-5">fab fa-linkedin</v-icon>
                  </a>
                </v-flex>
              </v-layout>
            </v-flex>

            <v-flex xs12 sm4>
              <h2 class="headline my-2">Location</h2>
              <p class="body-1 my-0">Fit and Fueled</p>
              <p class="body-1 my-0">Genetics Fitness Club</p>
              <a href="http://maps.google.com/maps?ll=-32.965829,151.65696&z=18&t=m&hl=en-US&gl=AU&mapclient=embed&q=314%20Hillsborough%20Rd%20Warners%20Bay%20NSW%202282">
                  <p class="body-1 my-0">314 Hillsborough Rd</p>
                  <p class="body-1 my-0">Warners Bay, NSW, 2282</p>
              </a>
            </v-flex>

            <v-flex xs12 sm4>
              <h2 class="headline my-2">Contact</h2>
              <p class="body-1 my-0">Zoe Steedman</p>
              <p class="body-1 my-0">Dietitian and Personal Trainer</p>
              <p class="body-1 my-0">Phone: 0432 424 151</p>
              <p class="body-1 my-0">
                Email: <a href="#">info@fitandfueled.com.au</a>
              </p>
            </v-flex>

          </v-layout>

    <v-divider class="mt-4"></v-divider>
  </section>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  a {
    text-decoration: none;
  }
  a:hover {
    color: #00aa00;
  }
  .v-icon:hover {
    color: #00aa00 !important;
    text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  }
</style>
