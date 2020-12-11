<template>
    <section class="socket-modal">
        <section class="socket-modal-popup">
            <button
                class="btn socket-close-btn"
                @click="closePublishModal"
            ><i class="fas fa-times"></i></button>
            <div
                class="content"
                v-if="!isWapPublished"
            >
                <h1 class="publish-modal-title"><i class="fas fa-laptop-code"></i> Choose A Website Name</h1>
                <form @submit.prevent="setWapName">
                    <input
                        type="text"
                        v-model="wapName"
                        placeholder="Enter website name"
                    >
                </form>
            </div>
            <div
                v-else
                class="publish-link-area"
            >
                <h1 class="publish-modal-title">Your Website Link:</h1>
                <!-- <p v-if="isCopy">Your Link Has Been Copied!</p> -->
                <div class="publish-container-input">
                    <button
                        class="btn copy-btn"
                        @click="copyWebLink"
                    >
                        <i class="fas fa-clipboard"></i>
                    </button>
                    <input
                        type="text"
                        class="content-input"
                        :value="currWebsiteLink"
                    >
                </div>

            </div>

            <svg xmlns="http://www.w3.org/2000/svg">
                <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M306.5 -31.4999L882 -31.4998C999 -31.4997 999 -151.22 999 -10V480.5V1082.5C999 1347.06 553.889 1094.34 212.5 932.5C-67.0003 800 -42.9294 593.465 125.001 266C285 -45.9997 206.667 -14.9999 306.5 -31.4999Z"
                    fill="#04befe"
                />
                <defs>
                    <linearGradient
                        id="paint0_linear"
                        x1="1038.17"
                        y1="-8.72305"
                        x2="223.672"
                        y2="689.277"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#38D39F" />
                        <stop
                            offset="1"
                            stop-color="#38A4D3"
                        />
                    </linearGradient>
                </defs>
            </svg>
        </section>
    </section>
    <!-- <section>
        <div
            class="flex align-center justify-center screen"
            @click="closePublishModal"
        ></div>
        <svg xmlns="http://www.w3.org/2000/svg">
            <path
                xmlns="http://www.w3.org/2000/svg"
                d="M306.5 -31.4999L882 -31.4998C999 -31.4997 999 -151.22 999 -10V480.5V1082.5C999 1347.06 553.889 1094.34 212.5 932.5C-67.0003 800 -42.9294 593.465 125.001 266C285 -45.9997 206.667 -14.9999 306.5 -31.4999Z"
                fill="#04befe"
            />
            <defs>
                <linearGradient
                    id="paint0_linear"
                    x1="1038.17"
                    y1="-8.72305"
                    x2="223.672"
                    y2="689.277"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#38D39F" />
                    <stop
                        offset="1"
                        stop-color="#38A4D3"
                    />
                </linearGradient>
            </defs>
        </svg>
        <section class="modal-container">
            <button
                class="close-pub-btn"
                @click="closePublishModal"
            >x</button>

            <section
                class="publish-modal-container"
                v-if="!isWapPublished"
            >
                <h1>Please Enter Your website name:</h1>
                <form @submit.prevent="setWapName">
                    <input
                        type="text"
                        v-model="wapName"
                        placeholder="Enter website name"
                    >
                </form>
            </section>
            <div v-else>
                <h1 class="modal-title">Your Website Link:</h1>
                <a :href="currWebsiteLink">Click here to visit your website</a>

                <div class="publish-container-input">
                    <input
                        type="text"
                        class="publish-input"
                        v-model="currWebsiteLink"
                    >
                    <button
                        class="btn copy-btn"
                        @click="copyWebLink"
                    >
                        <i class="fas fa-clipboard"></i>
                    </button>
                    <p
                        class="text-center"
                        v-if="isCopy"
                    >Your Link Has Been Copied!</p>
                </div>
            </div>
        </section>
    </section> -->
</template>

<script>
import { eventBus } from '@/services/event-bus.service.js'
export default {
    name: 'publish-modal',
    props: {
        currWebsiteLink: String
    },
    data() {
        return {
            isCopy: false,
            wapName: ''
        }
    },
    computed: {
        isWapPublished() {
            return this.currWebsiteLink
        }
    },
    methods: {
        closePublishModal() {
            this.$emit('closePublishModal')
        },
        async setWapName() {
            this.$emit('saveWapName',this.wapName)
            // await this.$store.dispatch({ type: 'saveWapName',wapName })
        },
        copyWebLink() {
            const body=document.querySelector('body');
            const input=document.querySelector('.content-input');
            const textArea=document.createElement('textarea');
            textArea.value=input.value;
            body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            textArea.remove();
            this.isCopy=true
            eventBus.$emit('show-msg',{ txt: `Link is copied to clipboard`,type: 'success' })
            // this.restIsCopy();
        },
        // restIsCopy() {
        //     setTimeout(() => {
        //         this.isCopy=false
        //     },1500)
        // }
    }
}
</script>

<style>
</style>

