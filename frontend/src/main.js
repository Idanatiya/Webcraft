import vue from 'vue';
import app from '@/app.vue';
import router from '@/router/routes';
import store from '@/store/store';

import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en';
import * as VueGoogleMaps from 'vue2-google-maps';
import VueKinesis from 'vue-kinesis';

import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/style/main.scss';

vue.use(VueKinesis);
vue.use(ElementUI, { locale });
vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyAb-nOgpqD_gjhW9jUy6raZW06HfTaFhPI',
        libraries: 'places',
        region: 'IL',
        language: 'en',
    }
});
vue.config.productionTip = false;

new vue({
    router,
    store,
    render: h => h(app)
}).$mount('#app');