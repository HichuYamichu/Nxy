<template>
  <div>
		<v-toolbar app flat>
			<v-toolbar-title>
				Hichu-Yamichu
			</v-toolbar-title>
				<v-btn flat nuxt:true to="/">Main</v-btn>
			<v-spacer></v-spacer>
			<v-toolbar-items class="hidden-sm-and-down">
				<span id="user" v-if="$store.state.authUser">Welcome {{ $store.state.authUser.username }}!</span>
				<v-btn icon small><v-icon small @click="dark">invert_colors</v-icon></v-btn>	
				<v-btn flat v-if="!$store.state.authUser" nuxt:true to="/login">Login</v-btn>
				<v-btn flat v-if="!$store.state.authUser" nuxt:true to="/register">Register</v-btn>
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
    },
		async dark() {
			// this.$store.commit('DARK_MODE');
			await this.$store.dispatch('setTheme')
		}
	}
}
</script>


<style>
	#user {
		margin: auto;
		font-weight: bold;
	}
</style>
