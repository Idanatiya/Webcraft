<template>
    <section
        class="user-details-container"
        v-if="loggedInUser"
    >
        <nav class="user-dashboard">
            <div class="logo">
                <i
                    class="fas fa-user-circle "
                    v-if="!loggedInUser.imgUrl"
                ></i>
                <img
                    v-else
                    :src="loggedInUser.imgUrl"
                >
            </div>
            <ul class="sidebar-modal-links clean-list">
                <li><i class="fas fa-user-alt"></i> {{loggedInUser.username}}</li>
                <li>
                    <i class="fas fa-envelope"></i> {{loggedInUser.email}}
                </li>
                <li>
                    <span><i class="fas fa-window-maximize"></i> Published Websites: {{ownerWaps.length}}</span>
                </li>
                <li>
                    <label class="user-input input-file">
                        <span class="upload-btn"><i class="fas fa-cloud-upload-alt"></i></span>
                        <input
                            class="hidden"
                            type="file"
                            @change="setAvatar"
                        />
                        <span class="upload-avatar">Upload User Avatar</span>
                    </label>
                </li>
            </ul>
        </nav>
        <div class="main-content-page">
            <div class="main-head">
                <h1>Welcome back, {{loggedInUser.username}}</h1>
            </div>
            <user-waps
                v-if="!isLoading"
                :waps="currUserWaps"
                @deleteWap="onDeleteWap"
            />
            <img
                v-if="isLoading"
                class="loading"
                src="../assets/img/loading-spinner.svg"
            />
            <div class="seperator"></div>
            <user-msgs
                :msgs="dataToTransfer"
                @deleteMsgs="onDeleteMsgs"
            />
        </div>
    </section>
</template>

<script>
import { userService } from '@/services/user.service';
import { utilService } from '@/services/util.service';
import backofficeMsg from '@/cmps/wap/backoffice-msg.cmp.vue';
import userWaps from '@/cmps/wap/user-waps.cmp.vue';
import socketService from '@/services/socket.service';
import { eventBus } from '@/services/event-bus.service.js'
import userMsgs from '@/cmps/custum-cmps/user-msgs.cmp.vue';
import loader from '@/cmps/custum-cmps/loader.cmp.vue';

export default {
    name: 'user-profile',
    data() {
        return {
            ownerWaps: [],
            selectedTab: 'messages',
            user: null
        }
    },
    methods: {
        onDeleteMsgs() {
            this.$store.dispatch({ type: 'deleteMsgs',userId: this.loggedInUser._id })
        },
        onDeleteWap(wapId) {
            this.$store.dispatch({ type: 'deleteWap',wapId })
        },
        async setAvatar(ev) {
            const res=await utilService.uploadImg(ev);
            const user=JSON.parse(sessionStorage.getItem('user'))
            user.imgUrl=res.url;
            await this.$store.dispatch({ type: 'updateUser',user })
            // this.$router.push(`/user/${loggedInUser._id}`)

        },
        async getWapsReviews(_id) {
            const ownerWaps=await this.$store.dispatch({
                type: 'getOwnerWapReviews',
                userId: _id
            })
            this.ownerWaps=ownerWaps;
        }
    },
    computed: {
        currUserWaps() {
            return this.$store.getters.currUserWaps;
        },
        dataToTransfer() {
            let data=this.ownerWaps.filter(ownerWap => {
                return ownerWap.reviews;
            });
            const msgs=[]
            data.map((wap,idx) => {
                wap.reviews.forEach(msgField => {
                    msgs.push(msgField);

                })
                // return wap.reviews.map(msgField => msgField)
            })
            return msgs;
        },
        loggedInUser() {
            return this.$store.getters.loggedInUser;
        },
        imgUrl() {
            if(this.loggedInUser.imgUrl) {
                return this.loggedInUser.imgUrl
            }
            return `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSheI9UkWllIpSNbs2UdE18KLLswgDON9qzXg&usqp=CAU`
        },
        formatTime() {
            const { createdAt }=this.loggedInUser
            return new Date(createdAt).toLocaleString()
        },
        isLoading() {
            return this.$store.getters.isLoading;
        }
    },
    async created() {
        socketService.setup();
        const _userId=this.$route.params.id;
        if(_userId) {
            this.user=await this.$store.dispatch({ type: 'loadLoggedInUser',_userId })
            this.$store.dispatch({ type: 'loadUserWaps',userId: _userId })
            this.getWapsReviews(_userId)
            socketService.on('form-submitted',({ title,_id }) => {
                this.getWapsReviews(_userId);
                eventBus.$emit('show-msg',{ txt: `New message received from website:${title}`,type: 'success' })
            })
        }
    },
    components: {
        userWaps,
        backofficeMsg,
        userMsgs,
        loader

    }
}
</script>

<style>
</style>

