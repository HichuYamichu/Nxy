<template>
	<div>
		<v-layout row>
    	<v-flex xs4 offset-xs4>
      	<AuthenticationPanel title="Register">
					<form autocomplete="off">
						<v-text-field
							prepend-icon="person"
							type="email" 
							name="email"
							v-model="formEmail"
							placeholder="email"
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
            @click="register">
            Register
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
			async register() {
				try {
					await this.$store.dispatch('register', {
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
