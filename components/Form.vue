<template>
		<v-dialog max-width="600px" v-model="dialog">
			<v-btn flat slot="activator" class="success">Add TODO</v-btn>
			<v-card>
				<v-card-title>
					<h2>Add TODO</h2>
				</v-card-title>
				<v-card-text>
					<v-form class="px-3">
						<v-text-field label="Title" v-model="title"></v-text-field>
						<v-textarea label="Description" v-model="description"></v-textarea>
						<v-btn flat class="secondary mx-0 mt-3" @click="submit">Submit</v-btn>
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
			this.$axios.$post('/api/todo', { title: this.title, description: this.description })
			this.dialog = false
		}
	}
}
</script>

<style>

</style>
