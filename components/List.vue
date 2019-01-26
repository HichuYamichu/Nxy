<template>
	<v-card class="elevation-10">
		<v-toolbar flat dense class="primary" dark>
			<v-toolbar-title>
				TODO form
			</v-toolbar-title>
		</v-toolbar>
		<div class="pl-4 pr-4 pt-4 pb-2">
			<v-form>
				<v-text-field
					name="title"
					placeholder="title"
					v-model="formTitle"
					solo
				></v-text-field>
				<v-text-field
					name="description"
					placeholder="description"
					v-model="formDescription"
					solo
				></v-text-field>
			</v-form>
		</div>
	</v-card>
</template>

<script>
export default {
	data() {
		return {
			formTitle: '',
			formDescription: '',
		}
	}
}
</script>

<style>

</style>
