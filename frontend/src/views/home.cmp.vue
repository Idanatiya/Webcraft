<template>
    <section class="content-wrapper main-layout">
        <div class="main-hero flex column full">
            <!-- <div class="hero-screen"></div> -->
            <svg
                preserveAspectRatio="none"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="1920px"
                height="1500px"
                viewBox="0 0 1920 1500"
                enable-background="new 0 0 1920 1500"
                xml:space="preserve"
            >
                <!-- viewBox="0 0 5 3" -->
                <g id="Layer_1_copy_2">
                    <linearGradient
                        id="SVGID_1_"
                        gradientUnits="userSpaceOnUse"
                        x1="-207.2916"
                        y1="270.9562"
                        x2="1991.9283"
                        y2="270.9562"
                    >
                        <stop
                            offset="0"
                            style="stop-color: #ff1902"
                        />
                        <stop
                            offset="1"
                            style="stop-color: #ff1902; stop-opacity: 0"
                        />
                    </linearGradient>
                    <path
                        fill="#bababa"
                        d="M-206.084,515.811c0,0,217.208-66.007,453.867,3c0.017,0.005,0.034,0.01,0.051,0.015
		c118.716,34.611,243.627,53.152,366.838,35.887c136.417-19.115,258.875-65.218,397.701-35.334
		c107.947,23.237,196.916,83.712,311.488,53.499c122.896-32.409,228.996-83.684,359.183-76.458
		c111.262,6.176,199.042,51.051,308.884,10.389V-39.245h-2199.22L-206.084,515.811z"
                    >
                        <animateTransform
                            attributeName="transform"
                            attributeType="XML"
                            type="translate"
                            dur="25"
                            values="150,0;-150,0;150,0;"
                            repeatCount="indefinite"
                        />
                    </path>
                </g>
                <g id="Layer_1_copy">
                    <linearGradient
                        id="SVGID_2_"
                        gradientUnits="userSpaceOnUse"
                        x1="-306.3015"
                        y1="246.9538"
                        x2="1892.9183"
                        y2="246.9538"
                    >
                        <stop
                            offset="0"
                            style="stop-color: #ff1902"
                        />
                        <stop
                            offset="1"
                            style="stop-color: #ff1902; stop-opacity: 0"
                        />
                    </linearGradient>
                    <path
                        opacity="0.5"
                        fill="#5ac7f9"
                        d="M-305.094,491.808c0,0,217.208-66.007,453.867,3c0.017,0.005,0.034,0.01,0.051,0.015
		c118.716,34.611,243.627,53.152,366.838,35.887c136.417-19.115,258.875-65.218,397.701-35.334
		c107.946,23.237,196.916,83.712,311.488,53.499c122.896-32.409,228.996-83.684,359.183-76.458
		c111.262,6.176,199.041,51.051,308.884,10.389V-63.247h-2199.22L-305.094,491.808z"
                    >
                        <animateTransform
                            attributeName="transform"
                            attributeType="XML"
                            type="translate"
                            dur="20"
                            values="150,0;-150,0;150,0;"
                            repeatCount="indefinite"
                        />
                    </path>
                </g>
                <g id="Layer_1">
                    <linearGradient
                        id="SVGID_3_"
                        gradientUnits="userSpaceOnUse"
                        x1="-107.0737"
                        y1="237.9529"
                        x2="2090.9382"
                        y2="237.9529"
                    >
                        <stop
                            offset="0"
                            style="stop-color: #ff1902"
                        />
                        <stop
                            offset="1"
                            style="stop-color: #ff1902; stop-opacity: 0"
                        />
                    </linearGradient>
                    <path
                        opacity="0.5"
                        fill="#45a6ff"
                        d="M-107.074,466.23c0,0,217.208-61.538,453.867,2.797
		c0.017,0.005,0.034,0.009,0.051,0.014c118.716,32.268,243.627,49.553,366.838,33.458c136.417-17.821,258.875-60.803,397.701-32.941
		c107.947,21.664,196.916,78.045,311.488,49.876c122.896-30.215,228.996-78.018,359.183-71.281
		c111.262,5.758,199.042,47.594,308.884,9.686V-51.246l-2194.283,0.088L-107.074,466.23z"
                    >
                        <animateTransform
                            attributeName="transform"
                            attributeType="XML"
                            type="translate"
                            dur="15"
                            values="50,0;-50,0;50,0;"
                            repeatCount="indefinite"
                        />
                    </path>
                </g>
            </svg>
            <!-- <img
                class="hero-img"
                src="../assets/webcraft-svg/picture-editor.svg"
            /> -->
            <div
                class="home-btn hero-btn from-top btn"
                @click="pushEditor"
            >
                Start Building
            </div>
        </div>

        <h1>Build a website easily!</h1>
        <!-- <vue-aos animation-class="fadeIn animated" @animationstart="checkAnime"> -->
        <div
            class="home-card flex column"
            data-aos="fade-right"
        >
            <div class="card-content flex column space-between">
                <span class="home-tag text-left">Imagination</span>
                <h2 class="title">
                    Build your own websites that you can be proud of!
                </h2>
                <p>
                    Our platform will let you build you own websites using only
                    your imagination.
                    <span class="logo-name">Webcraft</span> empowers you to to
                    build professional, custom websites in a completely visual
                    canvas.
                </p>
                <button
                    class="home-btn btn"
                    @click="pushEditor"
                >
                    Let's Create!
                </button>
            </div>
            <img
                class="card-img"
                src="../assets/img/svgs/proudofresults.svg"
            />

            <!-- src="../assets/img/mockups/9.png"  candidate for first line-->
            <!-- src="../assets/img/mockups/10.png" -->
            <!-- src="../assets/img/mockups/13.jpg" -->
            <!-- src="../assets/webcraft-svg/editor-alone-v3.svg" -->
        </div>
        <!-- </vue-aos> -->
        <!-- <vue-aos animation-class="fadeIn animated" @animationstart="checkAnime"> -->
        <div
            class="home-card flex column"
            data-aos="fade-left"
        >
            <div class="card-content flex column space-between">
                <span class="home-tag text-right">Accessibility</span>
                <h2 class="title">Suited for all your needs</h2>
                <p class="intro-text">
                    Suited for any of your needs Design and build your own
                    high-quality websites. Whether you’re promoting your
                    business, showcasing your work, opening your store or
                    starting a blog — you can do it all with the
                    <span class="logo-name">Webcraft</span> website editor.
                </p>
                <button
                    class="home-btn btn"
                    @click="pushTemplate"
                >
                    Check Templates
                </button>
            </div>
            <img
                class="card-img"
                src="../assets/img/svgs/buildingblocks.svg"
            />

        </div>
        <!-- <img
                class="card-img"
                src="../assets/webcraft-svg/webcraft-boy.svg"
            /> -->
        <!-- </vue-aos> -->
        <!-- <vue-aos animation-class="fadeIn animated" @animationstart="checkAnime"> -->
        <div
            data-aos="zoom-out"
            class="home-card flex column"
        >
            <div class="card-content flex column space-between">
                <span class="home-tag text-left">Just Drag</span>
                <h2 class="title">Just Drag &amp; Drop</h2>
                <p class="intro-text">
                    With a simple and drag and drop website builder, you can
                    design any website you want. Just <span>Drag</span>,
                    <span>Drop</span> and <span>Customise!</span> All the
                    templates below were built using the
                    <span class="logo-name">Webcraft</span> platform.
                </p>
                <button
                    class="home-btn btn"
                    @click="pushEditor"
                >
                    Give it a try!
                </button>
            </div>

            <img
                class="card-img"
                src="../assets/img/svgs/drag&drop.svg"
            />

        </div>
        <!-- <img
                class="card-img"
                src="../assets/webcraft-svg/editor-alone.svg"
            /> -->

        <div
            data-aos="fade-right"
            class="home-card flex column"
        >
            <div class="card-content flex column space-between">
                <span class="home-tag text-left">Collaborate</span>
                <h2 class="title">Collaborate With Friends</h2>
                <p class="intro-text">
                    We are proud to introduce the collaboration mode. Just go to
                    the editor, Click "Start Collaborate" and send the link
                    to all your Friends and start work toghter using the
                    <span class="logo-name">Webcraft</span> platform
                </p>
                <button
                    class="home-btn btn"
                    @click="pushEditor"
                >
                    Join us now!
                </button>
            </div>
            <img
                class="card-img"
                src="../assets/img/svgs/buildingsite.svg"
            />
            <!-- <img
                class="card-img"
                src="../assets/img/svgs/worktogether.svg"
            /> -->
        </div>
        <!-- 
            <img
                class="card-img"
                src="../assets/webcraft-svg/editor-alone.svg"
            /> -->

        <section
            v-if="waps"
            class="home-wap-gallery grid"
            data-aos="zoom-in"
        >
            <div
                v-for="(wap, idx) in waps.slice(pageNum, pageNum + 3)"
                :key="wap._id"
                class="wap-preview"
                @click="paginate(idx)"
            >
                <h3>{{ wap.title }}</h3>
                <img :src="wap.thumbnail" />
            </div>
        </section>

        <!-- <img src="../assets/webcraft-svg/editor-alone.svg" /> -->
        <!-- <img src="../assets/webcraft-svg/webcraft-boy.svg" /> -->
        <!-- <img src="../assets/webcraft-svg/editor-alone-v3.svg" /> -->
        <!-- <img src="../assets/webcraft-svg/picture-editor.svg" /> -->

        <!-- <loader /> -->
    </section>
</template>


<script>
import VueAos from 'vue-aos';
import AOS from "aos";
import "aos/dist/aos.css";
app.AOS=new AOS.init({ disable: "phone" });
import loader from '@/cmps/custum-cmps/loader.cmp';
AOS.init({
    duration: 2400,
})


// import wapList from '@/cmps/wap/wap-list.cmp.vue';
export default {
    name: 'home',
    data() {
        return {
            isLoading: false,
            pageNum: 0,
            // wapsToShow: null
        }
    },
    computed: {
        waps() {
            const copyWaps=JSON.parse(JSON.stringify(this.$store.getters.getWaps));
            // const wapsToShow = copyWaps.slice((this.pageNum), this.pageNum + 3);
            return copyWaps;
        },
        wapLength() {
            return this.$store.getters.getWaps.length
        }
    },
    methods: {
        async paginate(idx) {
            // var timeout;
            // if (timeout) clearTimeout(timeout)
            // if (idx === this.waps.length - 1) {
            //     timeout = setTimeout(() => {
            if(idx===0) {
                this.pageNum-=1;
                if(this.pageNum<=0) {
                    this.pageNum=this.wapLength-3;
                }
            }
            if(idx===2) {
                this.pageNum+=1;
                if(this.pageNum===this.wapLength-2) {
                    this.pageNum=0;
                }
            }
            // const copyWaps = JSON.parse(JSON.stringify(this.$store.getters.getWaps));
            // this.wapsToShow = copyWaps.slice((this.pageNum), this.pageNum + 3);
            // if (this.pageNum >= this.wapLength - 3) this.pageNum = 0;
            // }, 1200)
            // }
            // else if (idx === 0) {
            //     timeout = setTimeout(() => {
            //         this.pageNum -= 1;
            //     }, 1200)
            // }
        },
        pushEditor() {
            this.$router.push('/editor')
        },
        pushTemplate() {
            this.$router.push('/wap')
        },
        checkAnime(ev) {
        }
    },
    async created() {
        await this.$store.dispatch({ type: 'loadWaps' });
        // this.paginate()
    },
    components: {
        loader,

        // wapList
    },
};
</script>