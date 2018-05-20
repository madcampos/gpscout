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
				<v-list two-line>
					<v-list-tile v-for="receita in receitas" :key="receita.title">
						<v-list-tile-content @click="dialog = !dialog">
							<v-list-tile-title v-html="receita.title"></v-list-tile-title>
							<v-list-tile-sub-title v-html="receita.description"></v-list-tile-sub-title>
						</v-list-tile-content>
					</v-list-tile>
				</v-list>
				<v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
					<v-card>
						<v-toolbar dark color="primary">
							<v-btn icon dark @click.native="dialog = false">
								<v-icon>close</v-icon>
							</v-btn>
							<v-toolbar-title>Receita</v-toolbar-title>
						</v-toolbar>
						<v-card-actions>
							<v-btn flat color="primary" icon @click="isFaved = !isFaved">
								<v-icon v-text="isFaved? 'favorite' : 'favorite_border'"></v-icon>
							</v-btn>
							<v-spacer></v-spacer>
							<v-bottom-sheet v-model="sheet">
								<v-btn slot="activator" flat color="primary" icon>
									<v-icon>share</v-icon>
								</v-btn>
								<v-list>
									<v-subheader>Compartilhar</v-subheader>
									<v-list-tile v-for="option in shareOptions" :key="option.title" @click="sheet = !sheet">
										<v-list-tile-avatar>
											<v-icon>{{option.icon}}</v-icon>
										</v-list-tile-avatar>
										<v-list-tile-title>{{option.title}}</v-list-tile-title>
									</v-list-tile>
								</v-list>
							</v-bottom-sheet>
						</v-card-actions>
						<v-card-text class="pa-4">
							<h1>Macarrão a Bolonhesa</h1>
							<h3>Ingredientes</h3>
							<ol>
								<li>200g de macarrão</li>
								<li>200g de molho de tomate</li>
								<li>150g de carne moida</li>
								<li>Óleo</li>
								<li>Sal a gosto</li>
							</ol>
							<h3>Modo de preparo</h3>
							<ol>
								<li>Cozinhe o macarrão</li>
								<li>Faça o molho</li>
								<li>Sirva</li>
							</ol>
						</v-card-text>
					</v-card>
				</v-dialog>
			</v-layout>
		</v-slide-y-transition>
	</v-container>
</template>
<script>
	export default {
		title: 'Receitas',
		data(){
			return {
				title: 'Receitas',
				dialog: false,
				isFaved: false,
				receitas: [
					{
						title: 'Macarrão a Bolonhesa',
						description: 'Receita de macarrão a bolonhesa'
					},
					{
						title: 'Tapioca',
						description: 'Tapioca simples com queijo'
					}
				],
				sheet: false,
				shareOptions: [
					{
						title: 'Facebook',
						icon: 'fa-facebook'
					},
					{
						title: 'Whatsapp',
						icon: 'fa-whatsapp'
					},
					{
						title: 'Instagram',
						icon: 'fa-instagram'
					},
					{
						title: 'SMS',
						icon: 'fa-comment'
					},
					{
						title: 'Telepatia',
						icon: 'fa-react'
					}
				]
			};
		}
	};
</script>