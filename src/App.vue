<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
    >
      <h1 class="white--text">
        Dynamic Template Addon
      </h1>
    </v-app-bar>
    <v-content>
      <v-container>
        <v-row class="justify-center">
          <v-col cols="3">
            <DatePicker v-model="date" />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import DatePicker from "./components/DatePicker"

export default {
  components: {
    DatePicker
  },
  data: () => ({
    date: ""
  }),
  name: "App",
};
</script>
