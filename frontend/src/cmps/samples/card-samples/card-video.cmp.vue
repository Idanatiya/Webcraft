<template>
    <section class="cards">
        <div class="card">
            <div class="card__image-container">
                <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80" alt="Detailed image description would go here." />
            </div>
            <div class="card__content">
                <p class="card__title text--medium">
                    Here's the Title of an Awesome Course
                </p>
                <div class="card__info">
                    <p class="text--medium">30 Min</p>
                    <p class="card__price text--medium">Free</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'card-video',
    data() {
        return {
            name: "section",
            type: "video",
            class: "video-card",
            thumbnail: 'https://imagizer.imageshack.com/img922/7981/WgIDFl.png',
            style: {
                background: "transparent",
                borderRadius: "0px",
                display: 'grid',
                gridTemplateColumns: 'repeat(12, minmax(auto, 60px))',
                gridColumn: '2 / span 12',
                gridGap: '40px'
            },
            imgUrl: '',
            children: [
                {

                    _id: "xn50tooepx",
                    name: "div",
                    type: "card-div",
                    class: "card flex column align-center text-center",
                    style: {
                        gridColumnEnd: 'span 4',
                        display: 'flex',
                        flexDirection: 'flex',
                        backgroundColor: '#39393b',
                        borderRadius: '0px',
                        background: "#69D2E7",
                    },
                    children: [{
                        _id: "vnb3tubivs",
                        name: 'div',
                        type: 'header-card-img',
                        imgUrl: '',
                        style: {
                            background: '',
                            width: '100%',
                            paadingTop: '56.25%',
                            overflow: 'hidden',
                            position: 'relative'
                        },
                        children: [{
                            _id: "vvlb93hww7",
                            name: 'div',
                            class: 'avatar-img',
                            style: {
                                width: "100%",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)"
                            },
                        }]
                    },
                    {
                        _id: "lwjp5shaov",
                        name: 'div',
                        style: {
                            background: '',
                            padding: "20px",
                        },
                        children: [{
                            _id: "3llf3wiqii",
                            name: 'txt',
                            marginBottom: "20px"
                        },
                        {
                            _id: "4xb16ruz1i",
                            name: 'div',
                            class: 'flex align-center',
                            style: {
                                alignSelf: 'end',
                            },
                            children: [
                                {
                                    _id: "odwpathhr2",
                                    name: 'txt',
                                    txt: 'lorem ipsum momo pomo',
                                    style: {
                                        fontSize: '16px',
                                        lineHeight: '20px',
                                        fontWeight: "400px",
                                        color: "#ecf0f1",
                                        "letterSpacing": "",
                                        "textDecoration": "",
                                        "fontStyle": "",
                                        "textAlign": "",
                                        "fontFamily": "carme"
                                    }

                                },
                                {
                                    _id: "lyowt49vlg",
                                    name: 'txt',
                                    txt: 'lorem ipsum momo pomo',
                                    style: {
                                        marginLeft: 'auto',
                                        padding: "5px 20px",
                                        borderRadius: "20px",
                                        backgroundColor: '#303032',
                                        fontSize: '16px',
                                        lineHeight: '20px',
                                        fontWeight: "400px",
                                        color: "#ecf0f1",
                                        "letterSpacing": "",
                                        "textDecoration": "",
                                        "fontStyle": "",
                                        "textAlign": "",
                                        "fontFamily": "carme"
                                    }
                                }
                            ]
                        }
                        ]
                    }
                    ],


                },
            ]

        }
    }
}
</script>




<style scope lang="scss">
.text--medium {
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
    color: #ecf0f1;
}

.cards {
    grid-column: 2 / span 12;
    display: grid;
    grid-template-columns: repeat(12, minmax(auto, 60px));
    grid-gap: 40px;
}

.card {
    grid-column-end: span 4;
    display: flex;
    flex-direction: column;
    background-color: #39393b;
    cursor: pointer;
    transition: all 0.3s ease 0s;
}

.card:hover {
    transform: translateY(-7px);
}

.card__image-container {
    width: 100%;
    padding-top: 56.25%;
    overflow: hidden;
    position: relative;
}

.card__image-container img {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.card__content {
    padding: 20px;
}

.card__title {
    margin-bottom: 20px;
}

.card__info {
    display: flex;
    align-self: end;
    align-items: center;
}

.card__price {
    margin-left: auto;
    padding: 5px 20px;
    background-color: #303032;
    border-radius: 20px;
}
</style>

//  {
//                         name: "section",
//                         type: "video",
//                         class: "video-card",
//                         thumbnail: 'https://imagizer.imageshack.com/img922/7981/WgIDFl.png',
//                         style: {
//                             background: "transparent",
//                             borderRadius: "0px",
//                             display: 'grid',
//                             gridTemplateColumns: 'repeat(12, minmax(auto, 300px))',
//                             gridColumn: '2 / span 12',
//                             gridGap: '40px'
//                         },
//                         imgUrl: '',
//                         children: [
//                             {
//                                 _id: "xn50tooepx",
//                                 name: "div",
//                                 type: "card-div",
//                                 class: "card flex column",
//                                 style: {
//                                     gridColumnEnd: 'span 4',
//                                     borderRadius: '0px',
//                                     background: "",
//                                 },

//                                 children: [{
//                                     _id: "vnb3tubivs",
//                                     name: 'div',
//                                     type: 'header-card-img',
//                                     imgUrl: '',
//                                     style: {
//                                         background: '',
//                                         width: '100%',
//                                         paddingTop: '56.25%',
//                                         overflow: 'hidden',
//                                         position: 'relative'
//                                     },

//                                     children: [{
//                                         _id: "vvlb93hww7",
//                                         name: 'img',
//                                         class: 'avatar-img',
//                                         imgUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80',
//                                         style: {
//                                             position: 'absolute',
//                                             width: "100%",
//                                             top: "50%",
//                                             left: "50%",
//                                             transform: "translate(-50%, -50%)"
//                                         },
//                                     }]
//                                 },
//                                 {
//                                     _id: "lwjp5shaov",
//                                     name: 'div',
//                                     style: {
//                                         background: '',
//                                         padding: "35px",
//                                     },
//                                     children: [{
//                                         _id: "3llf3wiqii",
//                                         name: 'txt',
//                                         marginBottom: "20px",
//                                         txt: 'This is an awesome card',
//                                         style: {
//                                             fontSize: "16px",
//                                             lineHeight: "25px",
//                                             fontWeight: "400",
//                                             color: "#ecf0f1"
//                                         }
//                                     },
//                                     {
//                                         _id: "4xb16ruz1i",
//                                         name: 'div',
//                                         class: 'flex align-center',
//                                         style: {
//                                             alignSelf: 'end',
//                                         },
//                                         children: [
//                                             {
//                                                 _id: "odwpathhr2",
//                                                 name: 'txt',
//                                                 txt: '30 Min',
//                                                 style: {
//                                                     fontSize: '16px',
//                                                     lineHeight: '20px',
//                                                     fontWeight: "400px",
//                                                     color: "#ecf0f1",
//                                                     "letterSpacing": "",
//                                                     "textDecoration": "",
//                                                     "fontStyle": "",
//                                                     "textAlign": "",
//                                                     "fontFamily": "carme"
//                                                 }

//                                             },
//                                             {
//                                                 _id: "lyowt49vlg",
//                                                 name: 'txt',
//                                                 txt: 'Free',
//                                                 style: {
//                                                     marginLeft: 'auto',
//                                                     padding: "5px 20px",
//                                                     borderRadius: "20px",
//                                                     backgroundColor: '#303032',
//                                                     fontSize: '16px',
//                                                     lineHeight: '20px',
//                                                     fontWeight: "400px",
//                                                     color: "#ecf0f1",
//                                                     "letterSpacing": "",
//                                                     "textDecoration": "",
//                                                     "fontStyle": "",
//                                                     "textAlign": "",
//                                                     "fontFamily": "carme"
//                                                 }
//                                             }
//                                         ]
//                                     }
//                                     ]
//                                 }
//                                 ],


//                             },
//                         ]

//                     }