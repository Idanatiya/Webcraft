<template>
    <section class="header-container" :style="{height: '700px'}">
        <div class="hero-image" :style="heroImg">
            <div class="hero-text flex column place-center" :style="heroText">
                <h1>I am John Doe</h1>
                <p>And I'm a Photographer</p>
                <button>Hire me</button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'header-sample',
    computed: {
        heroImg() {
            return `
                 height: 50%;
                background-image: linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url("https://images.unsplash.com/photo-1438109491414-7198515b166b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");
                background-size: cover;
                position: relative;
              `
        },
        heroText() {
            return `
                text-align: center;
                color: white;
                 position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);  
                 `
        }
    }
}
</script>

<style lang="scss" scoped>
// .header-container {
//     height: 700px;
//     .hero-image {
//         height: 50%;
//         background-image: linear-gradient(
//                 rgba(0, 0, 0, 0.5),
//                 rgba(0, 0, 0, 0.5)
//             ),
//             url("https://images.unsplash.com/photo-1438109491414-7198515b166b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");
//         background-size: cover;
//         position: relative;
//         .hero-text {
//             text-align: center;
//             color: white;
//             position: absolute;
//             top: 50%;
//             left: 50%;
//             transform: translate(-50%, -50%);
//         }
//     }
// }
</style>