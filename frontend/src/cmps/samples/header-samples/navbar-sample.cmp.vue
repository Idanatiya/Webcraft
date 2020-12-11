<template>
    <nav class="flex align-center">
        <h1 class="logo">Elena Joy</h1>
        <ul class="nav-links flex space-around clean-list">
            <li><a href="#about">About</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
</template>

<script>
export default {
//      data() {

//         return {
//                 id: Math.random().toString(36).substring(2, 10),
//                 name: "navbar-sample",
//                 type: "header",
//                 class: "flex align-center",
//                 style: {
//                     minHeight: "7.25rem",
//                     padding: "2rem 2rem",
//                     background: "beige",
//                     width: "100%",


//                 },
//                 children: [{
//                         id: Math.random().toString(36).substring(2, 10),
//                         type: "txt",
//                         class: "logo",
//                         txt: "Elena Joy",
//                         style: {
//                             lineHeight: "1.5",
//                             background: "",
//                             color: 'black',
//                             flex: "1 1 20rem",
//                             fontFamily: "Vibes",
//                             fontSize: "1.5rem",
//                         }
//                     },
//                     {
//                         id: Math.random().toString(36).substring(2, 10),
//                         type: 'section',
//                         class: "nav-links flex  clean-list space-around",
//                         style: {
//                             background: "",
//                             width: "40%",

//                         },
//                         children: [{
//                                 id: Math.random().toString(36).substring(2, 10),
//                                 type: 'link',
//                                 txt: "home",
//                                 style: {
//                                     fontFamily: "Ruhl",
//                                     color: "black",
//                                     fontWeight: "700",
//                                     paddingInlineStart: "2rem",
//                                     fontSize: "1rem",
//                                 },
//                                 href: '#home'
//                             }, {
//                                 id: Math.random().toString(36).substring(2, 10),
//                                 type: 'link',
//                                 txt: "work",
//                                 style: {
//                                     fontFamily: "Ruhl ",
//                                     color: "black",
//                                     fontWeight: "700",
//                                     paddingInlineStart: "2rem",
//                                     fontSize: "1rem",
//                                 },
//                                 href: '#work'
//                             },
//                             {
//                                 id: Math.random().toString(36).substring(2, 10),
//                                 type: 'link',
//                                 txt: "contact",
//                                 style: {
//                                     fontFamily: "Ruhl ",
//                                     color: "black",
//                                     fontWeight: "700",
//                                     paddingInlineStart: "2rem",
//                                     fontSize: "1rem",
//                                 },
//                                 href: '#contact'
//                             }
//                         ]
//                     }
//                 ]
//             }

// }}

}
</script>

<style scoped lang="scss">
nav {
    width: 90%;
    margin: auto;
    min-height: 10vh;
    padding: 2rem 0rem;
    h1 {
        font-family: "Vibes", sans-serif;
    }
    a {
        font-family: "Ruhl", sans-serif;
        color: black;
        font-weight: 700;
    }
    .logo {
        flex: 1 1 20rem;
    }
}
.nav-links {
    flex: 1 1 20rem;
}
</style>