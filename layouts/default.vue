<template>
  <v-app :dark="this.$store.state.darkTheme">
		<pageHeader/>
		<v-content>
      <v-container>    
				<nuxt/>
      </v-container>
    </v-content>
		<page-footer/>
  </v-app>
</template>

<script>

import pageHeader from '~/components/Header.vue'
import pageFooter from '~/components/Footer.vue'

  export default {
		// middleware: 'auth',
    components: {
			pageHeader,
			pageFooter
		}
  }
</script>

<style>

</style>
