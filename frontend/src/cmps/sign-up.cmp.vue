<template>
    <section class="container flex align-center justify-center">
        <div
            class="flex align-center justify-center screen"
            @click="closeModal"
        ></div>
        <section class="signup-modal">
            <div class="forms-container flex">
                <div class="signin-signup">
                    <h2 class="title">{{modalHeader}}</h2>
                    <form
                        class="flex column align-center"
                        @submit.prevent="modalAction"
                    >
                        <div
                            class="form-control"
                            v-if="isSignup"
                        >
                            <span class="fas fa-user"></span>
                            <input
                                type="text"
                                placeholder="Enter Username"
                                v-model="user.username"
                                required
                            >
                        </div>
                        <div class="form-control">
                            <span><i class="fas fa-envelope"></i></span>
                            <input
                                type="email"
                                placeholder="Enter Email"
                                v-model="user.email"
                                required
                            >
                        </div>
                        <div class="form-control">
                            <span
                                @click="toggleFieldType"
                                class="cursor fas fa-lock"
                            ></span>
                            <input
                                :type="passwordType"
                                placeholder="Enter Password"
                                v-model="user.password"
                                required
                            >
                        </div>
                        <button class="btn signup">{{modalHeader}}</button>
                    </form>
                    <a
                        class="btn toggle-modal-btn"
                        @click="toggleModalMode"
                    >{{link}}</a>
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
                <img
                    src="@/assets/img/signup-2.svg"
                    class="svg-img"
                />
            </div>
            <button
                @click="closeModal"
                class="btn close-btn"
            ><i class="fas fa-times"></i></button>
        </section>
    </section>
</template>

<script>
import { userService } from '@/services/user.service';
// import { eventBus,EVENT_SHOW_MSG } from '../../../services/event-bus-service.js'
import { eventBus } from '@/services/event-bus.service.js'

export default {
    name: 'sign-up',
    data() {
        return {
            passwordType: 'password',
            isSignup: false,
            user: null,
        }
    },
    methods: {
        toggleModalMode() {
            this.isSignup=!this.isSignup
            if(this.isSignup) this.user=userService.getEmptyUser()
            else this.user={ email: '',password: '' }
        },
        modalAction() {
            if(this.isSignup) this.signup(this.user)
            else this.login(this.user)
        },
        async signup() {
            const userCreds=JSON.parse(JSON.stringify(this.user))
            await this.$store.dispatch({ type: 'signup',userCreds })
            this.closeModal()
            eventBus.$emit('show-msg',{ txt: `Welcome to Webcraft, ${this.user.username}.`,type: 'success' })
            this.user=userService.getEmptyUser()


        },
        async login() {
            try {
                const userCreds=JSON.parse(JSON.stringify(this.user));
                const user=await this.$store.dispatch({ type: 'login',userCreds });
                if(user) this.closeModal()
                eventBus.$emit('show-msg',{ txt: `Welcome back, ${user.username}.`,type: 'success' })
                // this.$router.push('/');
                this.user={ email: '',password: '' }
            } catch(error) {
                eventBus.$emit('show-msg',{ txt: `Invalid Credentials, Try Again`,type: 'error' })
            }
        },
        toggleFieldType() {
            this.passwordType=this.passwordType==='password'? 'text':'password'
        },
        closeModal() {
            this.$emit('closeSignupModal')
        }
    },
    computed: {
        modalHeader() {
            return this.isSignup? 'Sign Up':'Login';
        },
        modelMode() {
            return this.isSignup? 'user.username':'user.email'
        },
        link() {
            return this.isSignup? 'Already have an account? Sign in!':'You dont have an account? Sign up!';
        }
    },
    created() {
        this.user=userService.getEmptyUser()
    }

}
</script>

<style>
</style>