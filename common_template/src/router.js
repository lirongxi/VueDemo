import Vue from 'vue'
import Router from 'vue-router'
// import Home from './components/common/home.vue'
// import Head from './components/common/head.vue'
// import Sidebar from './components/common/Sidebar.vue'

Vue.use(Router)
const Home = resolve => {
	require.ensure(['./components/common/home.vue'], () => {
		resolve(require('./components/common/home.vue'));
	});
}
export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [{
		path: '/',
		redirect: '/Index',
	}, {
		path: '/',
		component: Home,
		children: [{
			path: '/Index',
			component: resolve => require(['@/views/index.vue'], resolve)
		}, {
			path: '/About',
			component: resolve => require(['@/views/About.vue'], resolve)
		},{
			path: '/Test',
			component: resolve => require(['@/views/test.vue'], resolve)
		}]
	}]
});