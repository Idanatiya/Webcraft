<template>
    <el-input-number size="small" v-model="num3"></el-input-number>
</template>
<script>
var Main={
    data() {
        return {
            num1: 1,
            num2: 1,
            num3: 1,
            num4: 1
        }
    },
    methods: {
        emitChange() {
            this.$emit('input',this.value)
        }
    }
};
var Ctor=Vue.extend(Main)
new Ctor().$mount('#app')