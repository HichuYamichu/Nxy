<template>
	<div>
		<v-layout row>
    <v-flex xs6 offset-xs3>
      <div class="accent">
        <v-toolbar flat dense class="primary" dark>
          <v-toolbar-title>{{title}}</v-toolbar-title>
        </v-toolbar>
				<div class="pl-4 pr-4 pt-4 pb-2" id="center">
					<slot>
						undefined
					</slot>
        </div>
      </div>
    </v-flex>
  </v-layout>
	</div>
</template>

<script>
	export default {
		props: [
			'title'
		]
	}
</script>

<style scoped>
	#center {
		text-align: center;
	}
</style>
