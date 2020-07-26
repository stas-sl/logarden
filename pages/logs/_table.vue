<template>
  <v-app id="inspire">
    <v-app-bar flat>
      <v-img src="~/static/logo2.png" alt="logarden" max-width="100px" />
      <v-text-field
        :value="queryWhere"
        @change="queryWhere = $event"
        @keydown.enter="runQuery()"
        @keydown.esc="runQuery()"
        flat
        filled
        single-line
        dense
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="ml-3 search-input"
      />
      <v-btn @click="runQuery()" depressed color="primary" class="ml-5">
        Go
      </v-btn>
      <v-menu offset-y bottom nudge-bottom="15">
        <template v-slot:activator="{ on, attrs }">
          <v-icon v-bind="attrs" v-on="on" class="ml-3">mdi-calendar-clock</v-icon>
        </template>
        <v-card class="d-flex">
          <v-list dense class="d-flex flex-column" v-for="periodColumn in quickTimestampRanges">
            <v-list-item v-for="period in periodColumn">
              <v-list-item-content>
                <v-btn text small max-width="150" @click="changeTimestampRange(period)">{{ period.title }}</v-btn>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
    </v-app-bar>
    <v-main>
      Count: {{ logs.meta.count }}
      <histogram :data="logs.meta.histogram" />
      <v-data-table
        :headers="headers"
        :items="logs.data"
        :items-per-page="20"
        :footer-props="{
          itemsPerPageOptions: [20, 50, 100, 1000, -1]
        }"
      />
    </v-main>
  </v-app>
</template>

<script>
  import { mapState, mapActions, mapMutations } from 'vuex'
  import Histogram from '~/components/Histogram.vue'

  export default {
    components: {
      Histogram
    },
    layout: 'empty',
    data () {
      return {
        quickTimestampRanges: [
          [
            { title: 'Today', start: 'today()', end: 'today() + interval 1 day' },
            { title: 'This week', start: 'toMonday(today())', end: 'today() + interval 1 week' },
            { title: 'This month', start: 'toStartOfMonth(today())', end: 'today() + interval 1 month' },
            { title: 'This year', start: 'toStartOfYear(today())', end: 'today() + interval 1 year' },
            { title: 'Today so far', start: 'today()', end: 'now()' },
            { title: 'Week to date', start: 'toMonday(today())', end: 'now()' },
            { title: 'Month to date', start: 'toStartOfMonth(today())', end: 'now()' },
            { title: 'Year to date', start: 'toStartOfYear(today())', end: 'now()' },
            { title: 'All', start: null, end: null }
          ],
          [
            { title: 'Today', start: 'today()', end: 'today() + interval 1 day' },
            { title: 'This week', start: 'today()', end: 'today() + interval 1 week' },
            { title: 'This month', start: 'today()', end: 'today() + interval 1 month' },
            { title: 'This year', start: 'today()', end: 'today() + interval 1 year' },
            { title: 'Today so far', start: 'today()', end: 'now()' },
            { title: 'Week to date', start: 'toMonday(today())', end: 'now()' },
            { title: 'Month to date', start: 'toStartOfMonth(today())', end: 'now()' },
            { title: 'Year to date', start: 'toStartOfYear(today())', end: 'now()' }
          ],
          [
            { title: 'Today', start: 'today()', end: 'today() + interval 1 day' },
            { title: 'This week', start: 'today()', end: 'today() + interval 1 week' },
            { title: 'This month', start: 'today()', end: 'today() + interval 1 month' },
            { title: 'This year', start: 'today()', end: 'today() + interval 1 year' },
            { title: 'Today so far', start: 'today()', end: 'now()' },
            { title: 'Week to date', start: 'toMonday(today())', end: 'now()' },
            { title: 'Month to date', start: 'toStartOfMonth(today())', end: 'now()' },
            { title: 'Year to date', start: 'toStartOfYear(today())', end: 'now()' }
          ]
        ]
      }
    },
    computed: {
      ...mapState(['logs', 'startTimestamp', 'endTimestamp']),
      queryWhere: {
        get () {
          return this.$store.state.queryWhere
        },
        set (value) {
          this.setQueryWhere(value)
        }
      },
      headers () {
        return this.logs.meta.columns
          .filter(x => ['timestamp', 'user', 'ip', 'route', 'eventName', '__row_id'].includes(x.name))
          .map(x => ({
            text: x.name,
            value: x.name
          }))
      }
    },
    async fetch () {
      await this.query({})
    },
    methods: {
      ...mapActions(['query']),
      ...mapMutations(['setQueryWhere', 'setStartTimestamp', 'setEndTimestamp']),
      async runQuery () {
        await this.query({
          queryWhere: this.queryWhere,
          startTimestamp: this.startTimestamp,
          endTimestamp: this.endTimestamp
        })
      },
      async changeTimestampRange (range) {
        this.setStartTimestamp(range.start)
        this.setEndTimestamp(range.end)
        await this.runQuery()
      }
    }
  }
</script>
<style>
  .v-toolbar {
    background-color: white !important;
  }

  .search-input {
    background-color: #eee !important;
  }
</style>
