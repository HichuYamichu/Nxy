<template>
  <div>
		<v-toolbar app flat>
			<v-toolbar-title>
				Hichu-Yamichu
			</v-toolbar-title>
				<v-btn flat nuxt:true to="/">Main</v-btn>
			<v-spacer></v-spacer>
			<v-toolbar-items class="hidden-sm-and-down">
				<span id="item" class="mx-1" v-if="$store.state.auth.authUser">Welcome {{ $store.state.auth.authUser.username }}!</span>
				<v-btn icon small block><v-icon @click="dark">invert_colors</v-icon></v-btn>
				<todo id="item" class="mr-2" v-if="$store.state.auth.authUser"></todo>
				<v-btn flat v-if="!$store.state.auth.authUser" nuxt:true to="/login">Login</v-btn>
				<v-btn flat v-if="!$store.state.auth.authUser" nuxt:true to="/register">Register</v-btn>
				<v-btn flat v-if="$store.state.auth.authUser" nuxt:true to="/DBPage">DB</v-btn>
				<v-btn active-class="" flat v-if="$store.state.auth.authUser" @click="logout" nuxt:true to="/login" >Logout</v-btn>
			</v-toolbar-items>
		</v-toolbar>
  </div>
</template>

<script>
import todo from './Form'

export default {
	components: {
		todo
	},
	methods: {
		async logout() {
      try {
        await this.$store.dispatch('logout')
      } catch (e) {
        this.formError = e.message
      }
    },
		async dark() {
			await this.$store.dispatch('setTheme')
		}
	}
}
</script>


<style>
	#item {
		margin: auto;
		font-weight: bold;
	}
</style>
