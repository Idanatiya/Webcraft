<template>
    <section>
        <h3 class="profile-title">Your websites</h3>
        <section class="user-waps-grid">
            <button
                @click="pushToEditor"
                class="add-wap-btn btn"
                v-if="!waps.length"
            >
                <i class="fas fa-plus"></i>
            </button>
            <div
                v-else
                class="wap-card"
                v-for="wap in waps"
                :key="wap._id"
            >

                <div class="card-header">
                    <!-- <img src="../../assets/img/browser.png" /> -->
                    <img src="../../assets/img/browser.svg" />
                    <h1>{{wap.title}}</h1>
                </div>

                <img :src="wapImg(wap.thumbnail)" />
                <div class="wap-controls">
                    <button
                        class="btn "
                        @click="emitDeleteWap(wap._id)"
                    ><i class="fas fa-trash-alt"></i></button>
                    <button
                        class="btn"
                        @click="pushToEditWap(wap._id)"
                    ><i class="fas fa-pencil-alt"></i></button>
                </div>
            </div>

        </section>
    </section>
</template>

<script>
export default {
    name: 'user-waps',
    props: {
        waps: Array
    },
    methods: {
        emitDeleteWap(wapId) {
            this.$emit('deleteWap',wapId)
        },
        wapImg(thumbnail) {
            return thumbnail? thumbnail:'https://imagizer.imageshack.com/img923/6550/v5nqr0.png'
        },
        pushToEditWap(wapId) {
            this.$router.push(`/editor/${wapId}`)
        },
        pushToEditor() {
            this.$router.push(`/editor`)
        }
    },
    computed: {
    }
}
</script>

<style lang="scss" scoped>
</style>
