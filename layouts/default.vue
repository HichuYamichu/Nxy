<template>
  <v-app dark>
		<pageHeader id="top"/>
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
    components: {
			pageHeader,
			pageFooter
		}
  }
</script>

<style>
	#top {
		margin-top: 5%;
	}

</style>
