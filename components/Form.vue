<template>
		<v-dialog max-width="600px" v-model="dialog">
			<v-btn slot="activator" class="pretty" round flat>Add TODO</v-btn>
			<v-card>
				<v-toolbar>
					<v-toolbar-title>
						Add TODO
					</v-toolbar-title>
				</v-toolbar>
				<v-card-text>
					<v-form class="px-3">
						<v-text-field label="Title" v-model="title"></v-text-field>
						<v-textarea label="Description" v-model="description"></v-textarea>
						<v-btn flat class="pretty mx-0 mt-3" @click="submit">Submit</v-btn>
					</v-form>
				</v-card-text>
			</v-card>
		</v-dialog>
</template>

<script>
export default {
	data() {
		return {
			title: '',
			description: '',
			dialog: false
		}
	}, 
	methods: {
		submit() {
			this.$store.commit('todos/ADD_TODO', { title: this.title, description: this.description })
			this.$axios.$post('/api/todo', { title: this.title, description: this.description })
			this.title = ''
			this.description = ''
			this.dialog = false
		}
	}
}
</script>

<style>

</style>
