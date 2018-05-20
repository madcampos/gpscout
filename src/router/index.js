import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import EventHome from '@/components/Event';
import Subcampo from '@/components/Subcampo';
import Atividades from '@/components/Atividades';
import Interacao from '@/components/Interacao';
import ComoChegar from '@/components/ComoChegar';
import Receitas from '@/components/Receitas';
import Lago from '@/components/Lago';
import Mercado from '@/components/Mercado';
import ListaDeCompras from '@/components/ListaDeCompras';
import Programa from '@/components/Programa';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/event',
			name: 'Event',
			component: EventHome
		},
		{
			path: '/subcampo',
			name: 'Subcampo',
			component: Subcampo
		},
		{
			path: '/comoChegar',
			name: 'ComoChegar',
			component: ComoChegar
		},
		{
			path: '/interacao',
			name: 'Interacao',
			component: Interacao
		},
		{
			path: '/atividades',
			name: 'Atividades',
			component: Atividades
		},
		{
			path: '/listaDeCompras',
			name: 'ListaDeCompras',
			component: ListaDeCompras
		},
		{
			path: '/receitas',
			name: 'Receitas',
			component: Receitas
		},
		{
			path: '/mercado',
			name: 'Mercado',
			component: Mercado
		},
		{
			path: '/lago',
			name: 'Lago',
			component: Lago
		},
		{
			path: '/programa',
			name: 'Programa',
			component: Programa
		}
	]
});
