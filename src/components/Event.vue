<template>
	<v-container fluid fill-height pa-0>
		<v-slide-y-transition mode="out-in">
			<v-layout align-top>
				<v-toolbar app dark color="primary">
					<v-btn icon to="/">
						<v-icon>arrow_back</v-icon>
					</v-btn>
					<v-toolbar-title v-text="title"></v-toolbar-title>
				</v-toolbar>
				<!-- Map -->
				<div id="map">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1490.06 1056.07">
					<path fill="#02923d" d="M0 0h1490.06v1054.42H0z"/><g data-name="Area de uso exclusivo do parque" fill="#e57715"><path d="M961.55 661.07l-254-13.33-5.33 105.33 108.67 23.33c16.33 11.34 46.66 51 64 68s45.33 36.67 45.33 36.67zM1357.55 0l-4 263.74-34.66 20-316.67 63.33V0h355.33zM795.9 0H982v286.17H795.9zM1429.36 444.07L1116.2 667.75l59.21 94.74-214.47 164.35 101.32 127.58h427.8V550.65l-60.7-106.58z"/></g>
					<path id="lago" @click="navigateTo('/lago')" d="M1352.89 26.4s32 103.67 137.17 226v201.34C1348.05 301.9 1257.55 80.4 1257.55 80.4z" fill="#281871"/>
					<g id="subcampos">
						<g id="subcampo2" @click="navigateTo('/subcampo')"><path fill="#b8db7c" d="M269.55 253.74l72.67 194.66 216.67 164.67 204 11.33 7.33-607.33-76.67-4-297.33 156-31.33-20.67-79.34 56.67-16 48.67z"/><path fill="#02923d" d="M624.1 230.91h105.26v56.58H624.1zM624.1 204.57h28.04v26.25H624.1zM701.32 204.57h28.04v26.25h-28.04zM671.14 156.82h13.25v20h-13.25zM342.13 206.73h105.26v56.58H342.13zM342.13 263.4h28.04v26.25h-28.04zM419.35 263.4h28.04v26.25h-28.04zM389.17 317.4h13.25v20h-13.25zM624.51 302.19h105.26v56.58H624.51zM624.51 358.86h28.04v26.25h-28.04zM701.73 358.86h28.04v26.25h-28.04zM671.55 412.86h13.25v20h-13.25zM624.13 483.32h105.26v56.58H624.13zM624.13 539.99h28.04v26.25h-28.04zM701.35 539.99h28.04v26.25h-28.04zM671.17 593.99h13.25v20h-13.25z"/></g>
						<g id="subcampoStaff" @click="navigateTo('/subcampo')"><path fill="#b8db7c" d="M795.55 277.07h178.67l5.33 216.67-13 144.33-175-13.67.71-61.35 3.29-285.98z"/><g data-name="Detalhes campos" fill="red"><path d="M805.39 306.07h10v10h-10zM805.39 321.32h10v10h-10zM805.39 337.9h10v10h-10zM823.22 305.99h10v10h-10zM823.22 321.24h10v10h-10zM823.22 337.82h10v10h-10zM840.22 306.03h10v10h-10zM840.22 321.28h10v10h-10zM840.22 337.86h10v10h-10zM858.05 305.94h10v10h-10zM858.05 321.19h10v10h-10zM858.05 337.78h10v10h-10zM893.14 306.34h10v10h-10zM893.14 321.59h10v10h-10zM893.14 338.17h10v10h-10zM910.97 306.26h10v10h-10zM910.97 321.51h10v10h-10zM910.97 338.09h10v10h-10zM927.97 306.3h10v10h-10zM927.97 321.55h10v10h-10zM927.97 338.13h10v10h-10zM945.8 306.21h10v10h-10zM945.8 321.46h10v10h-10zM945.8 338.05h10v10h-10zM805.39 368.09h10v10h-10zM805.39 383.34h10v10h-10zM805.39 399.92h10v10h-10zM823.22 368.01h10v10h-10zM823.22 383.26h10v10h-10zM823.22 399.84h10v10h-10zM840.22 368.05h10v10h-10zM840.22 383.3h10v10h-10zM840.22 399.88h10v10h-10zM858.05 367.96h10v10h-10zM858.05 383.21h10v10h-10zM858.05 399.8h10v10h-10zM893.14 368.36h10v10h-10zM893.14 383.61h10v10h-10zM893.14 400.19h10v10h-10zM910.97 368.28h10v10h-10zM910.97 383.53h10v10h-10zM910.97 400.11h10v10h-10zM927.97 368.32h10v10h-10zM927.97 383.57h10v10h-10zM927.97 400.15h10v10h-10zM945.8 368.24h10v10h-10zM945.8 383.49h10v10h-10zM945.8 400.07h10v10h-10zM805.39 447.36h10v10h-10zM805.39 462.61h10v10h-10zM805.39 479.19h10v10h-10zM823.22 447.28h10v10h-10zM823.22 462.53h10v10h-10zM823.22 479.11h10v10h-10zM840.22 447.32h10v10h-10zM840.22 462.57h10v10h-10zM840.22 479.15h10v10h-10zM858.05 447.24h10v10h-10zM858.05 462.49h10v10h-10zM858.05 479.07h10v10h-10zM893.14 447.63h10v10h-10zM893.14 462.88h10v10h-10zM893.14 479.46h10v10h-10zM910.97 447.55h10v10h-10zM910.97 462.8h10v10h-10zM910.97 479.38h10v10h-10zM927.97 447.59h10v10h-10zM927.97 462.84h10v10h-10zM927.97 479.42h10v10h-10zM945.8 447.51h10v10h-10zM945.8 462.76h10v10h-10zM945.8 479.34h10v10h-10zM805.39 509.38h10v10h-10zM805.39 524.63h10v10h-10zM805.39 541.21h10v10h-10zM823.22 509.3h10v10h-10zM823.22 524.55h10v10h-10zM823.22 541.13h10v10h-10zM840.22 509.34h10v10h-10zM840.22 524.59h10v10h-10zM840.22 541.17h10v10h-10zM858.05 509.26h10v10h-10zM858.05 524.51h10v10h-10zM858.05 541.09h10v10h-10zM893.14 509.65h10v10h-10zM893.14 524.9h10v10h-10zM893.14 541.49h10v10h-10zM910.97 509.57h10v10h-10zM910.97 524.82h10v10h-10zM910.97 541.4h10v10h-10zM927.97 509.61h10v10h-10zM927.97 524.86h10v10h-10zM927.97 541.44h10v10h-10zM945.8 509.53h10v10h-10zM945.8 524.78h10v10h-10zM945.8 541.36h10v10h-10z"/></g></g>
						<g id="subcampo1" @click="navigateTo('/subcampo')"><path fill="#b8db7c" d="M1002.22 347.07l316.67-63.33 105.33 148-315.33 229.33-122.67-5.33 16-308.67z"/><path fill="#02923d" d="M1009.69 352.19h56.58v105.26h-56.58zM1066.36 429.42h26.25v28.04h-26.25zM1066.36 352.19h26.25v28.04h-26.25zM1120.36 410.41v-13.25h20v13.25zM1020.85 487.78h105.26v56.58h-105.26zM1020.85 544.45h28.04v26.25h-28.04zM1098.08 544.45h28.04v26.25h-28.04zM1067.89 598.45h13.25v20h-13.25zM1140.447 331.382l54.883-14.71 27.367 102.101-54.882 14.711z"/><path fill="#02923d" d="M1210.084 391.79l25.358-6.785 7.248 27.088-25.358 6.785zM1190.12 317.195l25.358-6.785 7.247 27.087-25.357 6.785zM1256.763 353.967l-3.445-12.852 19.4-5.2 3.445 12.852zM1156.657 484.785l46.708-31.934 59.407 86.893-46.707 31.934zM1247.02 516.547l21.67-14.815 15.825 23.147-21.67 14.815zM1203.437 452.803l21.67-14.815 15.825 23.147-21.67 14.815zM1280.855 470.415l-7.479-10.938 16.51-11.288 7.479 10.938z"/></g>
					</g>
					<g fill="#77c5f0" id="programas">
						<path id="programa4" @click="navigateTo('/programa')" d="M96.04 426.49l213.56-57.62 150.85 57.62v77.97l103.39 10.17-4.95 98.44-438-32-20-30-4.85-124.58z"/>
						<path id="programa3" @click="navigateTo('/programa')" d="M979.55 665.74l131.34 3.33 68.66 100-208 162.67-26-30.67 34-235.33z"/>
						<path id="programa2" @click="navigateTo('/programa')" d="M886.64 657.14l-32.71 164.99-43.04-45.73-108.67-23.33 5.33-105.33 179.09 9.4z"/>
						<path id="programa1" @click="navigateTo('/programa')" d="M346.89 655.07H141.55l-4.66 125.33 22.66 22 179.34 6.67 8-154z"/>
					</g>
					<g id="comida">
						<path id="mercado" @click="navigateTo('/mercado')" fill="#28166f" d="M894.89 568.4v14.34l33.33 2.33-2.63 47.34-134.04-8.01.71-61.35 102.63 5.35z"/>
						<path id="refeitorioStaff" @click="navigateTo('/programa')" fill="red" d="M385.89 872.07h74v57.67h-74z"/>
					</g>
					<circle id="banheiros" cx="203.22" cy="934.07" r="29" fill="red"/>
					<g fill="red" id="arena" @click="navigateTo('/programa')"><ellipse cx="716.36" cy="869.45" rx="64.53" ry="40.38"/><path d="M716.36 783.74c-65.61 0-118.81 38.37-118.81 85.71s53.2 85.72 118.81 85.72 118.81-38.38 118.81-85.72-53.17-85.71-118.81-85.71zm0 143.1c-43.93 0-79.54-25.69-79.54-57.39s35.61-57.38 79.54-57.38 79.54 25.69 79.54 57.38-35.61 57.39-79.54 57.39z"/></g>
					<path id="recepcao" @click="navigateTo('/programa')" fill="red" d="M160.22 619.07h36v36h-36z"/>
					<g id="centroEscoteiro" @click="navigateTo('/programa')" fill="red"><path d="M406.297 662.145l18.376.925-.924 18.377-18.377-.925zM427.606 663.225l18.377.924-.925 18.377-18.377-.925zM449.921 664.344l18.377.925-.924 18.376-18.377-.924zM471.888 665.447l18.377.924-.924 18.377-18.377-.925zM493.188 666.516l18.376.924-.924 18.377-18.377-.925zM515.493 667.645l18.376.925-.924 18.376-18.377-.924zM554.873 807.47l.925-18.377 18.377.924-.925 18.377zM555.944 786.17l.925-18.376 18.376.924-.924 18.377zM557.069 763.861l.924-18.376 18.377.924-.925 18.377zM558.95 741.007l.92-18.4 18.4.92-.92 18.4zM559.242 720.59l.925-18.377 18.377.924-.925 18.377zM561.08 697.396l.92-18.4 18.4.92-.92 18.4zM398.279 794.655l18.377.925-.925 18.377-18.377-.925zM419.588 795.725l18.377.924-.925 18.377-18.376-.924zM441.904 796.854l18.376.925-.924 18.377-18.377-.925zM463.87 797.957l18.377.924-.925 18.377-18.376-.924zM485.18 799.036l18.376.925-.924 18.376-18.377-.924zM507.485 800.155l18.377.925-.925 18.376-18.377-.924zM395.22 730.4h47.67v23h-47.67zM458.68 724.74h77.55v36h-77.55zM345.89 696.07h21.67v74.33h-21.67z"/></g>
					<path id="saude" @click="navigateTo('/programa')" fill="red" d="M633.89 672.85h16.33v30.22h-16.33z"/>
					<g fill="#757575"><path d="M394.39 179.07L720.39 0h-26l-297 161.07-24-18L295.39 0h-14l78.5 150.57 34.5 28.5z"/><path d="M1434.62 445.38l-10.52-14.47-310.53 226.32L985.94 648l15.79-135.53V506c5.41-3.25 8.91-8.4 8.91-14.19s-3.5-10.94-8.91-14.2V0H974.1v477.84c-5.16 3.27-8.46 8.28-8.46 13.92s3.3 10.65 8.46 13.91v1.56l-11.84 126.31-169.74-7.89L799.1 0h-25l-11.84 625.65L118.84 577c.8-11-21.06-27.63-21.06-27.63L78.05 0h-25.5l19.67 552.74s-15.46 17.33-16.33 32.33 14.66 27.67 14.66 27.67l1.34 110c-12.5 46-71.89 43-71.89 43v13.83h22.39c-6.61 8.27-9.62 30.93-9.5 51L0 826.82v14.25s63.89 61.56 63.89 103.33v111.67h32l-2.34-65.67h25l4.67-122 27.67-22.33 53.11 2.22-4.76 64.46 10.5.77 4.79-64.79 79.71 3.34-5.67 82.67h.67l-5.32 72 8.68.64 5.32-72 63.7 4.62-4.93 66.79 9.18.68 4.94-66.81 159.54 11.47s30.91 95.45 56 102.3l7-7.85c-43.49-39.86-48.5-102.63-48.5-102.63l.15-104.77h.1l10-135.64-10.24-.76-8.84 119.68-92.6-5.65-3.57 49.25 95 5.5-4.54 67.07-153.42-10.06v-62.5h57.5l3.52-49.59-52.67-3.21 7-154.25 157.76 7.2.69-15-204.14-9.32-.68 15 29.33 1.34-7 154-215.65-13.17-43.33-22.67 3-107.33 15.33-13.33 32-2v-37.67l451 25.61-4.44 131.14 82.25-.25 11.09-125.84 258.44 14.67-35.67 216-27.33-11s-69.5-104.58-170-103.66c-54.88-2.42-123.34 36.33-123.34 36.33l13.34 29 8.66-12.33-3.66-10.34s23.5-20.41 103-29 168 104 168 104l26.63 11-25 68.42-147.52 94.6h55.38l117.11-72.19 18.42-57.9 85.53 130.09h42.1l-117.1-159 36.84-226.31 122.37 5.26 69.73 103.95 9.21-14.47-65.78-94.74zM59.39 867.69c-17.26 0-31.25-22.16-31.25-49.5s14-49.5 31.25-49.5 31.25 22.17 31.25 49.5-13.99 49.5-31.25 49.5zm395.5-13.62v-22.5l80 6.86v19.14zm-74.81-27.63l45.31 1.63v22.5h-45.31zm-21.69 98.63l-53.5-3 2.5-60h56.84zm-193.5-111l199.34 12v15.5l-199.34-9.75zm-38.36-8.33a16.13 16.13 0 1 1-16.13 16.13 16.13 16.13 0 0 1 16.13-16.13zm547.36-45.42h-53.75l7.25-113.5 55.25 1.75z"/></g></svg>
				</div>
				<!-- End map -->
				<v-bottom-sheet v-model="sheet">
					<v-btn slot="activator" fab fixed bottom right color="primary" dark>
						<v-icon>menu</v-icon>
					</v-btn>
					<v-list>
						<v-subheader>Lugares</v-subheader>
						<div v-for="(item, index) in items" :key="item.id">
							<v-list-group v-if="item.subItems" v-model="item.active" no-action @click="highlightArea(index, item.id)">
								<v-list-tile slot="activator">
									<v-list-tile-avatar></v-list-tile-avatar>
									<v-list-tile-title>{{item.title}}</v-list-tile-title>
								</v-list-tile>
								<v-list-tile v-for="subItem in item.subItems" :key="subItem.id" @click="openArea(index, subItem.id)">
									<v-list-tile-avatar></v-list-tile-avatar>
									<v-list-tile-title>{{subItem.title}}</v-list-tile-title>
								</v-list-tile>
							</v-list-group>
							<v-list-tile v-else @click="openArea(index, item.id)">
								<v-list-tile-avatar></v-list-tile-avatar>
								<v-list-tile-title>{{item.title}}</v-list-tile-title>
							</v-list-tile>
						</div>
					</v-list>
				</v-bottom-sheet>
			</v-layout>
		</v-slide-y-transition>
	</v-container>
</template>
<script>
	export default {
		name: 'EventHome',
		data(){
			return {
				sheet: false,
				items: [
					{
						id: 'banheiros',
						title: 'Banheiros',
						img: ''
					},
					{
						id: 'arena',
						title: 'Arena Central',
						img: ''
					},
					{
						id: 'centroEscoteiro',
						title: 'Centro Escoteiro',
						img: ''
					},
					{
						id: 'mercado',
						title: 'Mercado',
						img: ''
					},
					{
						id: 'lago',
						title: 'Lago',
						img: ''
					},
					{
						id: 'subcampos',
						title: 'Subcampos',
						img: '',
						active: false,
						subItems: [
							{
								id: 'subcampo1',
								title: 'Subcampo 1',
								img: ''
							},
							{
								id: 'subcampo2',
								title: 'Subcampo 2',
								img: ''
							},
							{
								id: 'subcampoStaff',
								title: 'Subcampo Staff',
								img: ''
							}
						]
					},
					{
						id: 'comida',
						title: 'Comida',
						img: '',
						active: false,
						subItems: [
							{
								id: 'mercado',
								title: 'Mercado',
								img: ''
							},
							{
								id: 'listaDeCompras',
								title: 'Lista de Compras',
								img: ''
							},
							{
								id: 'receitas',
								title: 'Lista de Receitas',
								img: ''
							},
							{
								id: 'refeitorioStaff',
								title: 'Refeitório Staff',
								img: ''
							}
						]
					},
					{
						id: 'programas',
						title: 'Bases',
						img: '',
						active: false,
						subItems: [
							{
								id: 'programa1',
								title: 'Base Teste',
								img: ''
							},
							{
								id: 'programa2',
								title: 'Base Teste 2',
								img: ''
							},
							{
								id: 'programa3',
								title: 'Base Teste 3',
								img: ''
							},
							{
								id: 'programa4',
								title: 'Base Teste 4',
								img: ''
							}
						]
					}
				],
				title: 'Evento',
				previousHighlight: null
			};
		},
		methods: {
			highlightArea(item, area){
				if (this.previousHighlight) {
					document.getElementById(this.previousHighlight).classList.remove('highlight');
				}

				document.getElementById(area).classList.add('highlight');
				this.previousHighlight = area;

				this.items[item].active = !this.items[item].active;
			},
			openArea(item, area){
				this.sheet = false;

				if (area === 'listaDeCompras' || area === 'receitas') {
					this.$router.push(`/${area}`);
				} else {
					this.highlightArea(item, area);
				}
			},
			navigateTo(path){
				this.$router.push(path);
			}
		}
	};
</script>
<style>
	#map{
		overflow: auto;
		width: 100vw;
		height: 100vh;
	}

	#map > svg{
		height: 100%;
	}

	.bottom-sheet{
		max-height: 50% !important;
		overflow: auto !important;
	}

	.highlight{
		stroke: crimson;
		stroke-width: 0.5rem;
	}
</style>