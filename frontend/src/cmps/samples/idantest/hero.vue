<template>
    <header class="main-head">
        <nav class="flex space-between align-items wrap">
            <div class="logo">

                <h1><img src="@/assets/img/code.svg" alt=""> Name</h1>
            </div>

            <div class="links flex space-between">
                <a href="#">Home</a>
                <a href="#">Projects</a>
                <a href="#">Contact</a>
            </div>
        </nav>
        <section class="intro">
            <h2>Your name</h2>
            <h3>Front end devloper</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolorem beatae tenetur recusandae deserunt dolore?</p>
            <div class="intro-social">
                <span><i class="fab fa-github fa-3x"></i></span>
                <span><i class="fab fa-linkedin-in fa-3x"></i></span>
            </div>
        </section>
        <div class="intro-images">
            <img src="@/assets/img/splash.svg" alt="" class="splash">
            <img src="@/assets/img/me.svg" class="me" />
        </div>
        <footer class="main-footer">
            <h3>Dev Name goes here</h3>
            <div class="social-links">
                <span><i class="fab fa-instagram"></i></span>
                <span><i class="fab fa-youtube"></i></span>
                <span><i class="fab fa-facebook"></i></span>
            </div>
        </footer>

    </header>
</template>

<script>
export default {
    name: 'header-samples',
    data() {
        return {

        }
    }
}
</script>

<style  scoped lang="scss">
.main-head {
    width: 100%;
    margin: 0 0 0 auto;
}

nav {
    min-height: 10vh;
    width: 60%;
    .logo {
        flex: 1 1 10rem;
        // h1 {
        //     margin: 2rem;
        // }
        p {
            padding-top: 2rem;
            color: #2c2c2c;
        }
    }
    .links {
        flex: 1 1 40rem;
        > * {
            font-size: 2rem;
            padding: 10px;
        }
    }
}
.intro {
    min-height: 90vh;
    width: 90%;
    margin: auto;
    z-index: 2;
    flex: 1;
    h2 {
        font-size: 8rem;
        padding-top: 2rem;
    }
}

.intro-social span {
    margin-inline-start: 10px;
}
.splash {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    z-index: -1;
}

.active {
    background: #2c2c2c;
    color: white;
    padding: 0.5rem 3rem;
    border-radius: 2rem;
}

.main-footer {
    width: 100%;
    background: black;
    height: 70px;
    background: #063762;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: cursive;
    padding: 10px;

    .social-links span {
        font-size: 30px;
        padding-inline-start: 1rem;
    }
}

.me {
    position: absolute;
    right: 0;
    top: 20%;
}
</style>