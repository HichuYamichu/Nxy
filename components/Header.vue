<template>
  <div>
		<v-toolbar app flat>
			<v-toolbar-title>
				Hichu-Yamichu
			</v-toolbar-title>
				<v-btn flat nuxt:true to="/">Main</v-btn>
			<v-spacer></v-spacer>
			<v-toolbar-items class="hidden-sm-and-down">
				<v-btn flat v-if="!$store.state.authUser" nuxt:true to="/login">Login</v-btn>
				<v-btn flat v-if="!$store.state.authUser" nuxt:true to="/register">Register</v-btn>
				<v-btn flat v-if="$store.state.authUser" nuxt:true to="/inspire">About</v-btn>
				<v-btn flat v-if="$store.state.authUser" nuxt:true to="/DBPage">DB</v-btn>
				<v-btn active-class="" flat v-if="$store.state.authUser" @click="logout" nuxt:true to="/login" >Logout</v-btn>
			</v-toolbar-items>
		</v-toolbar>
  </div>
</template>

<script>
export default {
	methods: {
		async logout() {
      try {
        await this.$store.dispatch('logout')
      } catch (e) {
        this.formError = e.message
      }
    }
	}
}
</script>


<style>

</style>
