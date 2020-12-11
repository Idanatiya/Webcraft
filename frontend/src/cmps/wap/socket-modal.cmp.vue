<template>
    <section class="socket-modal">
        <section class="socket-modal-popup">
            <button
                class="btn socket-close-btn"
                @click="closeSocketModal"
            ><i class="fas fa-times"></i></button>
            <div class="content">
                <h1 class="modal-title"><i class="fas fa-users collab-icon"></i> Welcome to collaborate mode!</h1>
                <p>Send the link to friends and start work together!</p>
                <input
                    class="form-field"
                    type="text"
                    :value="currCollabLink"
                >
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
</template>

<script>
export default {
    name: 'socket-modal',
    props: {
        currCollabLink: {
            type: String
        }
    },
    methods: {
        closeSocketModal() {
            this.$emit('closeSocketModal')
        }
    }

}
</script>

<style>
</style>