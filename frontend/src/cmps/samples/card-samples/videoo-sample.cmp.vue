<template>

</template>

<script>
export default {
    data() {
        return {
            "name": "section",
            "type": "video",
            "class": "main-layout",
            "title": "idan video-card",
            "thumbnail": "https://imagizer.imageshack.com/img922/7981/WgIDFl.png",
            "style": {
                "background": "",
                "borderRadius": "0px"
            },
            children: [
                {
                    name: 'div',
                    "class": "full flex",
                    "style": {
                        "background": "rgb(220, 223, 230)",
                        "borderRadius": "0px"
                    },
                    children: [
                        {
                            name: 'div',
                            "class": 'flex column',
                            "style": {
                                "background": "rgb(220, 223, 230)",
                                "borderRadius": "0px",
                                "margin": "0 auto"
                            },
                            children: [
                                {
                                    "name": "txt",
                                    "txt": "Video to display",
                                    "style": {
                                        "fontSize": "36px",
                                        "lineHeight": "1",
                                        "letterSpacing": "1px",
                                        "color": "rgb(204, 51, 63)",
                                        "textDecoration": "inherit",
                                        "fontWeight": "normal",
                                        "fontStyle": "",
                                        "fontFamily": "vibes",
                                        "textAlign": "center",
                                        "borderRadius": "0px"
                                    },
                                    name: 'txt',
                                    "txt": "Your own beautiful words will change the world.",
                                    "style": {
                                        "fontSize": "19px",
                                        "lineHeight": "1.5",
                                        "letterSpacing": "1px",
                                        "color": "rgb(102, 102, 102)",
                                        "textDecoration": "inherit",
                                        "fontWeight": "normal",
                                        "fontStyle": "",
                                        "fontFamily": "vibes",
                                        "textAlign": "center",
                                        "borderRadius": "0px",
                                    },
                                    name: 'txt',
                                    "txt": "Your own beautiful words will change the world.",
                                    "style": {
                                        "fontSize": "16px",
                                        "lineHeight": "0",
                                        "letterSpacing": "1px",
                                        "color": "rgb(102, 102, 102)",
                                        "textDecoration": "inherit",
                                        "fontWeight": "normal",
                                        "fontStyle": "",
                                        "fontFamily": "vibes",
                                        "textAlign": "center",
                                        "borderRadius": "0px",
                                    },
                                    name: 'button',
                                    "txt": "I Am Button",
                                    "style": {
                                        "fontSize": "16px",
                                        "lineHeight": "1.5",
                                        "letterSpacing": "0px",
                                        "color": " rgb(255, 255, 255)",
                                        "textDecoration": "inherit",
                                        background: "rgb(204,51,63)",
                                        "fontWeight": "normal",
                                        "fontStyle": "",
                                        "fontFamily": "vibes",
                                        "textAlign": "center",
                                        "borderRadius": "0px",
                                    }
                                }
                            ]
                        },
                        {
                            "name": 'div',
                            "class": '',
                            "style": {
                                "background": "rgb(220, 223, 230)",
                                "borderRadius": "0px",
                                "position": 'absolute',
                                "right": "20px",
                                top: "40px",
                                width: '480px',
                                height: '300px'
                            },
                            "children": [{
                                "_id": "vnb3tubivs",
                                "name": "iframe",
                                "vidUrl": "https://www.youtube.com/watch?v=qJf8N46OEMk",
                                "style": {
                                    "background": "",
                                    "width": "100%",
                                    "height": "100%",
                                    "overflow": "hidden",
                                    "position": "relative"
                                },
                                "frameborder": "0",
                                "allowfullscreen": "allowfullscreen"
                            }]
                        }

                    ]
                }

            ]
        }
    }
}
</script>

<style>
</style>