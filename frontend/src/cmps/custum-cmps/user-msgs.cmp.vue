<template>
    <section>
        <h1 class="profile-title">Your Msgs</h1>
        <button @click="emitDeleteMsgs">Delete Msgs</button>
        <p
            class="no-msg-received"
            v-if="!msgs.length"
        >No message received yet
        </p>
        <table class="content-table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Subject</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Message</th>
                    <th scope="col">Sent At</th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="(data, idx) in msgs"
                    :key="idx"
                >
                    <th scope="row">{{ idx + 1 }}</th>
                    <td>{{ data.content.name}}</td>
                    <td>{{ data.content.email}}</td>
                    <td>{{data.content.subject}}</td>
                    <td>{{data.content.phone}}</td>
                    <td>{{longMsg(data.content.message)}}</td>
                    <td>{{formatTime(data.content.createdAt)}}</td>
                </tr>
            </tbody>
        </table>
    </section>
    <!-- 
    <section>
        <h1 class="profile-title">Your Msgs</h1>
        <p
            class="no-msg-received"
            v-if="!msgs.length"
        >No message received yet</p>
        <section
            class="msg-container-grid"
            v-if="msgs.length"
        >
            <div
                v-for="(data,idx) in msgs"
                :key="idx"
                class="msg-card"
            >
                <span class="created-at">{{formatTime(data.content.createdAt)}}</span>
                <i class="far fa-comment-dots"></i>
                <span>Name: {{data.content.name}}</span>
                <span>Email: {{data.content.email}}</span>
                <span>Subject: {{data.content.subject}}</span>
                <span class="msg">Message: {{data.content.message}}</span>
            </div>
        </section>
    </section> -->
</template>

<script>
export default {
    name: 'user-msgs',
    props: {
        msgs: {
            type: Array
        }
    },
    methods: {
        formatTime(time) {
            return new Date(time).toLocaleString();
        },
        longMsg(msg) {
            if(!msg) return '';
            if(msg.length>12) return msg.substring(0,12)+'...';
            return msg;
        }
    },
    computed: {
    }
}

</script>