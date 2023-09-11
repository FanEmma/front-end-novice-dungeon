import { createApp } from 'vue';
import './style.css';
import App from '@/App.vue';
import router from './router/index.ts';
import store from './store/index.ts';
import './assets/scss/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp(App).use(store).use(router);

router.isReady().then(() => {
	app.mount('#app');
});
