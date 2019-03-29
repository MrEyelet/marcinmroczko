(function($) {
  
  $(document).ready(function(){

      if ($(window).width() > 980 ) {

          $('main, footer').hide();

      }

      function addClassesToHeader() {
        $('.hero__top-bar').addClass('sticky');
        $('.hero__top-bar__left').addClass('show');
      }

      function removeClassesFromHeader() {
        $('.hero__top-bar').removeClass('sticky');
        $('.hero__top-bar__left').removeClass('show');
        $('.hero__menu-container').removeClass('hero__menu-container--show');
      }

      function toggleClassHamburger() {
        $('.hamburger__top').removeClass('hamburger__top--toggle');
        $('.hamburger__middle').removeClass('hamburger__middle--toggle');
        $('.hamburger__bottom').removeClass('hamburger__bottom--toggle');
      }

        $('#button-js').on('click', function(e) {

          e.preventDefault();

          $('main, footer').show();
          $(this).fadeOut('fast');
          $('.hamburger__container').addClass('visible');
          $('.hero__layer-outer').addClass('decrease-width');//animate({width: '60%'});

        });

        $('.hamburger__container').on('click', function(e) {

          $(this).toggleClass('rotate');
          $('.hamburger__top').toggleClass('hamburger__top--toggle');
          $('.hamburger__middle').toggleClass('hamburger__middle--toggle');
          $('.hamburger__bottom').toggleClass('hamburger__bottom--toggle');
          $('.hero__menu-container').toggleClass('hero__menu-container--show');

        });

        $(window).on('scroll' , function(e) {

          var scrollTop = $(window).scrollTop();

          if ( scrollTop > $(window).height() - 5) { 

            addClassesToHeader();

          } else {

            removeClassesFromHeader();
            toggleClassHamburger();
          }

      });


      $("a").on('click', function(event) {

        $('.hero__menu-container').removeClass('hero__menu-container--show');

        toggleClassHamburger();

        if (this.hash !== "") {

          event.preventDefault();

          var hash = this.hash;

          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
       
            window.location.hash = hash;
          });
        } 
      });
  });

})(jQuery);