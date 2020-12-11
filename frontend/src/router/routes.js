import vue from 'vue';
import vueRouter from 'vue-router';

import homePage from '@/views/home.cmp.vue';
import editor from '@/views/editor.cmp.vue';
import wapGallery from '@/views/wap-gallery.cmp.vue';
import userProfile from '@/views/user-profile.cmp.vue';
import wap from '@/views/wap.cmp.vue';
import playGround from '@/views/playground.cmp.vue';

vue.use(vueRouter);

const routes = [{
        path: '/',
        component: homePage
    },
    {
        path: '/editor/:id?',
        component: editor
    },
    {
        path: '/wap',
        component: wapGallery
    },
    {
        path: '/wap/:id',
        component: wap
    },
    {
        path: '/user/:id',
        component: userProfile
    },
    {
        path: '/playground',
        component: playGround
    },
];

const router = new vueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
});

export default router;