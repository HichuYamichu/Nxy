<template>
	<v-layout row wrap justify-space-around>
		<v-flex xs6>
			<panel/>
		</v-flex>
		<v-flex xs4>
			<panel/>
		</v-flex>
		<v-flex xs6 class="mt-5">
			<carousel/>
		</v-flex>
		<v-flex xs4 class="mt-5">
			<panel/>
		</v-flex>
	</v-layout>
</template>

<script>
import panel from '~/components/Panel.vue'
import carousel from '~/components/Carousel.vue'

export default {
  components: {
		panel,
		carousel
  }
}
</script>
