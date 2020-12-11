<template>
    <img class="wap-image" :src="cmp.url" :style="cmp.style" />
</template>

<script>

export default {
    name: "wap-image",
    props: {
        cmp: Object
    },
    methods: {

    },
    created() {

    },
}
</script>
