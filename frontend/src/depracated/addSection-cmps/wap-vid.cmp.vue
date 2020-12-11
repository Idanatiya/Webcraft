<template>
    <div
        class="wap-vid"
        :class="cmp.style"
    >
        <iframe
            width="100%"
            height="100%"
            :src="cmp.src"
            frameborder="0"
            allowfullscreen
        ></iframe>
    </div>
</template>

<script>
export default {
    name: 'wap-vid',
    props: {
        cmp: Object
    },
    data() {
        return {
        };
    },
    methods: {

    },
    computed: {

    }
};
</script>
