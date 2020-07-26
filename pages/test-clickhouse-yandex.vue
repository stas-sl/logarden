<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-btn @click="click">
        click
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    layout: 'empty',
    methods: {
      click () {
        this.$axios.$post('https://play.clickhouse.tech/api/v20.3/?database=datasets&user=playground&password=clickhouse',
                          'select * from hits_v1 limit 1000 format JSON')
      }
    }
  }
</script>
