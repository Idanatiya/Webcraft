<template>
    <section class="user-site" v-if="wapToShow">
        <div
            class="hamburger flex-center column btn"
            @click="toggleMenu"
        >
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
        </div>
        <wap-renderer
            v-for="cmp in wapToShow.cmps"
            :key="cmp._id"
            :cmp="cmp"
            @inputed="setInputValue"
            @submit="sendReview"
        />
    </section>
</template>

<script>
// import wapWorker from '@/cmps/wap/wap-worker.cmp.vue';
import wapRenderer from '@/cmps/wap/wap-renderer.cmp.vue';
import { wapService } from '@/services/wap.service';
import { utilService } from '@/services/util.service';
import { eventBus } from '@/services/event-bus.service.js'
import socketService from '@/services/socket.service';

export default {
    name: 'wap',
    data() {
        return {
            wapToShow: null,
            inputValue: {}
        }
    },
    methods: {
        setInputValue(value,key) {
            this.inputValue[key]=value;
        },
        async sendReview() {
            const byUser=this.$store.getters.loggedInUser||'guest'
            this.inputValue.createdAt=Date.now();
            this.inputValue.byUser=byUser;
            const review={ _id: utilService.makeId(),content: this.inputValue }
            if(!this.wapToShow.reviews||!this.wapToShow.reviews.length) {
                this.wapToShow.reviews=[];
            }

            this.wapToShow.reviews.push(review);
            await this.$store.dispatch({
                type: 'saveWap',
                wap: this.wapToShow
            })
            //get rouute id
            const _id=this.$route.params.id;
            socketService.emit('form-submitted',{ _id,title: this.wapToShow.title })
            eventBus.$emit('show-msg',{ txt: `Your details has been saved`,type: 'success' })
            this.inputValue={};
            const elInputs=document.querySelectorAll('input')
            elInputs.forEach(elInput => {
                elInput.value='';
            })
            const elTxt=document.querySelector('textArea')
            if(elTxt) elTxt.value='';
        }
    },
    async created() {
        const _id=this.$route.params.id;
        socketService.setup();
        this.wapToShow=await wapService.getById(_id);

        this.$store.commit({
            type: 'toggleUserSiteOpen',
        });
        document.title=this.wapToShow.title;
    },
    destroyed() {
        this.$store.commit({
            type: 'toggleUserSiteOpen',
        });
        document.title='Webcraft';
    },
    components: {
        // wapWorker,
        wapRenderer
    }
};
</script>