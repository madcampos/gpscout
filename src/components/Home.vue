<template>
	<v-container fluid>
		<v-slide-y-transition mode="out-in">
			<v-layout align-center pa-3>
				<v-flex xs12 sm6 offset-sm3>
					<v-toolbar app dark color="primary">
						<v-toolbar-title v-text="title"></v-toolbar-title>
					</v-toolbar>
					<v-card v-for="event in events" :key="event.id" to="/event">
						<v-card-media :src="event.img" height="200px"></v-card-media>
						<v-card-title>
							<h3>{{event.title}}</h3>
						</v-card-title>
					</v-card>
				</v-flex>
			</v-layout>
		</v-slide-y-transition>
	</v-container>
</template>
<script>
	export default {
		data(){
			return {
				title: 'GPScout',
				events: [
					{
						id: 1,
						title: 'Teste',
						img: '/static/event/teste.jpg'
					}
				]
			};
		}
	};
</script>
