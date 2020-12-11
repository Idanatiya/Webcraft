<template>

    <section class="app-header flex space-between">
        <div
            class="logo place-center flex"
            @click="pushHome"
        >
            <i class="fas fa-hammer fa-2x"></i>Web<span class="logo-span">craft</span>
        </div>
        <nav class="nav-links flex align-center">
            <router-link
                @click.native="toggleMenu"
                to="/"
                exact
            >Home</router-link>
            <router-link
                @click.native="toggleMenu"
                to="/wap"
                exact
            >Templates</router-link>
            <router-link
                @click.native="toggleMenu"
                to="/editor"
                exact
            >Editor</router-link>
            <a
                @click="showSignup"
                class="cursor"
                v-if="!loggedInUser"
            >Login</a>
            <avatar
                :username="loggedInUser.username"
                :imgUrl="loggedInUser.imgUrl"
                :size="40"
                @click.native="toggleModal"
                :color="'#124a76'"
                v-if="loggedInUser"
            />
        </nav>
        <div
            class="hamburger flex-center column btn"
            @click="toggleMenu"
        >
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
        </div>
        <avatar-modal
            v-if="showModal"
            :loggedInUser="loggedInUser"
            @closeModal="showModal = false"
        />
    </section>
</template>

<script>
import avatar from '@/cmps/avatar.cmp.vue';
import avatarModal from '@/cmps/avatar-modal.cmp.vue';
export default {
    name: "app-header",
    data() {
        return {
            showModal: false
        }
    },
    methods: {
        toggleModal() {
            console.log('toggled');
            this.showModal=!this.showModal;
        },
        pushHome() {
            this.$router.push('/');
        },
        showSignup() {
            // this.toggleModal();
            this.$emit('openSignupModal');
        },
        toggleMenu() {
            document.body.classList.toggle('open-menu');
        }
    },
    computed: {
        loggedInUser() {
            return this.$store.getters.loggedInUser;
        },
        // avatar() {
        //     if(this.loggedInUser&&this.loggedInUser.imgUrl) return this.loggedInUser.imgUrl
        //     return this.loggedInUser.username
        // }
    },
    destroyed() {
        document.body.classList.remove('open-menu');
    },
    components: {
        avatar,
        avatarModal
    },
};
</script>
