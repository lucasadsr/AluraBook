const width = screen.width;
let slides = 2;

if(width >= 1024) {
    slides = 3;
}

const swiper = new Swiper('.swiper', {
    spaceBetween: 10,
    slidesPerView: slides,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    centeredSlides: true,
});