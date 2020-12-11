<template>
    <section
        :class="emptyWorkspace"
        class="editor-workspace flex column"
        id="my-node"
    >
        <Container
            auto-scroll-enabled
            class="dnd-container"
            group-name="editor"
            drag-class="card-ghost"
            drop-class="card-ghost-drop"
            :drop-placeholder="dropPlaceholderOptions"
            :get-child-payload="getChildPayload"
            @drop="onDrop"
        >
            <!-- TODO: Make sure that drag and drop doesnt take img into the drag -->
            <Draggable v-for="cmp in cmps" :key="cmp._id">
                <wap-worker
                    :cmp="cmp"
                    @copy="emitCopy"
                    @delete="emitDelete"
                    @focused="emitFocusCmp"
                    @updatedTxt="emitUpdateTxt"
                    @moveSection="emitMoveSection"
                >
                </wap-worker>
            </Draggable>
        </Container>
    </section>
</template>

<script>
import { Container, Draggable } from 'vue-smooth-dnd';
import wapWorker from '@/cmps/wap/wap-worker.cmp.vue';
// import htmlToImage from 'html-to-image';
// import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image'
// var htmlToImage = require('html-to-image');

export default {
    name: 'editor-workspace',
    props: {
        cmps: {
            type: Array
        }
    },
    data() {
        return {
            dropPlaceholderOptions: {
                className: "drop-preview",
                animationDuration: "250",
                showOnTop: false
            },
        }
    },
    components: {
        Container,
        Draggable,
        wapWorker,
    },
    methods: {
        onDrop(dropResult) {
            //if there is no removed index
            if (dropResult.removedIndex === null) {
                this.$emit('droppedSample', dropResult)
            } else {
                this.$emit('droppedSection', dropResult)
            }
        },
        getChildPayload(index) {
            return this.cmps[index];
        },
        emitFocusCmp(_id) {
            this.$emit('focusedCmp', _id);
        },
        emitUpdateTxt(txtValue) {
            this.$emit('updatedTxt', txtValue);
        },
        emitCopy(_id) {
            this.$emit('copy', _id)
            // this.print()
        },
        emitDelete(_id) {
            this.$emit('delete', _id)
        },
        emitMoveSection(_id, diff) {
            this.$emit('moveSection', _id, diff)
        },
        // async print() {
        //     htmlToImage.toJpeg(document.getElementById('my-node'), { quality: 0.95 })
        //         .then(function (dataUrl) {
        //             var link = document.createElement('a');
        //             link.download = 'my-image-name.jpeg';
        //             link.href = dataUrl;
        //             link.click();
        //         });
        // }
    },
    computed: {
        emptyWorkspace() {
            return { 'empty-workspace': !this.cmps || !this.cmps.length }
        }
    }
};
</script>

