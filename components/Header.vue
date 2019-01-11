<template>
  <div>
		<v-toolbar>
			<v-toolbar-title>
				Hichu-Yamichu
			</v-toolbar-title>
				<v-btn flat nuxt:true to="/">Main</v-btn>
			<v-spacer></v-spacer>
			<v-toolbar-items class="hidden-sm-and-down">
				<v-btn flat nuxt:true to="/login">Login</v-btn>
				<v-btn flat nuxt:true to="/register">Register</v-btn>
				<v-btn flat nuxt:true to="/inspire">About</v-btn>
				<v-btn flat nuxt:true to="/DBPage">DB</v-btn>
				<v-btn flat>Link Three</v-btn>
			</v-toolbar-items>
		</v-toolbar>
  </div>
</template>

<style>

</style>
