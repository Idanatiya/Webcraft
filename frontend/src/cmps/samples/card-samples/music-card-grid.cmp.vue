<template>
    <section>

    </section>
</template>

<script>
export default {
    data() {
        return {
            name: "section",
            type: "card",
            class: "card",
            thumbnail: 'https://imagizer.imageshack.com/img922/7981/WgIDFl.png',
            style: {
                background: "#fff",
                borderRadius: "0px",
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(auto, 60px))',
                gridGap: '20px'
            },
            children: [
                {
                    name: "div",
                    class: "card",
                    style: {
                        width: '200px'
                    },
                    children: [
                        {
                            "_id": "wdsajksav9a9",
                            "name": "img",
                            "class": "card-img",
                            "imgUrl": "https://imagizer.imageshack.com/img922/3513/u2PP1k.png",
                            "style": {
                                "display": "block",
                                "position": "relative",
                                "bottom": "-82px",
                                "border": "4px solid white",
                                "objectFit": "cover",
                                "height": "100%",
                                "borderRadius": "50%"
                            }
                        },
                        {
                            "_id": "kjasdjkasjsskkjv",
                            "name": "txt",
                            "txt": "Custom Player",
                            "style": {
                                paddingTop: "28px",
                                textTransform: "uppercase",
                                "fontSize": "20px",
                                "fontWeight": "bold",
                                "marginBlockStart": "20px",
                                "lineHeight": "25px",
                                "letterSpacing": "",
                                "backgroundColor": "transparent",
                                "textDecoration": "",
                                "fontStyle": "",
                                "textAlign": "center",
                                "fontFamily": "bungee",
                                "color": "#030000"
                            }
                        },
                        {
                            "_id": "kjasdjkasjsskkjv",
                            "name": "txt",
                            "txt": "Add text here",
                            "style": {
                                paddingTop: "28px",
                                textTransform: "uppercase",
                                "fontSize": "20px",
                                "fontWeight": "bold",
                                "marginBlockStart": "20px",
                                "lineHeight": "25px",
                                "letterSpacing": "",
                                "backgroundColor": "transparent",
                                "textDecoration": "",
                                "fontStyle": "",
                                "textAlign": "center",
                                "fontFamily": "bungee",
                                "color": "#030000"
                            }
                        },
                    ]
                }
            ]
        }
    }
}
</script>

<style>
</style>