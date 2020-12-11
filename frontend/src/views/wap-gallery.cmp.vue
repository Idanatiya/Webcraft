<template>
    <section>
        <!-- <wap-list @addWap="pushEditor" v-if="waps" :waps="waps"></wap-list> -->
        <wap-list @addWap="pushEditor" v-if="!isLoading" :waps="waps"></wap-list>
        <loader v-else />
    </section>
</template>

<script>
import wapList from '@/cmps/wap/wap-list.cmp.vue';
import loader from '@/cmps/custum-cmps/loader.cmp.vue'
export default {
    name: 'wap-gallery',
    components: {
        wapList,
        loader
    },
    methods: {
        pushEditor() {
            this.$router.push('/editor');
        }
    },
    computed: {
        waps() {
            return this.$store.getters.getWaps;
        },
        isLoading() {
            return this.$store.getters.isLoading;
        }
    },
    async created() {
        await this.$store.dispatch({ type: 'loadWaps' });
    }
}
</script>
