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
			</v-layout>
		</v-slide-y-transition>
	</v-container>
</template>
<script>
	export default {
		title: 'ListaDeCompras',
		data(){
			return {
				title: 'Lista de Compras'
			};
		}
	};
</script>