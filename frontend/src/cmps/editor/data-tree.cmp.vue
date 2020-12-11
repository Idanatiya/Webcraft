<template>
    <section v-if="wapTree" class="data-tree">
        <h1 class="editor-name">Your websites data tree:</h1>
        <tree-branch
            v-for="cmp in wapTree"
            :key="cmp._id"
            :cmp="cmp"
            @focused="emitFocusCmp"
            @deleted="emitDeleteCmp"
            @copied="emitCopyCmp"
            @moved="emitMoveCmp"

        >
        </tree-branch>
    </section>
</template>

<script>
import treeBranch from '@/cmps/custum-cmps/tree-branch.cmp.vue';
export default {
    name: 'data-tree',
    props: {
        wapTree: {
            type: Array
        },
    },
    data() {
        return {
            items: [],
            open: null,
        }
    },
    components: {
        treeBranch
    },
    methods: {
        emitFocusCmp(_id) {
            this.$emit('focused', _id)
        },
        emitDeleteCmp(_id) {
            this.$emit('deleted', _id)
        },
        emitCopyCmp(_id) {
            this.$emit('copied', _id)
        },
        emitMoveCmp(_id, diff) {
            this.$emit('moved', _id, diff)
        },
        registerItem(item) {
            this.items.push(item)
            if (this.open === null) {
                item.toggleAccordionItem(true)
            }
        },
        unregisterItem(item) {
            if (this.open === item) {
                this.open = null
            }
            const idx = this.items.findIndex(i => i._uid === item._uid)
            this.items.splice(idx, 1)
        },
        setItemOpen(item, isOpen) {
            for (let i = 0; i < this.items.length; i++) {
                const currItem = this.items[i]
                if (isOpen === true && currItem._uid !== item._uid) {
                    currItem.toggleAccordionItem(false)
                }
            }
            if (isOpen === false) {
                this.open = null;
            } else {
                this.open = item;
            }
        },
    }
};
</script>

