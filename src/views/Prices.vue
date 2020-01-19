<template>
  <v-container grid-list-xl>
    <h1 class="display-2 text-xs-center">Prices</h1>
    <v-layout
      row
      wrap
      class="mt-3"
    >

      <v-flex
        xs12
        md6
      >
        <h3 class="headline mb-3 text-xs-center">
          Nutrition
        </h3>
        <v-data-table
          :headers="headers1"
          :items="data1"
          hide-actions
          class="elevation-1"
        >
          <template
            slot="items"
            slot-scope="props"
          >
            <td class="text-xs-left">{{ props.item.description }}</td>
            <td class="text-xs-right">{{ props.item.price }}</td>
          </template>
        </v-data-table>
      </v-flex>

      <v-flex
        xs12
        md6
      >
        <h3 class="headline mb-3 text-xs-center">
          Personal Training
        </h3>
        <v-data-table
          :headers="headers2"
          :items="data2"
          hide-actions
          class="elevation-1"
        >
          <template
            slot="items"
            slot-scope="props"
          >
            <td class="text-xs-left">{{ props.item.description }}</td>
            <td class="text-xs-right">{{ props.item.single }}</td>
          </template>
        </v-data-table>
      </v-flex>

      <v-flex xs12>
        <v-divider></v-divider>
      </v-flex>

      <v-flex xs12>
        <h1 class="display-2 text-xs-center">Packages</h1>
        <p class="body-1 my-3 text-xs-left">
          If you’re serious about your goals, you can’t have one without the other. Whether you’re just starting out or looking to make some serious lifestyle changes,
          these packages are designed to help get you get started and keep you motivated for long-lasting results!
        </p>
      </v-flex>

      <v-flex
        xs12
        md4
      >
        <v-card hover>
          <v-card-title
            primary-title
            class="justify-center light-green accent-4"
          >
            <div>
              <h3 class="headline mb-1">Basic</h3>
              <div>LET'S GET STARTED</div>
            </div>
          </v-card-title>
          <v-card-text class="justify-center">
            <div>
              <h1 class="display-2 mb-1">$199</h1>
              <h4>SAVE $30</h4>
              <p class="body-1 my-1 text-xs-center">Initial dietary consult</p>
              <p class="body-1 my-1 text-xs-center">Initial 1 hour PT consult</p>
              <p class="body-1 my-1 text-xs-center"> - </p>
              <p class="body-1 my-1 text-xs-center">+ 1 Additional dietary review</p>
            </div>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn
              flat
              color="light-green accent-4"
              @click="findOutMore()"
            >Find out more</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex
        xs12
        md4
      >
        <v-card hover>
          <v-card-title
            primary-title
            class="justify-center light-green accent-4"
          >
            <div>
              <h3 class="headline mb-1">Standard</h3>
              <div>4 WEEK MOTIVATOR</div>
            </div>
          </v-card-title>
          <v-card-text class="justify-center">
            <div>
              <h1 class="display-2 mb-1">$319</h1>
              <h4>SAVE $50</h4>
              <p class="body-1 my-1 text-xs-center">Initial dietary consult</p>
              <p class="body-1 my-1 text-xs-center">Initial 1 hour PT consult</p>
              <p class="body-1 my-1 text-xs-center">1 30 min dietary follow-up session</p>
              <p class="body-1 my-1 text-xs-center">+ 1 Additional 45 min PT session</p>
            </div>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn
              flat
              color="light-green accent-4"
              @click="findOutMore()"
            >Find out more</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex
        xs12
        md4
      >
        <v-card hover>
          <v-card-title
            primary-title
            class="justify-center light-green accent-4"
          >
            <div>
              <h3 class="headline mb-1">Premium</h3>
              <div>12 WEEK COACH</div>
            </div>
          </v-card-title>
          <v-card-text class="justify-center">
            <div>
              <h1 class="display-2 mb-1">$799</h1>
              <h4>SAVE $100</h4>
              <p class="body-1 my-1 text-xs-center">Initial dietary consult</p>
              <p class="body-1 my-1 text-xs-center">Initial 1 hour PT consult</p>
              <p class="body-1 my-1 text-xs-center">4 x 30 min dietary follow-up sessions</p>
              <p class="body-1 my-1 text-xs-center">+ 1 Additional 45 min PT session</p>
            </div>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn
              flat
              color="light-green accent-4"
              @click="findOutMore()"
            >Find out more</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
export default {
  name: 'prices',
  data () {
    return {
      headers1: [
        { text: 'Description', align: 'left', sortable: false, value: 'description' },
        { text: 'Price', align: 'right', sortable: false, value: 'price' }
      ],
      data1: [
        {
          value: false,
          description: 'Initial Dietetic Consult (1 hour)',
          price: '$80'
        },
        {
          value: false,
          description: 'Dietetic Review (30 min)',
          price: '$40'
        },
        {
          value: false,
          description: 'Dietetic Review (5 pack)',
          price: '$175'
        },
        {
          value: false,
          description: '1 Week Custom Meal Plan (includes initial consult)',
          price: '$150'
        },
        {
          value: false,
          description: 'Nutrition Overhaul (includes initial consult, dietary analysis, 1 week custom meal plan and one month unlimited nutrition support via telephone/email)',
          price: '$400'
        },
      ],
      headers2: [
        { text: 'Description', align: 'left', sortable: false, value: 'description' },
        { text: 'Price ($)', align: 'right', sortable: false, value: 'single' }
      ],
      data2: [
        {
          value: false,
          description: '45 min PT session (1-on-1)',
          single: '$50'
        },
        {
          value: false,
          description: '60 min PT session (1-on-1)',
          single: '$60'
        },
        {
          value: false,
          description: '45 min PT session (2-on-1)',
          single: '$30 each'
        },
        {
          value: false,
          description: '60 min PT session (2-on-1)',
          single: '$35 each'
        },
        {
          value: false,
          description: '45 min PT session (3-on-1)',
          single: '$20 each'
        },
        {
          value: false,
          description: '60 min PT session (3-on-1)',
          single: '$25 each'
        }
      ]
    }
  },
  methods: {
    findOutMore () {
      this.$router.push('contact');
    }
  }
}
</script>

<style>
thead,
th,
thead tr {
  background-color: #64dd17 !important;
  color: black !important;
  font-size: 16px !important;
}
</style>
