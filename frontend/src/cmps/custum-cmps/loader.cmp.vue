<template>
    <section class="loader-container">
        <img class="loader" src="../../assets/img/loader.svg" alt="">
    </section>

</template>

<script>
export default {
    name: 'loader'
}
</script>

<style lang="scss" scoped>
.loader {
    height: 250px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
