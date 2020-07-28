<template>
  <v-container fluid pa-0>
    <v-row no-gutters>
      <v-col cols="12">
        <v-card>
          <v-toolbar dark>
            <v-btn @click="close()" icon dark>
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Settings</v-toolbar-title>
            <v-spacer />
            <v-toolbar-items>
              <v-btn @click="dialog = false" dark text>
                Save
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-list three-line subheader>
            <v-subheader>User Controls</v-subheader>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Content filtering</v-list-item-title>
                <v-list-item-subtitle>
                  Set the content filtering level to restrict apps that can be downloaded
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Password</v-list-item-title>
                <v-list-item-subtitle>
                  Require password for purchase or use password to restrict purchase
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-divider />
          <v-list three-line subheader>
            <v-subheader>General</v-subheader>
            <v-list-item>
              <v-list-item-action>
                <v-checkbox v-model="notifications" />
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Notifications</v-list-item-title>
                <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-action>
                <v-checkbox v-model="sound" />
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Sound</v-list-item-title>
                <v-list-item-subtitle>Auto-update apps at any time. Data charges may apply</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-action>
                <v-checkbox v-model="widgets" />
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Auto-add widgets</v-list-item-title>
                <v-list-item-subtitle>Automatically add home screen widgets</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-btn @click="clearLocalStorage()">
            Clear localStore
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    layout: 'empty',
    data () {
      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false
      }
    },
    methods: {
      close () {
        this.$router.back()
      },
      clearLocalStorage () {
        localStorage.removeItem('vuex')
      }
    }
  }
</script>
