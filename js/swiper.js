(function($) {
var swiper = new Swiper('.swiper-container', {
      slidesPerView: 4,
      spaceBetween: 50,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
	      nextEl: '.swiper-button-next',
	      prevEl: '.swiper-button-prev',
	  },
      // Responsive breakpoints
	  	breakpoints: {
	    // when window width is <= 1023px
	    1440: {
	      slidesPerView: 3,
	      spaceBetween: 30
	    },
	    1180: {
	      slidesPerView: 2,
	      spaceBetween: 20
	    },
	    800: {
	      slidesPerView: 1,
	      spaceBetween: 10
	    }
	  }
    });
})(jQuery);