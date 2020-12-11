<template>
    <section>
        <button
            v-if="showCollab"
            class="btn collab-btn"
            @click="startCollab"
        >
            <i class="fas fa-users"></i> Start Collaborate
        </button>
        <section class="user-controls flex justify-center">
            <button
                class="btn choice-btn save"
                @click="saveWap"
            >Save</button>
            <button
                class="btn choice-btn"
                @click="openPublishModal"
            >
                Publish
            </button>
        </section>
        <!-- <publish-modal v-if="showPublishModal" /> -->
    </section>
</template>

<script>
import publishModal from '@/cmps/wap/publish-modal.cmp.vue';
import { eventBus } from '@/services/event-bus.service.js'
import { utilService } from '@/services/util.service';
export default {
    name: 'user-controls',
    data() {
        return {
            showPublishModal: false
        }
    },
    methods: {
        saveWap() {
            this.$emit('saveWap');
        },
        openPublishModal() {
            if(!this.loggedInUser) {
                eventBus.$emit('show-msg',{ txt: 'Please Login to publish your website',type: 'error' })
                return;
            }
            this.$emit('openPublishModal');
        },
        saveSample() {
            this.$emit('saveSample');
        },
        startCollab() {
            // const roomId=utilService.makeId();
            // (`Send this link to a friend: http://localhost:8080/#/editor/${roomId}`);
            this.$emit('makeWapCollab')
        }
    },
    computed: {
        loggedInUser() {
            return this.$store.getters.loggedInUser;
        },
        showCollab() {
            // return true;
            return this.$store.getters.loggedInUser;
        },

    },
    components: {
        publishModal
    }
};
</script>