<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="5">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Login form</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field label="Login" name="login" prepend-icon="mdi-account" type="text" />
              <v-text-field id="password" label="Password" name="password" prepend-icon="mdi-lock" type="password" />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary">
              Login
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <!--  <el-container>-->
  <!--    <el-main>-->
  <!--      <el-row type="flex" justify="center" align="middle">-->
  <!--        <el-col :span="9">-->
  <!--          <el-form ref="form" :model="connection" label-width="80px" size="medium">-->
  <!--            <el-row>-->
  <!--              <el-col :span="14">-->
  <!--                <el-form-item label="Host">-->
  <!--                  <el-input v-model="connection.host" placeholder="localhost" />-->
  <!--                </el-form-item>-->
  <!--              </el-col>-->
  <!--              <el-col :span="10">-->
  <!--                <el-form-item label="Port">-->
  <!--                  <el-input v-model="connection.port" placeholder="8123" />-->
  <!--                </el-form-item>-->
  <!--              </el-col>-->
  <!--            </el-row>-->
  <!--            <el-form-item label="Database">-->
  <!--              <el-input v-model="connection.database" />-->
  <!--            </el-form-item>-->
  <!--            <el-form-item label="User">-->
  <!--              <el-input v-model="connection.user" placeholder="8123" />-->
  <!--            </el-form-item>-->
  <!--            <el-form-item label="Password">-->
  <!--              <el-input v-model="connection.password" type="password" autocomplete="off" />-->
  <!--            </el-form-item>-->
  <!--            <el-form-item>-->
  <!--              <el-button @click="connect" type="primary">-->
  <!--                Connect-->
  <!--              </el-button>-->
  <!--            </el-form-item>-->
  <!--          </el-form>-->
  <!--        </el-col>-->
  <!--      </el-row>-->
  <!--    </el-main>-->
  <!--  </el-container>-->
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    layout: 'empty',
    data () {
      return {}
    },
    computed: {
      ...mapState(['connection'])
    },
    methods: {
      async connect () {
        await this.$axios.post(`http://${this.connection.host}:${this.connection.port}/${this.connection.database}?add_http_cors_header=1&log_queries=1&output_format_json_quote_64bit_integers=1&output_format_json_quote_denormals=1&user=${this.connection.user}`, 'select 123 format JSON')
        this.$router.push('main')
      }
    }
  }
</script>
<style scoped>
  .el-form {
    border: 1px solid #ebebeb;
    border-radius: 3px;
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, .6), 0 2px 4px 0 rgba(232, 237, 250, .5);
    padding: 30px 30px 0px 20px;
  }
</style>
