const burger = document.querySelector('.burger');
const menu = document.querySelector('.list');
console.log(burger);
console.log(menu);

burger.addEventListener('click', ()=>{
  menu.classList.toggle('active');
})


new Swiper('.swiper',{
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination:{
        el:'.swiper-pagination',
        type:'fraction',
      }
});