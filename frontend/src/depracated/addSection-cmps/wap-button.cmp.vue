<template>
    <button class="wap-button" :style="cmp.style">
        <a :href="cmp.href" target="_blank">
            <span class="wap-txt">{{ cmp.txt }}</span>
        </a>
    </button>
</template>

<script>

export default {
    name: 'wap-button',
    props: {
        cmp: Object
    },
    computed: {
    },
    methods: {

    },
    created() {
    }
}
</script>
