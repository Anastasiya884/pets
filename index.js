window.onload = function () {
  // const buttonOpen = document.getElementById('button-katrine');
  // const modal = document.getElementById('modal-popup');
  // const buttonClose = document.getElementById('button-katrine-close');
  //
  //
  // function showModal() {
  //     modal.style.display = 'flex';
  // }
  //
  // buttonOpen.addEventListener('click', showModal);
  //
  // function closeModal() {
  //     modal.style.display = 'none';
  // }
  //
  // buttonClose.addEventListener('click', closeModal);

  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 20,


    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // mobile + tablet - 321-768
      321: {
        slidesPerView: 2,
        spaceBetween: 40,
        centeredSlides: true,
      },
      // desktop >= 769
      769: {
        slidesPerView: 3,
        spaceBetween: 90
      }
    }
  });
}