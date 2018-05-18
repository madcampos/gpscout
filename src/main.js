// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify, {theme: {
	primary: '#FF8A65',
	secondary: '#FF7043',
	accent: '#9CCC65',
	error: '#F44336',
	warning: '#ffeb3b',
	info: '#2196f3',
	success: '#4caf50'
}});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: {App},
	template: '<App/>'
});