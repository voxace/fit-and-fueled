<template>
  <v-container grid-list-xl>
    <h1 class="display-2 text-xs-center mb-2">Contact</h1>
    <v-layout row wrap>

      <v-flex xs12>
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe height="500" width="100%" id="gmap_canvas"
            src="https://maps.google.com/maps?q=314%20Hillsborough%20Rd%20Warners%20Bay%20NSW%202282&t=&z=17&ie=UTF8&iwloc=&output=embed"
            frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
          </div><style></style></div>
      </v-flex>

      <v-flex xs12>
        <v-divider></v-divider>
      </v-flex>

      <v-flex xs12 md6 justify-center>
        <h3 class="display-1 mb-3 text-xs-center">
          Contact Details
        </h3>
        <h3 class="headline mb-3 text-xs-center">
          Zoe Steedman
        </h3>
        <p class="body-2 mb-3 text-xs-center">
          Registered Dietitian and Personal Trainer
        </p>
        <p class="body-1 text-xs-center my-1">Phone: 0432 424 151</p>
        <p class="body-1 text-xs-center my-1">E-Mail: <a href="mailto:info@fitandfueled.com.au">info@fitandfueled.com.au</a></p>
        <p class="body-1 text-xs-center my-1">Facebook: <a href="https://www.facebook.com/fitandfueled.com.au">fitandfueled.com.au</a></p>
        <p class="body-1 text-xs-center my-1">Twitter: <a href="https://twitter.com/fitnfueled">@FitnFueled</a></p>
        <p class="body-1 text-xs-center my-1">Instagram: <a href="https://www.instagram.com/fitandfueledbyzoe/">FitAndFueledByZoe</a></p>

        <img :src="contact" class="mx-6 my-3 responsive smaller" />

      </v-flex>

      <v-flex xs12 md6>
        <h3 class="display-1 mb-3 text-xs-center">
          Email Me
        </h3>
        <p class="body-2 mb-3 text-xs-center">
          You can get in touch with me directly by filling out the form below
        </p>

        <v-form ref="form" v-model="valid" action="https://formspree.io/info@fitandfueled.com.au" method="POST">
          <v-text-field
            v-model="name"
            label="Name"
            name="name"
            :rules="nameRules"
            required
          ></v-text-field>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            name="_replyto"
            type="email"
            label="E-mail"
            required
          ></v-text-field>
          <v-text-field
            v-model="subject"
            :rules="subjectRules"
            name="subject"
            label="Subject"
            required
          ></v-text-field>
          <v-textarea
            v-model="message"
            auto-grow
            :rules="messageRules"
            label="Message"
            name="message"
            rows="6"
            :counter="10"
            required
          ></v-textarea>
          <v-btn
            id="submitButton"
            large type="submit" value="Send"
            disabled :disabled="!valid"
            color="light-green accent-4"
          >
            submit
          </v-btn>
        </v-form>
      </v-flex>

    </v-layout>
  </v-container>

</template>

<script>
  export default {
    name: 'contact',
    data() {
      return {
        contact: require('@/assets/zoe.jpg'),
        valid: false,
        name: '',
        nameRules: [
          v => !!v || 'Name is required',
        ],
        email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid'
        ],
        subject: '',
        subjectRules: [
          v => !!v || 'Subject is required',
        ],
        message: '',
        messageRules: [
          v => !!v || 'Message is required',
          v => v.length >= 10 || 'Message must be at least 10 characters long'
        ],
      }
    },
    mounted() {
      this.valid = false;
      document.getElementById("submitButton").disabled = true;
    }
  }
</script>

<style scoped>
  img {
    border-radius: 5px !important;
  }
  .smaller {
    max-width: 72% !important;
  }
  .mapouter{
    text-align:right;
    height:500px;
    width: 100%;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
  }
  .gmap_canvas {
    overflow:hidden;
    background:none!important;
    height:500px;
    width: 100%;
  }
  #gmap_canvas {
    width: 100%;
  }
</style>
