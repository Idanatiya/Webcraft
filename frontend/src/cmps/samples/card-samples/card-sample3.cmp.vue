<template>
    <section class="about flex wrap" id="about">
        <div class="about-image">
            <h5>MINIMAL</h5>
            <img
                src="https://imagizer.imageshack.com/img922/5421/minnn2.png"
                alt="portrait-picture"
            />
        </div>
        <div
            class="about-text flex column justify-center align-center"
            id="work"
        >
            <h2>Elena Joy</h2>
            <div class="about-life">
                <h3>My Life</h3>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptas, maxime reprehenderit. Assumenda necessitatibus id
                    consectetur asperiores harum dolore nihil fuga?
                </p>
            </div>
            <div class="about-work">
                <h3>My Work</h3>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptas, maxime reprehenderit. Assumenda necessitatibus id
                    consectetur asperiores harum dolore nihil fuga?
                </p>
            </div>
            <div class="about-contact">
                <h3>Get in touch</h3>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptas, maxime reprehenderit. Assumenda necessitatibus id
                    consectetur asperiores harum dolore nihil fuga?
                </p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "card-sample3",
    data() {
        return {
            id: Math.random().toString(36).substring(2, 10),
            name: "section",
            type: "cards",
            title: "Photography",
            thumbnail: "about flex wrap",
            class: "flex",
            style: {
                maxHeight: "500px",
                background: "beige",
                width: "100%",
                borderRadius: 0
            },
            children: [{
                id: Math.random().toString(36).substring(2, 10),
                name: "div",
                class: "about-image",
                style:{
                    position:'relative',
                    borderRadius: 0,
                }
            }]
        }
    }
}
</script>

<style lang="scss" scoped>
.about {
    background-color: #414141;
    height: 500px;
}
.about-text {
    color: white;
    background: #414141;
    flex: 2 1 20rem;
    justify-content: space-around;
}
.about-text div {
    padding: 0 4rem;
}
.about-text h3 {
    padding: 0.5rem 0rem;
    font-family: "Ruhl";
}
.about-text h2 {
    font-family: "Vibes";
}
.about-image {
    position: relative;
}
.about-image h5 {
    position: absolute;
    letter-spacing: 1rem;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -20%);
}
.about-image img {
    height: 500px;
    object-fit: cover;
}
</style>>

</style>