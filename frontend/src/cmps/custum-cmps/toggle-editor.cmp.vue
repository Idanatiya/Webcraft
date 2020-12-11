<template>
    <div @click="toggleEditor" id="arrowAnim" :class="reverseIcon">
        <span class="arrow-btn"><i class="fas fa-chevron-left"></i> </span>
        <!-- <span class="btn cursor"> -->
        <!-- <i :class="icon"></i> -->
        <!-- </span> -->
        <!-- <div class="arrow-btn btn">
            <i class="fas fa-chevron-left"></i>


        </div>  -->
    </div>
</template>

<script>
export default {
    name: "toggle-editor",
    props: {
        isEditorShow: Boolean,
    },
    methods: {
        toggleEditor() {
            this.$emit('toggled')
        }
    },
    computed: {
        icon() {
            if (this.isEditorShow) return 'fas fa-caret-left'
            return 'fas fa-caret-right'
        },
        reverseIcon() {
            return { reversed: !this.isEditorShow }
        }
    }
}
</script>

<style lang="scss" scoped>
// #arrowAnim {
//     cursor: pointer;
//     height: 22px;
//     width: 60px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     transform: translateX(10px);
//     &.rotateArrow {
//         // transform: rotate(180deg);
//         .arrow {
//             border-color:transparent #909399d6 #909399d6 transparent}
//     }
// }

// .arrow {
//     width: 22px;
//     height: 22px;
//     border: 4px solid;
//     border-color: #909399d6 transparent transparent #909399d6;
//     transform: rotate(-45deg);
// }

// .arrowSliding {
//     position: absolute;
//     animation: slide 3s linear infinite;
// }

// .delay1 {
//     animation-delay: 1s;
// }
// .delay2 {
//     animation-delay: 2s;
// }

// @keyframes slide {
//     0% {
//         opacity: 0;
//         transform: translateX(110%);
//     }
//     20% {
//         opacity: 1;
//         transform: translateX(50%);
//     }
//     80% {
//         opacity: 1;
//         transform: translateX(-50%);
//     }
//     100% {
//         opacity: 0;
//         transform: translateX(-110%);
//     }
// }
</style>

