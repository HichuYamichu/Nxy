<template>
	<div>
		<v-layout row>
    <v-flex xs8 offset-xs2>
      <AuthenticationPanel title="Register">
				<form autocomplete="off">
					<v-text-field
						type="email" 
            name="email"
            v-model="email"
            placeholder="email"
						solo
          ></v-text-field>
          <br>
					<v-text-field
						type="password" 
            name="password"
            v-model="password"
            placeholder="password"
						solo
          ></v-text-field>
					</form>
					<br>
          <div class="error" v-html="error" />
          <v-btn
						class="primary"
            @click="login">
            register
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
		}
	}
</script>

<style scoped>

</style>
