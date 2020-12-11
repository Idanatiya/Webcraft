<template>
    <section class="color-picker-container flex justify-center wrap">
        <span class="color-circle transparent"  @click="onSelectColor('transparent')">
            <i class="far fa-times-circle fa-2x"></i>
        </span>
        <span class="color-circle white" :class="colorSelected('white')" :style="{ backgroundColor: 'white' }" @click="onSelectColor('white')"></span>
        <span class="color-circle" :class="colorSelected('black')" :style="{ backgroundColor: 'black' }" @click="onSelectColor('black')"></span>
        <span class="color-circle" v-for="(color, idx) in currColorsPage" :key="idx" :style="{ backgroundColor: color }" :class="colorSelected(color)" @click="onSelectColor(color)">
        </span>
        <span @click="showMore" class="color-circle next">
            <i class="far fa-arrow-alt-circle-right fa-2x"></i>
        </span>
    </section>
</template>

<script>
const colors=require('nice-color-palettes/100');
const _=require('lodash');
export default {
    name: "color-picker",
    data() {
        return {
            colors: _.flatten(colors),
            pageNum: 0,
            pageSize: 20,
            selectedColor: null
        };
    },
    methods: {
        colorSelected(color) {
            return { selected: this.selectedColor===color }
        },
        onSelectColor(color) {
            this.selectedColor=color
            this.$emit('changeColor',color);
        },
        showMore() {
            if(this.pageNum*this.pageSize>=this.colors.length-this.pageSize) {
                this.pageNum=0;
            }
            else {
                this.pageNum+=1;
            }
        }
    },
    computed: {
        currColorsPage() {
            const fromIdx=this.pageNum*this.pageSize;
            const endIdx=fromIdx+this.pageSize;
            return this.colors.slice(fromIdx,endIdx);
        }


    }
};
</script>


<style scoped lang="scss">
.color-picker-container {
    width: 80%;
    border-radius: 0.5rem;

    .color-circle {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 2rem;
        width: 2rem;
        border: 1px solid #2e4ead59;
        border-radius: 50%;
        cursor: pointer;
        margin: 0.175rem;
        transition: transform 0.3s ease;
        position: relative;
        &.selected::after {
            content: "✔";
            color: white;
            // color:set-button-text-color(white);
        }
        &.white.selected::after {
            content: "✔";
            color: black;
        }
        &.next,
        &.transparent {
            color: rgb(3, 169, 244);
        }
        &:hover {
            border: 1px solid rgb(204, 204, 204);
            transform: scale(1.1);
        }
    }
}
</style>
