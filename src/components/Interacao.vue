<template>
	<v-container fluid fill-height pa-0>
		<v-slide-y-transition mode="out-in">
			<v-layout column justify-top pa-2>
				<v-toolbar app dark color="primary">
					<v-btn icon to="/subcampo">
						<v-icon>arrow_back</v-icon>
					</v-btn>
					<v-toolbar-title v-text="title"></v-toolbar-title>
				</v-toolbar>
				<v-dialog v-model="achadosEPerdidos" fullscreen hide-overlay transition="dialog-bottom-transition">
					<v-btn slot="activator" color="primary" large block class="mb-2">Achados e perdidos</v-btn>
					<v-card>
						<v-toolbar dark color="primary">
							<v-btn icon dark @click.native="achadosEPerdidos = false">
								<v-icon>close</v-icon>
							</v-btn>
							<v-toolbar-title>Achados e perdidos</v-toolbar-title>
						</v-toolbar>
						<v-list two-line>
							<v-subheader>Achados</v-subheader>
							<v-list-tile v-for="item in items" :key="`a-${item.title}`">
								<v-list-tile-avatar>
									<img :src="item.img">
								</v-list-tile-avatar>
								<v-list-tile-content>
									<v-list-tile-title>{{item.title}}</v-list-tile-title>
									<v-list-tile-sub-title>{{item.description}}</v-list-tile-sub-title>
								</v-list-tile-content>
							</v-list-tile>
							<v-subheader>Perdidos</v-subheader>
							<v-list-tile v-for="item in items" :key="`p-${item.title}`">
								<v-list-tile-avatar>
									<img :src="item.img">
								</v-list-tile-avatar>
								<v-list-tile-content>
									<v-list-tile-title>{{item.title}}</v-list-tile-title>
									<v-list-tile-sub-title>{{item.description}}</v-list-tile-sub-title>
								</v-list-tile-content>
							</v-list-tile>
						</v-list>
					</v-card>
				</v-dialog>
				<v-btn color="primary" large class="mb-2">Troca de itens</v-btn>
				<v-btn color="primary" large class="mb-2">Chat</v-btn>
			</v-layout>
		</v-slide-y-transition>
	</v-container>
</template>
<script>
	export default {
		title: 'Interacao',
		data(){
			return {
				title: 'Interação',
				achadosEPerdidos: false,
				items: [
					{
						title: 'Objeto Teste',
						description: 'Aqui uma descrição'
					},
					{
						title: 'Objeto Teste 2',
						description: 'Aqui uma descrição'
					},
					{
						title: 'Objeto Teste 3',
						description: 'Aqui uma descrição'
					}
				]
			};
		}
	};
</script>