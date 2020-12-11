<template>
    <div class="block custom-range">
        <el-slider
            v-model="value"
            :max="options.max"
            :min="options.min"
            @input="emitChange"
        ></el-slider>
    </div>
</template>

<script>
export default {
    props: {
        options: Object
    },
    data() {
        return {
            value: this.options.initVal
        }
    },
    methods: {
        emitChange() {
            this.$emit('input', this.value)
        }
    }
}
</script>

