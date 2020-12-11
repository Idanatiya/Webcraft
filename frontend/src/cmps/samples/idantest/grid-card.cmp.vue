<template>
    <section class="grid-card-container">
        <div class="card-preview">
            <img class="card-img" src="https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2702&q=80" />
        </div>
        <div class="card-preview">
            <img class="card-img" src="https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2702&q=80" />
        </div>
        <div class="card-preview">
            <img class="card-img" src="https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2702&q=80" />
        </div>
    </section>
</template>

<script>
export default {
    name: 'grid-card'
}
</script>

<style scoped lang="scss">
.grid-card-container {
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
    grid-gap: 2rem;
    justify-items: center;
    align-items: center;

    .card-preview {
        width: 350px;
        height: 450px;
    }
    .card-img {
        width: 100%;
        object-fit: cover;
        height: 100%;
    }
}
</style>