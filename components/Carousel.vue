<template>
	<v-carousel hide-delimiters>
		<a href="https://www.youtube.com/">
			<v-carousel-item
				v-for="(item,i) in items"
				:key="i"
				:src="item.src"
			></v-carousel-item>
		</a>
	</v-carousel>
	
</template>

<script>
	export default {
		data() {
			return {
				items: [
        {
          src: 'https://static.zerochan.net/Legacy.of.Lunatic.Kingdom.full.2063326.jpg'
        },
        {
          src: 'https://www.shmuptacular.com/uploads/monthly_2018_07/large.Mushihimesama_Artwork_6.jpg.3e327a8f231661c18709da8886f607c7.jpg'
        },
        {
          src: 'http://d289qh4hsbjjw7.cloudfront.net/degigamesus-official-assets/product_sales/preview_images/original/ddpr-hero-q93-444.jpg?1517906280'
        }
      ]
			}
		}
	}
</script>

<style scoped>
	#center {
		text-align: center;
	}
</style>
