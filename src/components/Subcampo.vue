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
							<v-list-tile-title>Patrulhas presentes</v-list-tile-title>
							<v-list-tile-sub-title>
								<v-chip small disabled outline v-for="patrulha in patrulhas" :key="patrulha">{{patrulha}}</v-chip>
							</v-list-tile-sub-title>
						</v-list-tile-content>
					</v-list-tile>
					<v-list-tile to="/comoChegar">
						<v-list-tile-content>
							<v-list-tile-title>Como chegar</v-list-tile-title>
							<v-list-tile-sub-title>Descubra como chegar neste subcampo.</v-list-tile-sub-title>
						</v-list-tile-content>
					</v-list-tile>
					<v-list-tile to="/atividades">
						<v-list-tile-content>
							<v-list-tile-title>Atividades do subcampo</v-list-tile-title>
							<v-list-tile-sub-title>Veja a programação para este subcampo.</v-list-tile-sub-title>
						</v-list-tile-content>
					</v-list-tile>
					<v-list-tile to="/interacao">
						<v-list-tile-content>
							<v-list-tile-title>Interação</v-list-tile-title>
							<v-list-tile-sub-title>Achados e perdidos, trocas, conversas, etc.</v-list-tile-sub-title>
						</v-list-tile-content>
					</v-list-tile>
				</v-list>
			</v-layout>
		</v-slide-y-transition>
	</v-container>
</template>
<script>
	export default {
		title: 'Subcampo',
		data(){
			return {
				title: 'Subcampo',
				imagens: [
					'/static/subcampo/1.jpg',
					'/static/subcampo/2.jpg',
					'/static/subcampo/3.jpg',
					'/static/subcampo/4.jpg',
					'/static/subcampo/5.jpg'
				],
				patrulhas: [
					'Coruja',
					'Corvo',
					'Urso',
					'Lobo',
					'Leão',
					'Tigre'
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