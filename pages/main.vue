<template>
  <v-app id="inspire">
    <v-app-bar flat>
      <v-img src="/logo2.png" alt="logarden" max-width="100px"/>
      <v-text-field
        :value="queryString"
        @change="queryString = $event"
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
    </v-app-bar>
    <v-main>
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

  export default {
    layout: 'empty',
    computed: {
      ...mapState(['logs']),
      queryString: {
        get () {
          return this.$store.state.queryString
        },
        set (value) {
          this.setQueryString(value)
        }
      },
      headers () {
        return this.logs.meta
          .filter(x => ['timestamp', 'user', 'ip', 'route', 'eventName'].includes(x.name))
          .map(x => ({
            text: x.name,
            value: x.name
          }))
      }
    },
    async fetch () {
      await this.query(`select * from events where ${this.queryString || 1} limit 1000`)
    },
    methods: {
      ...mapActions(['query']),
      ...mapMutations(['setQueryString']),
      async runQuery () {
        await this.query(`select * from events where ${this.queryString || 1} limit 1000`)
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
