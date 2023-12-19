const swiper = new Swiper(".slide-video", {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 800,
    pagination: {
        el:".s-video .top .swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".s-video .btn-next",
        prevEl: ".s-video .btn-prev"
    },
    breakpoints: {
        320:{
            slidesPerView: 1.1,
            spaceBetween: 16,
        },
        767:{
            slidesPerView: 2.1
        },
        1024:{
            slidesPerView: 3.1
        },
        1200:{
            slidesPerView: 3,
            spaceBetween: 30,
        }
    }
});