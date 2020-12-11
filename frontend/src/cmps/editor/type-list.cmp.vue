<template>
    <section class="type-list flex column align-center">
        <h1>Pick an element</h1>
        <div class="element-picker-container grid" v-if="!selectedType">
            <button v-for="type in types" :key="type" @click="pickType(type)">
                {{ type }}
            </button>
        </div>
        <div v-if="selectedType">
            <div class="back-btn-container">
                <span
                    ><i class="fas fa-arrow-left" @click="emptyType"></i
                ></span>
            </div>
            <sample-list :samples="filterdSamples" />
        </div>
    </section>
</template>
<script>

import sampleList from '@/cmps/editor/sample-list.cmp.vue';
export default {
    name: 'type-list',
    props: {
        samples: {
            type: Array
        }
    },
    data() {
        return {
            //TODO: Think of new types of cmps
            types: ['header', 'cards', 'footer', 'gallery', 'map', 'video', 'form', 'divider', 'text'],
            selectedType: null
        }
    },
    methods: {
        pickType(type) {
            this.selectedType = type
        },
        emptyType() {
            this.selectedType = null
        },
    },
    computed: {
        filterdSamples() {
            return this.samples.filter(sample => sample.type === this.selectedType)
        }
    },
    components: {
        sampleList
    }
}
</script>

