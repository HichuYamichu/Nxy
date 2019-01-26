<template>
	<v-layout row wrap justify-space-around>
		<v-flex xs6>
			<panel></panel>
		</v-flex>
		<v-flex xs4>
			<panel></panel>
		</v-flex>
		<v-flex xs6 class="mt-5">
			<carousel/>
		</v-flex>
		<v-flex xs4 class="mt-5">
			<todo/>
		</v-flex>
	</v-layout>
</template>

<script>
import panel from '~/components/Panel.vue'
import todo from '~/components/todo.vue'
import carousel from '~/components/Carousel.vue'

export default {
  components: {
		panel,
		carousel,
		todo
  },
}
</script>
