<template>
    <section class="gallery">
        <img class="gallery1" src="@/assets/img/gallery-1.jpg">
        <img class="gallery2" src="@/assets/img/gallery-2.jpg">
        <img class="gallery3" src="@/assets/img/gallery-3.jpg">
        <img class="gallery4" src="@/assets/img/gallery-4.jpg">
    </section>
</template>

<script>
export default {
    name: 'grid-sample'
}
</script>

<style lang="scss" scoped>
.gallery {
    display: grid;
    min-height: 100vh;
    grid-template-columns: repeat(3, 1fr);
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .gallery1 {
        grid-column: 1/3;
    }
    .gallery2 {
        grid-column: 3/4;
        grid-row: 1/3;
    }
}
</style>
