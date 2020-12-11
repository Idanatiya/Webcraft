<template>
    <section class="gallery-sample3">
        <!-- Start Gallery -->
        <div class="menu-box">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="heading-title text-center">
                            <h2>Special Menu</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="special-menu text-center">
                            <div class="button-group filter-button-group">
                                <button class="active" data-filter="*">All</button>
                                <button data-filter=".drinks">Drinks</button>
                                <button data-filter=".lunch">Lunch</button>
                                <button data-filter=".dinner">Dinner</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row special-list">
                    <div class="col-lg-4 col-md-6 special-grid drinks">
                        <div class="gallery-single fix">
                            <img src="images/img-01.jpg" class="img-fluid" alt="Image">
                            <div class="why-text">
                                <h4>Special Drinks 1</h4>
                                <p>Sed id magna vitae eros sagittis euismod.</p>
                                <h5> $7.79</h5>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 special-grid drinks">
                        <div class="gallery-single fix">
                            <img src="images/img-02.jpg" class="img-fluid" alt="Image">
                            <div class="why-text">
                                <h4>Special Drinks 2</h4>
                                <p>Sed id magna vitae eros sagittis euismod.</p>
                                <h5> $9.79</h5>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 special-grid drinks">
                        <div class="gallery-single fix">
                            <img src="images/img-03.jpg" class="img-fluid" alt="Image">
                            <div class="why-text">
                                <h4>Special Drinks 3</h4>
                                <p>Sed id magna vitae eros sagittis euismod.</p>
                                <h5> $10.79</h5>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 special-grid lunch">
                        <div class="gallery-single fix">
                            <img src="images/img-04.jpg" class="img-fluid" alt="Image">
                            <div class="why-text">
                                <h4>Special Lunch 1</h4>
                                <p>Sed id magna vitae eros sagittis euismod.</p>
                                <h5> $15.79</h5>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 special-grid lunch">
                        <div class="gallery-single fix">
                            <img src="images/img-05.jpg" class="img-fluid" alt="Image">
                            <div class="why-text">
                                <h4>Special Lunch 2</h4>
                                <p>Sed id magna vitae eros sagittis euismod.</p>
                                <h5> $18.79</h5>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 special-grid lunch">
                        <div class="gallery-single fix">
                            <img src="images/img-06.jpg" class="img-fluid" alt="Image">
                            <div class="why-text">
                                <h4>Special Lunch 3</h4>
                                <p>Sed id magna vitae eros sagittis euismod.</p>
                                <h5> $20.79</h5>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 special-grid dinner">
                        <div class="gallery-single fix">
                            <img src="images/img-07.jpg" class="img-fluid" alt="Image">
                            <div class="why-text">
                                <h4>Special Dinner 1</h4>
                                <p>Sed id magna vitae eros sagittis euismod.</p>
                                <h5> $25.79</h5>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 special-grid dinner">
                        <div class="gallery-single fix">
                            <img src="images/img-08.jpg" class="img-fluid" alt="Image">
                            <div class="why-text">
                                <h4>Special Dinner 2</h4>
                                <p>Sed id magna vitae eros sagittis euismod.</p>
                                <h5> $22.79</h5>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 special-grid dinner">
                        <div class="gallery-single fix">
                            <img src="images/img-09.jpg" class="img-fluid" alt="Image">
                            <div class="why-text">
                                <h4>Special Dinner 3</h4>
                                <p>Sed id magna vitae eros sagittis euismod.</p>
                                <h5> $24.79</h5>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'gallery-sample3',
    data() {
        return {
            type: 'section',
            class: 'gallery-slider flex column align-center',
            name: 'section',
            thumbnail: 'https://imagizer.imageshack.com/img922/37/Gy8un8.png',
            style: {
                "background": "transparent",
                "borderRadius": "0px",
                height: '500px'
            },
            children: [{
                _id: Math.random().toString(36).substring(2,12),
                type: 'div',
                class: '',
                style: {
                    "background": "transparent",
                    "borderRadius": "0px",
                },
                children: [
                    {
                        id: Math.random().toString(36).substring(2,12),
                        name: 'txt',
                        txt: "Special Menu",
                        style: {
                            "fontSize": "28px",
                            "fontWeight": "600",
                            "marginBlockStart": "",
                            "lineHeight": "",
                            "letterSpacing": "",
                            "backgroundColor": "transparent",
                            "textDecoration": "",
                            "fontStyle": "",
                            "textAlign": "",
                            "fontFamily": "",
                            "color": '#010101',
                        }
                    },
                    {
                        id: Math.random().toString(36).substring(2,12),
                        name: 'txt',
                        txt: "Lorem Ipsum is simply dummy text of the printing and typesetting",
                        style: {
                            "fontSize": "18px",
                            "fontWeight": "200",
                            "marginBlockStart": "",
                            "lineHeight": "",
                            "letterSpacing": "",
                            "backgroundColor": "transparent",
                            "textDecoration": "",
                            "fontStyle": "",
                            "textAlign": "",
                            "fontFamily": "",
                            "color": '#010101'
                        }
                    }
                ]

            },
            {
                _id: Math.random().toString(36).substring(2,12),
                name: "div",
                type: 'nav-section',
                class: 'flex align-center',
                style: {
                    "background": 'red',
                    "borderRadius": '4px',
                    "border": '1px solid #e4e4e4',
                    margin: '10px 15px',
                    display: 'inline-block',
                },
                children:
                    [
                        {
                            id: Math.random().toString(36).substring(2,12),
                            name: 'txt',
                            txt: "ALL",
                            style: {
                                boxShadow: ' px 20px 45px 5px rgba(0,0,0,.2)',
                                "fontSize": "14px",
                                "letterSpacing": '1px',
                                "fontWeight": '600px',
                                "background": '#cfa671;',
                                padding: '12px 40px',
                                "border": 'none',
                                "lineHeight": "",
                                "textDecoration": "",
                                "fontStyle": "",
                                "textAlign": "",
                                "fontFamily": "",
                                "color": '#fff'
                            }
                        },
                        {
                            id: Math.random().toString(36).substring(2,12),
                            name: 'txt',
                            txt: "DRINKS",
                            style: {
                                "fontSize": "14px",
                                "letterSpacing": '1px',
                                "fontWeight": '600px',
                                "background": '#fff',
                                "padding": '12px 40px',
                                "border": 'none',
                                "lineHeight": "",
                                "textDecoration": "",
                                "fontStyle": "",
                                "textAlign": "",
                                "fontFamily": "",
                                "color": '333'
                            }
                        },
                        {
                            "id": "gf2x4itiz2",
                            "name": 'txt',
                            "txt": "LUCNH",
                            'style': {
                                "fontSize": "14px",
                                "letterSpacing": '1px',
                                "fontWeight": '600px',
                                "background": '#fff',
                                "padding": '12px 40px',
                                "border": 'none',
                                "lineHeight": "",
                                "textDecoration": "",
                                "fontStyle": "",
                                "textAlign": "",
                                "fontFamily": "",
                                "color": '333'
                            }
                        },
                        {
                            "id": "ssv3gsz22b",
                            "name": 'txt',
                            "txt": "DINNER",
                            "style": {
                                "fontSize": "14px",
                                "letterSpacing": '1px',
                                "fontWeight": '600px',
                                "background": '#fff',
                                "padding": '12px 40px',
                                "border": 'none',
                                "lineHeight": "",
                                "textDecoration": "",
                                "fontStyle": "",
                                "textAlign": "",
                                "fontFamily": "",
                                "color": '333'
                            }
                        },
                    ]
            }
            ]
        }
    }
}

</script>


//         return {
//                 id: "adsdmdskldsals",
//                 name: "section",
//                 type: "cards",
//                 class: "card-section flex",
//                 thumbnail: '',
//                 style: {
//                     "background": "transparent",
//                     "borderRadius": "0px",
//                     height: "0px",
//                 },
//                 children: [
//                     {
//                         id: "awetaerhgavaefw3ew",
//                         name: "div",
//                         type: "card-div",
//                         class: "card flex column align-center text-center",
//                         style: {
//                             borderRadius: '0px',
//                             "background": "#69D2E7",
//                             width: '300px',
//                             height: "380px",
//                             position: 'relative'
//                         },
//                         //header
//                         children: [{
//                             id: "kdkjsalkljasdljkdsa",
//                             name: 'div',
//                             type: 'header-div',
//                             style: {
//                                 height: '120px',
//                                 width: '100%',
//                                 "background": 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEPu7BceUzLF-DvrMQdcldR3W_5Gn9BhKsiw&usqp=CAU)'
//                             },


//                         }
//     }
// }


