<template>
    <section>

    </section>
</template>

<script>
export default {
    data() {
        return {
            "name": "section",
            "type": "cards",
            "class": "main-layout",
            "title": "idan chef cards",
            "thumbnail": "https://imagizer.imageshack.com/img922/7981/WgIDFl.png",
            "style": {
                "background": "",
                "borderRadius": "0px"
            },
            "children": [
                {
                    "name": "div",
                    "class": "full flex column align-center",
                    "style": {
                        "background": "",
                        "borderRadius": "0px"
                    },
                    "children": [
                        {
                            "name": "txt",
                            "txt": "Chef",
                            "style": {
                                "fontSize": "89px",
                                "padding": "24px 20px",
                                "lineHeight": "1",
                                "letterSpacing": "1",
                                "color": "#c8a97e",
                                "textDecoration": "inheri",
                                "fontWeight": "normal",
                                "fontStyle": "",
                                "fontFamily": "vibes",
                                "textAlign": "center",
                                "borderRadius": "0px"
                            }
                        },
                        {
                            "name": "txt",
                            "txt": "Our Master Chef",
                            "style": {
                                "color": "inherit",
                                "fontSize": "52px",
                                "padding": "0px 20px",
                                "lineHeight": "1.2",
                                "letterSpacing": "1",
                                "backgroundColor": "unset",
                                "textDecoration": "",
                                "fontWeight": "900",
                                "fontStyle": "inheirt",
                                "fontFamily": "inherit",
                                "textAlign": "center",
                                "borderRadius": "0px",
                                "marginTop": "-69px",
                                "marginBottom": "0"
                            }
                        }
                    ]
                },
                {
                    "name": "div",
                    "class": "grid",
                    "style": {
                        "grid-template-columns": "repeat(auto-fit, minmax(300px, 1fr))",
                        "place-items": "center",
                        "gap": "20px"
                    },
                    "children": [
                        {
                            "name": "div",
                            "class": "food-card flex column align-center",
                            "style": {
                                "padding": "8px",
                                "background": "transparent",
                                "borderRadius": "0"
                            },

                            "children": [
                                {
                                    "name": "img",
                                    "class": "fas fa-birthday-cake",
                                    "imgUrl": "https://preview.colorlib.com/theme/feliciano/images/chef-1.jpg",
                                    "style": {
                                        "objectFit": "cover",
                                        "width": "100%",
                                        "borderRadius": "0px"
                                    }
                                },
                                {
                                    "name": "div",
                                    "class": "food-card flex column align-center",
                                    "style": {
                                        "padding": "8px",
                                        "background": "transparent",
                                        "borderRadius": "0"
                                    },
                                    "children": [
                                        {
                                            "name": "txt",
                                            "txt": "Luke Simon",
                                            "style": {
                                                "lineHeight": "1.2",
                                                "textAlign": "center",
                                                "background": "",
                                                "color": "#000000",
                                                "fontSize": "18px",
                                                "borderRadius": "0px",
                                                "fontFamily": "inherit",
                                                "textDecoration": "",
                                                "fontStyle": "inherit",
                                                "backgroundColor": "unset",
                                                "fontWeight": "600",
                                                "marginBottom": "0px"
                                            }
                                        },
                                        {
                                            "name": "txt",
                                            "txt": "Chef",
                                            "style": {
                                                "lineHeight": "1.2",
                                                "textAlign": "center",
                                                "background": "",
                                                "marginBottom": "14px",
                                                "color": "rgba(0, 0, 0, 0.3)",
                                                "fontSize": "24px",
                                                "borderRadius": "0px",
                                                "maxWidth": "24ch",
                                                "backgroundColor": "",
                                                "textDecoration": "",
                                                "display": "block"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "name": "div",
                                    "style": {
                                        "background": "transparent",
                                        "borderRadius": "0"
                                    },
                                    "children": [
                                        {
                                            "name": "i",
                                            "class": "fab fa-twitter",
                                            "style": {
                                                "lineHeight": "",
                                                "textAlign": "center",
                                                "background": "",
                                                "lineHeight": "",
                                                "color": "rgb(200, 169, 126)",
                                                "fontSize": "30px",
                                                "borderRadius": "0px",
                                                "marginInlineStart": "15px",
                                                "marginInlineEnd": "15px"
                                            }
                                        },
                                        {
                                            "name": "i",
                                            "class": "fab fa-instagram",
                                            "style": {
                                                "lineHeight": "",
                                                "textAlign": "center",
                                                "background": "",
                                                "lineHeight": "1.6",
                                                "color": "rgb(200, 169, 126)",
                                                "fontSize": "30px",
                                                "borderRadius": "0px",
                                                "marginInlineStart": "15px",
                                                "marginInlineEnd": "15px"
                                            }
                                        },
                                        {
                                            "name": "i",
                                            "class": "fab fa-facebook-f",
                                            "style": {
                                                "lineHeight": "",
                                                "textAlign": "center",
                                                "background": "",
                                                "lineHeight": "1.6",
                                                "color": "rgb(200, 169, 126)",
                                                "fontSize": "30px",
                                                "borderRadius": "0px",
                                                "marginInlineStart": "15px",
                                                "marginInlineEnd": "15px"
                                            }
                                        },
                                        {
                                            "name": "i",
                                            "class": "fab fa-google-plus-g",
                                            "style": {
                                                "lineHeight": "",
                                                "textAlign": "center",
                                                "background": "",
                                                "lineHeight": "1.6",
                                                "color": "rgb(200, 169, 126)",
                                                "fontSize": "30px",
                                                "borderRadius": "0px",
                                                "marginInlineStart": "15px",
                                                "marginInlineEnd": "15px"
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
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