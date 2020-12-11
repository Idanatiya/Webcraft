<template>
    <div class="sample-list">
        <Container
            behaviour="copy"
            group-name="editor"
            drag-class="card-ghost"
            drop-class="card-ghost-drop"
            :get-child-payload="getChildPayload"
            :get-ghost-parent="getGhostParent"
        >
            <Draggable v-for="sample in samples" :key="sample._id">
                <div class="sample-preview flex column">
                    <h3 class="sample-title">{{ sample.title }}</h3>
                    <img :src="sample.thumbnail" />
                </div>
            </Draggable>
        </Container>
    </div>
</template>

<script>
import { Container, Draggable } from 'vue-smooth-dnd';
export default {
    name: 'sample-list',
    props: {
        samples: {
            type: Array
        },
    },
    methods: {
        onDrop(dropResult) {
            this.$emit('droppedSample', dropResult)
        },
        getChildPayload(index) {
            return this.samples[index];
        },
        getGhostParent() {
            //TODO: Figure out how to animate this sample when dragging
        }
    },
    components: {
        Container,
        Draggable
    }
};
</script>