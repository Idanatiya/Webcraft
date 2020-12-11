<template>
    <section
        class="avatar-modal flex column align-center"
        v-if="loggedInUser"
    >
        <div class="info flex column align-center">
            <avatar
                :username="loggedInUser.username"
                :imgUrl="loggedInUser.imgUrl"
                :size="65"
                :color="'#124a76'"
            />
            <div class="user-info flex column align-center">
                <h3>{{loggedInUser.username}}</h3>
                <span>{{loggedInUser.email}}</span>

            </div>
        </div>
        <div class="seperator"></div>
        <section class="modal-links flex column">
            <span
                class="profile-btn"
                @click="pushProfile"
            ><i class="fas fa-user"></i> Profile</span>
            <span
                class="profile-btn"
                v-if="loggedInUser"
                @click="logout"
            ><i class="fas fa-times-circle"></i> Logout</span>
        </section>
    </section>
</template>

<script>
import avatar from '@/cmps/avatar.cmp.vue';
export default {
    name: 'avatar-modal',
    props: {
        loggedInUser: Object,
        showModal: {
            type: Boolean
        }
    },
    components: {
        avatar
    },
    methods: {
        closeModal() {
            this.$emit('closeModal')
        },

        logout() {
            this.$store.dispatch({ type: 'logout' })
            this.closeModal();
            this.$router.push('/').catch(() => { });
        },
        pushProfile() {
            this.closeModal();
            this.$router.push(`/user/${this.loggedInUser._id}`)
        }
    }
}
</script>
