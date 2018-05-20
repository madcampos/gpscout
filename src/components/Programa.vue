<template>
	<v-container fluid fill-height pa-0>
		<v-slide-y-transition mode="out-in">
			<v-layout align-top column>
				<v-toolbar app dark color="primary">
					<v-btn icon to="/event">
						<v-icon>arrow_back</v-icon>
					</v-btn>
					<v-toolbar-title v-text="title"></v-toolbar-title>
				</v-toolbar>
				<v-carousel>
					<v-carousel-item v-for="(item, i) in imagens" :src="item" :key="i"></v-carousel-item>
				</v-carousel>
				<v-list three-line subheader class="pt-3">
					<v-list-tile>
						<v-list-tile-content>
							<v-list-tile-title>Horarios</v-list-tile-title>
							<v-list-tile-sub-title>
								08:00 - 12:00, 14:00 - 19:00
							</v-list-tile-sub-title>
						</v-list-tile-content>
					</v-list-tile>
				</v-list>
			</v-layout>
		</v-slide-y-transition>
	</v-container>
</template>
<script>
	export default {
		title: 'Programa',
		data(){
			return {
				title: 'Base Teste',
				imagens: [
					'/static/subcampo/1.jpg',
					'/static/subcampo/2.jpg',
					'/static/subcampo/3.jpg',
					'/static/subcampo/4.jpg',
					'/static/subcampo/5.jpg'
				]
			};
		}
	};
</script>
<style>
	.carousel{
		height: 200px;
	}
</style>