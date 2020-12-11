<template>
    <section class="card flex column align-center">
        <div class="header">
            <div class="avatar">
                <img
                    src="https://randomuser.me/api/portraits/women/67.jpg"
                    alt=""
                >
            </div>
        </div>
        <div class="card-body flex column align-center text-center">
            <h3 class="username">Helen Miller</h3>
            <h5 class="position">Accountant</h5>
            <p>Helen Miller is an accountant at the Acme Inc comany. She works very hard.</p>
            <a
                href="#"
                class="action button is-small"
            >View profile</a>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            id: "adsdmdskldsals",
            name: "section",
            type: "cards",
            class: "card-section flex",
            thumbnail: '',
            style: {
                background: "transparent",
                borderRadius: "0px",
                height: "0px",
            },
            children: [
                {
                    id: "awetaerhgavaefw3ew",
                    name: "div",
                    type: "card-div",
                    class: "card flex column align-center text-center",
                    style: {
                        borderRadius: '0px',
                        background: "#69D2E7",
                        width: '300px',
                        height: "380px",
                        position: 'relative'
                    },
                    //header
                    children: [{
                        id: "kdkjsalkljasdljkdsa",
                        name: 'div',
                        type: 'header-div',
                        style: {
                            height: '120px',
                            width: '100%',
                            background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEPu7BceUzLF-DvrMQdcldR3W_5Gn9BhKsiw&usqp=CAU)'
                        },
                        children: [{
                            id: 'dskjlsdkljsdsad',
                            name: 'div',
                            class: 'avatar-div',
                            style: {
                                width: "80px",
                                height: "80px",
                                position: "relative",
                                margin: "0 auto"
                            },
                            children: [{
                                id: "jkxdskljdsakjldas",
                                name: 'img',
                                class: 'card-img',
                                style: {
                                    display: 'block',
                                    position: 'relative',
                                    bottom: '-70px',
                                    border: "4px solid white"
                                }
                            }]
                        }]
                    }],

                },
                {
                    id: 'ddsklklsdajkladssadads',
                    name: 'div',
                    type: 'card-div',
                    class: 'card-body flex column align-center text-center',
                    style: {
                        padding: '30px',
                    },
                    children: [
                        {
                            id: 'dsjklsdkjsdjkla',
                            name: 'txt',
                            txt: "place holder",
                            style: {

                                fontSize: '18px',
                                fontweight: '600'
                            }
                        },
                        {
                            id: 'kjsadkjlasdkjl',
                            name: 'txt',
                            txt: "place holder",
                            style: {
                                fontSize: '25px',
                                color: '#7f00ff'
                            }
                        },
                        {
                            id: 'kjasdkljadskljas',
                            name: 'txt',
                            txt: 'place holder',
                            style: {
                                paddingTop: '8px',
                                fontSize: '25px'
                            }
                        },
                        {
                            id: 'jkasdkljdaslkj',
                            name: 'link',
                            txt: 'place holder',
                            style: {
                                padding: "16px 20px",
                                background: '#7f00ff',
                                borderColor: '#7f00ff',
                                color: 'white',
                                borderRadius: '100px'
                            }
                        }
                    ]

                }
            ]

        }
    }
}
</script>



<style lang="scss" scoped>
.card {
    position: relative;
    border-radius: 6px;
    max-width: 300px;
    max-height: 380px;
    margin: 0 auto;
    .header {
        height: 120px;
        width: 100%;
        background: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEPu7BceUzLF-DvrMQdcldR3W_5Gn9BhKsiw&usqp=CAU);
    }
    .card-body {
        padding: 30px;
        .user-meta {
            padding-top: 20px;
            .username {
                font-size: 18px;
                font-weight: 600;
            }
            .position {
                font-size: 90%;
                color: #7f00ff;
            }
        }
    }
    .user-bio {
        padding-top: 8px;
        font-size: 92%;
    }
    .action {
        padding: 16px 20px 16px 20px;
        background: #7f00ff;
        border-color: #7f00ff;
        color: white;
        border-radius: 100px;
    }
}
</style>