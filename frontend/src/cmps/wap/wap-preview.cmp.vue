<template>
    <!-- <section> -->
    <div class="wap-preview text-center" >
        <h3 class="wap-title">{{ wap.title }}</h3>
        <img :src="wap.thumbnail" />
        <div class="wap-prev-controls flex-center">
            <router-link :to="`/wap/${wap._id}`" title="View Template"><i class="fas fa-eye"></i></router-link>
            <router-link :to="`/editor/${wap._id}`" title="Edit Template"><i class="fas fa-pen"></i></router-link>
        </div>
    </div>
    <!-- </section> -->
</template>

<script>
export default {
    name: 'wap-preview',
    props: {
        wap: Object
    },
    methods: {
        enterWap() {
        },
        enterEditor() {
        }

    }
}
</script>

