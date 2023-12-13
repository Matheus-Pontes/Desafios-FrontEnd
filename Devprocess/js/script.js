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
    }
});