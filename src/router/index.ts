import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('@/views/Home.vue'),
		meta: { title: '首頁' }
	},
	{
		path: '/MultiplicationTable',
		name: 'MultiplicationTable',
		component: () => import('@/views/MultiplicationTable.vue'),
		meta: { title: '九九乘法表' }
	},
	{
		path: '/Clock',
		name: 'Clock',
		component: () => import('@/views/Clock.vue'),
		meta: { title: '時鐘' }
	},
	{
		path: '/Calculator',
		name: 'Calculator',
		component: () => import('@/views/Calculator.vue'),
		meta: { title: '計算機' }
	},
	{
		path: '/Loader',
		name: 'Loader',
		component: () => import('@/views/Loader.vue'),
		meta: { title: 'Loader' }
	},
	{
		path: '/WorldClock',
		name: 'WorldClock',
		component: () => import('@/views/WorldClock.vue'),
		meta: { title: 'WorldClock' }
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;
