import Swiper, { Pagination, Autoplay } from 'swiper';

export const swiper =
  (() => {
    const logoSliders = Array.prototype.slice.call(document.querySelectorAll('.js-logo-slider'));
    if (logoSliders.length) {
      logoSliders.forEach(logoSlider => {
        const slider = logoSlider.querySelector('.swiper');
        const swiper = new Swiper(slider, {
          modules: [Autoplay],
          slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween: 80,
          grabCursor: true,
          autoplay: true,
          loop: true,
        });
        window.addEventListener('resize', () => {
          swiper.update();
        });
      });
    }
    const blockquoteSliders = Array.prototype.slice.call(document.querySelectorAll('.js-blockquote-slider'));
    if (blockquoteSliders.length) {
      blockquoteSliders.forEach(blockquoteSlider => {
        const slider = blockquoteSlider.querySelector('.swiper');
        const paginationWrapper = blockquoteSlider.querySelector('.swiper-pagination');
        const swiper = new Swiper(slider, {
          modules: [Pagination],
          slidesPerView: 1,
          spaceBetween: 10,
          pagination: {
            el: paginationWrapper,
            clickable: true,
            type: 'bullets',
            bulletElement: 'button'
          },
        });
        window.addEventListener('resize', () => {
          swiper.update();
        });
      });
    }
  })()