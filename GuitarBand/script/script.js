var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    centeredSlides: true,
    initialSlide: 0,
    spaceBetween: 30,
    grabCursor: true,   
    on: {
        slideChangeTransitionEnd: function () {
            if (this.activeIndex >= 5) {
                this.slideTo(5, 0);
            }
        }
    }
});
