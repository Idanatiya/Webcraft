<template>
    <div class="footer flex wrap align-center">
        <h4>Elena Joy</h4>
        <ul class="clean-list flex space-between align-center">
            <li>
                <a href="#"><img src="@/assets/svgs/youtube-symbol1.svg" alt="youtube-social-media" /></a>
            </li>
            <li>
                <a href="#"><img src="@/assets/svgs/twitter1.svg" alt="twitter-social-media" /></a>
            </li>
            <li>
                <a href="#"><img src="@/assets/svgs/instagram1.svg" alt="instagram" /></a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "footer-sample",
    data() {
        // return {
        //     id: Math.random().toString(36).substring(2, 10),
        //     type: "footer",
        //     thumbnail: "https://imagizer.imageshack.com/img922/9372/4iyvDo.png",
        //     title: "Footer",
        //     name: "section",
        //     class: "footer flex wrap align-center",
        //     style: {
        //         padding: "1rem 5%",
        //         color: "white",
        //         background: "lightblue",
        //         backgroundColor: "lightblue",
        //         borderRadius: 0,
        //     },
        //     children: [{
        //         id: Math.random().toString(36).substring(2, 10),
        //         name: "txt",
        //         class: "logo",
        //         txt: "Elena Joy",
        //         style: {
        //             lineHeight: "1.5",
        //             backgroundColor: "transparent",
        //             color: 'white',
        //             fontFamily: "Ruhal",
        //             fontSize: "30px",
        //             textAlign: 'inherit',
        //             fontStyle: 'normal',
        //             textDecoration: 'none',
        //             letterSpacing: '1',
        //             flex: "3 1 40rem",
        //             marginInlineEnd: "40rem"

        //         }
        //     }, {
        //         id: Math.random().toString(36).substring(2, 10),
        //         name: 'div',
        //         class: "clean-list flex space-between align-center",
        //         style: {
        //             background: "transparent",
        //             flex: "1 1 6rem",
        //             borderRadius: 0,
        //         },
        //         children: [{
        //             id: Math.random().toString(36).substring(2, 10),
        //             name: 'link',
        //             style:{
        //                 background:"url(@/assets/svgs/youtube-symbol1.svg)"
        //             }
        //         },{
        //             id: Math.random().toString(36).substring(2, 10),
        //             name: 'link',
        //             style:{
        //                 background:"url(@/assets/svgs/twitter1.svg)"
        //             }
        //         },{
        //             id: Math.random().toString(36).substring(2, 10),
        //             name: 'link',
        //             style:{
        //                 background:"url(@/assets/svgs/instagram1.svg)"
        //             }
        //         }
        //         ]
        //     }
        //     ]

        // }


    }
}
</script>

<style scoped lang="scss" >
.footer {
    background-color: lightblue;
    color: white;
    padding: 1rem 5%;

    ul {
        flex: 1 1 6rem;
        h4 {
            flex: 3 1 40rem;
            font-size: calc(1.4rem + 1vw);
            margin-inline-end: 40rem;
        }
    }
}
</style>


<template>
    <section class="user-details-container flex column align-center">
        <!-- <img src="../assets/img/under-construction.png" />
        <h1>Under construction</h1>
        <div class="user-card" v-if="loggedInUser">
            <div class="circle">
                <img :src="imgUrl" class="user-logo" />
            </div>
            <div class="sepator"></div>
            <div class="user-info">
                <h2 class="username">{{ loggedInUser.username }}</h2>
                <small>Email: {{loggedInUser.email}}</small>
                <small>Created at {{ formatTime }}</small>
            </div>
            <div class="stats">
                <h2>
                    Waps: will be place here
                </h2>
                <form class="form-control">
                    <p>Upload a img:</p>
                    <input type="file" name="img-uploader" id="imgUploader" class="upload-input" @change="setAvatar" />
                </form>
            </div>
        </div> -->
    </section>
</template>