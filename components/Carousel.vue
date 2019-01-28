<template>
	<v-carousel hide-delimiters light>
		<a
		v-for="(item,i) in items"
		:key="i"
		:href='item.vid'
				>
			<v-carousel-item :src="item.src"></v-carousel-item>
		</a>
	</v-carousel>
	
</template>

<script>
	export default {
		data() {
			return {
				link: 'https://www.youtube.com/',
				items: [
        {
          src: 'https://static.zerochan.net/Legacy.of.Lunatic.Kingdom.full.2063326.jpg',
					vid: 'https://www.youtube.com/watch?v=T1rNAEtdJe4'
        },
        {
          src: 'https://www.shmuptacular.com/uploads/monthly_2018_07/large.Mushihimesama_Artwork_6.jpg.3e327a8f231661c18709da8886f607c7.jpg',
					vid: 'https://www.youtube.com/watch?v=g3DNGvGsBOE'
				},
        {
          src: 'http://d289qh4hsbjjw7.cloudfront.net/degigamesus-official-assets/product_sales/preview_images/original/ddpr-hero-q93-444.jpg?1517906280',
					vid: 'https://www.youtube.com/watch?v=90C-yETmsM0'
				}
      ]
			}
		}
	}
</script>

<style scoped>
</style>
