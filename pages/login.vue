<template>
	<div>
		<v-layout row>
    <v-flex xs8 offset-xs2>
      <AuthenticationPanel title="Login">
				<form autocomplete="off">
					<v-text-field
						type="email" 
            name="email"
            v-model="formEmail"
            placeholder="email"
						solo
          ></v-text-field>
          <br>
					<v-text-field
						type="password" 
            name="password"
            v-model="formPassword"
            placeholder="password"
						solo
          ></v-text-field>
					</form>
					<br>
          <div class="error" v-html="formError" />
          <v-btn
						class="primary"
            @click="login">
            Login
          </v-btn>
			</AuthenticationPanel>
    </v-flex>
  </v-layout>
	</div>
</template>

<script>
import AuthenticationPanel from '@/components/AuthenticationPanel'
	export default {
		components: {
			AuthenticationPanel
		},
		data() {
			return {
				formError: null,
				formEmail: '',
				formPassword: ''
    	}
		},
		methods: {
			async login() {
				try {
					await this.$store.dispatch('login', {
						email: this.formEmail,
						password: this.formPassword
					})
					this.formEmail = ''
					this.formPassword = ''
					this.formError = null
					this.$router.push("/")

				} catch (e) {
					this.formError = e.message
				}
    	},
		},
	}
</script>

<style scoped>

</style>
