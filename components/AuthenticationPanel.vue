<template>
	<v-layout>
		<v-flex>
			<v-card class="elevation-10">
				<div class="accent">
					<v-toolbar flat dense class="primary" dark>
						<v-toolbar-title>{{title}}</v-toolbar-title>
					</v-toolbar>
					<div class="pl-4 pr-4 pt-4 pb-2" id="center">
						<slot>
							undefined
						</slot>
					</div>
				</div>
			</v-card>
		</v-flex>
	</v-layout>
</template>

<script>
	export default {
		props: [
			'title'
		]
	}
</script>

<style scoped>
	#center {
		text-align: center;
	}
</style>
