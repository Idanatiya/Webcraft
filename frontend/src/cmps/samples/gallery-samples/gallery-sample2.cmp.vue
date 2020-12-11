<template>
    <div class="gallery">
        <figure class="gallery__item gallery__item--1">
            <img src="img/image-1.jpg" alt="Gallery image 1" class="gallery__img">
        </figure>
        <figure class="gallery__item gallery__item--2">
            <img src="img/image-2.jpg" alt="Gallery image 2" class="gallery__img">
        </figure>
        <figure class="gallery__item gallery__item--3">
            <img src="img/image-3.jpg" alt="Gallery image 3" class="gallery__img">
        </figure>
        <figure class="gallery__item gallery__item--4">
            <img src="img/image-4.jpg" alt="Gallery image 4" class="gallery__img">
        </figure>
        <figure class="gallery__item gallery__item--5">
            <img src="img/image-5.jpg" alt="Gallery image 5" class="gallery__img">
        </figure>
        <figure class="gallery__item gallery__item--6">
            <img src="img/image-6.jpg" alt="Gallery image 6" class="gallery__img">
        </figure>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.gallery {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 1fr);
    grid-gap: 1.5rem;
}

.gallery__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.gallery__item--1 {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
    background-color: red;

    /** Alternative Syntax **/
    /* grid-column: 1 / span 2;  */
    /* grid-row: 1 / span 2; */
}

.gallery__item--2 {
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 3;
    background-color: aquamarine;

    /** Alternative Syntax **/
    /* grid-column: 3 / span 2;  */
    /* grid-row: 1 / span 2; */
}

.gallery__item--3 {
    grid-column-start: 5;
    grid-column-end: 9;
    grid-row-start: 1;
    grid-row-end: 6;
    background-color: blueviolet;

    /** Alternative Syntax **/
    /* grid-column: 5 / span 4;
  grid-row: 1 / span 5; */
}

.gallery__item--4 {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 3;
    grid-row-end: 6;
    background-color: burlywood;

    /** Alternative Syntax **/
    /* grid-column: 1 / span 4;  */
    /* grid-row: 3 / span 3; */
}

.gallery__item--5 {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 6;
    grid-row-end: 9;
    background-color: chartreuse;

    /** Alternative Syntax **/
    /* grid-column: 1 / span 4; */
    /* grid-row: 6 / span 3; */
}

.gallery__item--6 {
    grid-column-start: 5;
    grid-column-end: 9;
    grid-row-start: 6;
    grid-row-end: 9;
    background-color: chocolate;

    /** Alternative Syntax **/
    /* grid-column: 5 / span 4; */
    /* grid-row: 6 / span 3; */
}
</style>
