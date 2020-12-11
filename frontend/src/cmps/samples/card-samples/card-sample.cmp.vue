<template>
    <div class="card-sample">
        <section class="hero">
            <div class="hero-introduction flex column justify-center align-center">
                <h2>
                    Elena Joy <br />
                    Photography
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque minima assumenda expedita similique quaerat maiores
                    ab, itaque hic explicabo eaque!
                </p>
                <a href="#gallery">Gallery</a>
            </div>
            <div class="hero-images">
                <img class="hero-elena" src="https://imagizer.imageshack.com/img924/5680/fy20r8.png" alt="picture of elena joy" />
            </div>
        </section>
        <!-- <section class="about" id="about">
        <div class="about-image">
          <h5>MINIMAL</h5>
          <img src="@/assets/img/aboutimage.png" alt="portrait-picture" />
        </div>
        <div class="about-text flex column justify-center align-center" id="work">
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
      </section>  -->
    </div>
</template>

<script>

export default {
    name: 'card-sample',
    data() {
        // return {
        //     id: Math.random().toString(36).substring(2, 10),
        //     name: "section",
        //     type: "cards",
        //     class: "",
        //     style: {
        //         minHeight: "872px",
        //         padding: "",
        //         background: "beige",
        //         width: "100%",
        //         borderRadius: 0
        //     },
        //     children: [
        //         {
        //             id: Math.random().toString(36).substring(2, 10),
        //             name: "section",
        //             class: "hero flex wrap",
        //             style: {
        //                 lineHeight: "1.5",
        //                 backgroundColor: "",
        //                 color: 'black',
        //                 flex: "1 1 20rem",
        //                 fontFamily: "Ruhl",
        //                 fontSize: "16px",
        //                 textAlign: '',
        //                 fontStyle: '',
        //                 textDecoration: '',
        //                 letterSpacing: '',
        //                 width: "95%",
        //                 flexWrap: "wrap",
        //                 margin: "0 0 0 auto",
        //                 overflow: "hidden"
        //             },
        //             children: [
        //                 {
        //                     id: Math.random().toString(36).substring(2, 10),
        //                     name: "div",
        //                     class: "hero-introduction",
        //                     style: {
        //                         background: "",
        //                         flex: "2 1 40rem",
        //                         textAlign: "center",
        //                         borderRadius: 0,
        //                     },
        //                     children: [{
        //                         id: Math.random().toString(36).substring(2, 10),
        //                         type: "text",
        //                         name: "txt",
        //                         txt: "Elena Joy",
        //                         style: {
        //                             fontSize: "1.5rem",
        //                             lineHeight: "1.5",
        //                             letterSpacing: "",
        //                             background: "",
        //                             color: "rgb(63,63,63)",
        //                             fontFamily: "Ruhl",
        //                             textDecoration: "",
        //                             fontStyle: "",
        //                             textAlign: "",
        //                             paddingTop: "3rem",
        //                         }
        //                     }, {
        //                         id: Math.random().toString(36).substring(2, 10),
        //                         type: "text",
        //                         name: "txt",
        //                         txt: "Photography",
        //                         style: {
        //                             fontSize: "1.5rem",
        //                             lineHeight: "1.5",
        //                             letterSpacing: "",
        //                             background: "",
        //                             color: "rgb(63,63,63)",
        //                             fontFamily: "Ruhl",
        //                             textDecoration: "",
        //                             fontStyle: "",
        //                             textAlign: "",
        //                             paddingTop: "3rem",
        //                         }
        //                     },
        //                     {
        //                         id: Math.random().toString(36).substring(2, 10),
        //                         type: "text",
        //                         name: "txt",
        //                         class: "",
        //                         txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque minima assumenda expedita similique quaerat maiores ab, itaque hic explicabo eaque!",
        //                         style: {
        //                             lineHeight: "",
        //                             backgroundColor: "",
        //                             color: 'rgb(63,63,63)',
        //                             fontFamily: "Ruhl",
        //                             fontSize: "1rem",
        //                             textAlign: '',
        //                             fontStyle: '',
        //                             textDecoration: '',
        //                             letterSpacing: '',
        //                             padding: "5rem 10rem"
        //                         }
        //                     }, {
        //                         id: Math.random().toString(36).substring(2, 10),
        //                         type: "link",
        //                         name: "link",
        //                         class: "",
        //                         txt: "Gallery",
        //                         href: "#Gallery",
        //                         style: {
        //                             lineHeight: "",
        //                             backgroundColor: "",
        //                             color: 'rgb(63,63,63)',
        //                             fontFamily: "Ruhl",
        //                             fontSize: "1rem",
        //                             textAlign: '',
        //                             fontStyle: '',
        //                             textDecoration: '',
        //                             letterSpacing: '',
        //                             padding: "2rem 8rem",
        //                             border: "3px solid black",
        //                             marginBottom: "4rem"
        //                         }
        //                     }
        //                     ]
        //                 },
        //                 {
        //                     id: Math.random().toString(36).substring(2, 10),
        //                     name: "div",
        //                     class: "hero-images",
        //                     style: {
        //                         background: "linear-gradient(#dad8dd, #dad1d4)",
        //                         flex: "1 1 40rem",
        //                         borderRadius: 0,
        //                         zIndex: 1,
        //                     },
        //                     children: [
        //                         {
        //                             id: Math.random().toString(36).substring(2, 10),
        //                             name: "img",
        //                             class: "hero-elena",
        //                             style: {
        //                                 borderRadius: "2px",
        //                                 height: "872px",
        //                                 width:"100%",
        //                                 objectFit:"cover"
        //                             },
        //                             imgUrl:"@/assets/img/elenajoy.png"
        //                         }
        //                     ]
        //                 }


        //             ]
        //         }
        //     ]
        // }

    }
}
</script>

<style>
.hero {
    min-height: 872px;
    width: 95%;
    margin: 0 0 0 auto;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
}

.hero-introduction {
    flex: 2 1 40rem;
    text-align: center;
}
.hero-introduction p {
    padding: 5rem 10rem;
    color: var(--gray-text);
}
.hero-introduction h2 {
    padding-top: 3rem;
}
.hero-introduction a {
    padding: 2rem 8rem;
    border: 3px solid black;
    margin-bottom: 4rem;
}

.hero-images {
    flex: 1 1 40rem;
    background: linear-gradient(#dad8dd, #dad1d4);
    position: relative;
    z-index: 1;
}
.hero-elena {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.plant {
    position: absolute;
    bottom: 0;
    left: -20%;
    z-index: -1;
    transform: translateY(10%) rotateZ(-10deg) rotateX(-90deg);
    animation: plant-entrance 1.5s ease-in-out 0.5s forwards,
        plant-shake 2.5s infinite ease alternate-reverse 2s;
    transform-origin: bottom;
    max-height: 80%;
}
.plant2 {
    left: 40%;
}
</style>



