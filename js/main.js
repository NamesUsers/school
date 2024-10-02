$(function(){
    var mixer = mixitup('.popup__content-main');
    $('.offer__btn').hover( function(){
        if($('.show__more').hasClass('show__more--active')){
            $('.show__more').removeClass('show__more--active')
        } else{
            $('.show__more').addClass('show__more--active')
            
        }

    })
    const swiper = new Swiper('.trainers__slider', {
        loop: true,
        slidesPerView: 3,
        spaceBetween:40,
        
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
    $('.trainers__popup, .popup__btn, .overlay__modal, .socials__link').on('click' , function(e){
        e.preventDefault()
        if ($('.trainers__modal').hasClass('trainers__modal--active')){
            $('.trainers__modal').removeClass('trainers__modal--active')
            $('.overlay__modal').removeClass('overlay--show')
            
        } else {
            $('.trainers__modal').addClass('trainers__modal--active')
            $('.overlay__modal').addClass('overlay--show')
        }
    })
    $('.popup__link-btn').on('click' , function(e){
        e.preventDefault()
        if ($(this).hasClass('popup__link-btn--active')){
            $('.popup__link-btn').removeClass('popup__link-btn--active')
            
        } else {
            $('.popup__link-btn').removeClass('popup__link-btn--active')
            $(this).addClass('popup__link-btn--active')
        }
    })

})