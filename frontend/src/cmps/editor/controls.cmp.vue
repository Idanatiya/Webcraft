<template>
    <div class="controls flex align-center">
        <button class="btn" @click.stop="onDelete"><i class="fas fa-trash"></i></button>
        <button class="btn" @click.stop="onCopy"><i class="fas fa-copy"></i></button>
        <button class="btn" @click.stop="onMoveSection(-1)"><i class="fas fa-angle-double-up"></i></button>
        <button class="btn" @click.stop="onMoveSection(1)"><i class="fas fa-angle-double-down"></i></button>
    </div>

</template>

<script>
export default {
    name: 'controls',
    props: {
        _id: {
            type: String
        }
    },
    methods: {
        onCopy() {
            this.$emit('copy',this._id)
        },
        onDelete() {
            this.$emit('delete',this._id)
        },
        onMoveSection(diff) {
            this.$emit('moveSection',this._id,diff)
        }
    }
}
</script>

<style scoped lang="scss">
.controls {
    padding: 10px;
    background: #fafafa;
    position: absolute;
    right: 0;
    top: 0;
    opacity: 0;
}
</style>