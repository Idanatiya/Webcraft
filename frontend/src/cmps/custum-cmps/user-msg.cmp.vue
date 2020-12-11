


<template>
    <section
        v-if="msg"
        class="user-msg"
        :class="msgType"
    >
        <i
            class="icon"
            :class="msgIcon"
        ></i>
        <div class="msg-info">
            <p>{{msg.type}}</p>
            <p class="msg-txt">{{msg.txt}}</p>
        </div>
        <button
            @click="closeMsg"
            :style="{backgroundColor: bcgColor}"
            class="close-btn-user-msg"
        >x</button>
    </section>
</template>

<script>
import { eventBus } from '@/services/event-bus.service.js'
export default {
    name: 'user-msg',
    data() {
        return {
            msg: null,
            timer: null
        }
    },
    methods: {
        closeMsg() {
            this.msg=null;
            clearTimeout(this.timer);
        }
    },
    computed: {
        msgType() {
            const { type }=this.msg
            return { success: type==='success',error: type==='error' }
        },
        msgIcon() {
            const { type }=this.msg;
            if(type==='success') return 'fas fa-check-circle fa-2x'
            else return 'fas fa-exclamation-triangle fa-2x';
        },
        bcgColor() {
            const { type }=this.msg;
            if(type==='success') return '#124a76'
            return '#8b1a1a'

        }
    },
    created() {
        eventBus.$on('show-msg',msg => {
            if(this.timer) this.closeMsg()
            this.msg=msg;
            this.timer=setTimeout(() => {
                this.closeMsg();
            },3000)
        })

    }
}
</script>

<style lang="scss" scoped>
.user-msg {
    position: fixed;
    bottom: 50px;
    right: 25px;
    width: 350px;
    height: 65px;
    color: black;
    display: flex;
    border-radius: 10px;
    align-items: center;
    background-color: #fafafa;
    font-family: carme, serif;
    z-index: 2010;
}

.icon {
    margin-inline-start: 5px;
    margin-inline-end: 5px;
}

.user-msg .msg-info {
    display: flex;
    flex-direction: column;
    margin-inline-start: 20px;
    font-weight: bold;
}

.msg-info p:first-child {
    text-transform: uppercase;
}

.msg-txt {
    font-size: 16px;
}

.msg-link {
    font-size: 10px;
    color: black;
}

.msg-info p {
    margin: 0;
}

.close-btn-user-msg {
    position: absolute;
    right: 5px;
    top: 3px;
    background: transparent;
    outline: none;
    border: 0;
    border-radius: 50%;
    color: white;
}

.user-msg.error .close-btn {
    background-color: #8b1a1a;
}

.user-msg.sucess .close-btn {
    background-color: #124a76;
}

.success {
    border: 5px solid #124a76;
}

.error {
    border: 5px solid #8b1a1a;
}

.fa-check-circle {
    color: #124a76;
}

.fa-exclamation-triangle {
    color: #8b1a1a;
}
</style>

