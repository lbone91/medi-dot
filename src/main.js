import Vue from 'vue';
import vuetify from '@/plugins/vuetify.js';
import TextareaAutosize from 'vue-textarea-autosize';
import 'normalize.css/normalize.css'; // A modern alternative to CSS resets

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/ko'; // lang i18n

import '@/styles/index.scss'; // global css

import App from './App';
import router from './router';

import '@/icons'; // icon

// set ElementUI lang to EN
Vue.use(ElementUI, { locale });
Vue.use(TextareaAutosize);

Vue.config.productionTip = false;

new Vue({
	el: '#app',
	router,
	vuetify,
	render: h => h(App),
});
