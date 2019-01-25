<template>
  <div id="app">

    <v-app>

      <v-content>
        <v-container fluid>
          <v-layout row>
            <v-flex md12 lg10 xl10>
              {{ this.$vuetify.breakpoint.mdAndDown }}
            </v-flex>
            <v-flex md12 lg2 xl2>
              {{ this.$vuetify.breakpoint.smAndDown }}
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
      <v-footer app>2019 FranchiseFaves.com</v-footer>

    </v-app>

  </div>
</template>

<style lang="scss">

</style>
