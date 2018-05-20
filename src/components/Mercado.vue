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
				<v-list two-line>
					<v-subheader>Categoria</v-subheader>
					<v-list-tile v-for="item in items" :key="item.title">
						<v-list-tile-avatar>
							<img :src="item.img">
						</v-list-tile-avatar>
						<v-list-tile-content>
							<v-list-tile-title>{{item.title}}</v-list-tile-title>
							<v-list-tile-sub-title>{{item.description}}</v-list-tile-sub-title>
						</v-list-tile-content>
					</v-list-tile>
					<v-subheader>Categoria 2</v-subheader>
					<v-list-tile v-for="item in items" :key="`c2-${item.title}`">
						<v-list-tile-avatar>
							<img :src="item.img">
						</v-list-tile-avatar>
						<v-list-tile-content>
							<v-list-tile-title>{{item.title}}</v-list-tile-title>
							<v-list-tile-sub-title>{{item.description}}</v-list-tile-sub-title>
						</v-list-tile-content>
					</v-list-tile>
				</v-list>
				<v-btn fab fixed bottom right color="primary"><v-icon>shopping_cart</v-icon></v-btn>
				<v-btn fab fixed bottom right color="primary" class="shiftLeft"><v-icon>list</v-icon></v-btn>
			</v-layout>
		</v-slide-y-transition>
	</v-container>
</template>
<script>
	export default {
		title: 'Mercado',
		data(){
			return {
				title: 'Mercado',
				imagens: [
					'/static/subcampo/1.jpg',
					'/static/subcampo/2.jpg',
					'/static/subcampo/3.jpg',
					'/static/subcampo/4.jpg',
					'/static/subcampo/5.jpg'
				],
				items: [
					{
						title: 'Alimento Teste',
						description: 'Aqui uma descrição'
					},
					{
						title: 'Alimento Teste 2',
						description: 'Aqui uma descrição'
					},
					{
						title: 'Alimento Teste 3',
						description: 'Aqui uma descrição'
					}
				]
			};
		}
	};
</script>
<style>
	.shiftLeft{
		margin-right: 5rem;
	}

	.carousel{
		height: 200px;
	}
</style>