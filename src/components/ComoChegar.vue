<template>
	<v-container fluid fill-height pa-0>
		<v-slide-y-transition mode="out-in">
			<v-layout align-top column>
				<v-toolbar app dark color="primary">
					<v-btn icon to="/subcampo">
						<v-icon>arrow_back</v-icon>
					</v-btn>
					<v-toolbar-title v-text="title"></v-toolbar-title>
				</v-toolbar>
				<GmapMap :center="{lat: lat, lng: long}" :zoom="17" style="width: 100vw; height: 100%">
					<DirectionsRenderer />
				</GmapMap>
			</v-layout>
		</v-slide-y-transition>
	</v-container>
</template>
<script>
	import DirectionsRenderer from './DirectionsRenderer.js';
	export default {
		components: {DirectionsRenderer},
		title: 'ComoChegar',
		data(){
			return {
				title: 'Como chegar',
				lat: -20.507022,
				'long': -48.601495
			};
		},
		beforeMount(){
			navigator.geolocation.getCurrentPosition((position) => {
				this.lat = position.coords.latitude;
				this.long = position.coords.longitude;
			});
		}
	};
</script>