<template>
    <div id="app">
        <app-header
            v-if="!isViewMode"
            @openSignupModal="showModal = true"
        />
        <router-view @openLoginModal="openLoginModal" />
        <sign-up
            v-if="showModal"
            @closeSignupModal="showModal = false"
        />
        <user-msg />

    </div>
</template>

<script>
import appHeader from '@/cmps/app-header.cmp.vue';
import signUp from '@/cmps/sign-up.cmp.vue';
import loader from '@/cmps/custum-cmps/loader.cmp.vue';
import userMsg from '@/cmps/custum-cmps/user-msg.cmp.vue';

export default {
    data() {
        return {
            showModal: false
        }
    },
    components: {
        appHeader,
        signUp,
        loader,
        userMsg,
    },
    methods: {
        openLoginModal() {
            this.showModal=true;
        }
    },
    computed: {
        isViewMode() {
            return this.$store.getters.isViewMode;
        },
        toggleSignupModal() {
            this.showModal=!this.showModal;
        },
        isLoading() {
            return this.$store.getters.isLoading;
        }
    }
};
</script>
