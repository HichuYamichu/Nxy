<template>
	<div>
		<v-layout row>
    	<v-flex xs4 offset-xs4>
      	<AuthenticationPanel title="Login">
					<form autocomplete="off">
						<v-text-field
							prepend-icon="person"
							type="username" 
							name="username"
							v-model="formUsername"
							placeholder="username"
							solo
						></v-text-field>
         	 <br>
						<v-text-field
							prepend-icon="lock"
							type="password" 
							name="password"
							v-model="formPassword"
							placeholder="password"
							solo
						></v-text-field>
					</form>
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
			formUsername: '',
			formPassword: '',
		}
	},
	methods: {
		async login() {
			try {
				await this.$store.dispatch('login', {
					username: this.formUsername,
					password: this.formPassword
				})
				this.formUsername = ''
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
