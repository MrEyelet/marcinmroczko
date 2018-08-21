(function($) {

  $(document).ready(function(){

    var deviceAgent = navigator.userAgent.toLowerCase();

    var agentID = deviceAgent.match(/(ipad)/);

    if (agentID || $(window).width() <= 980){

      $('video').remove();
      $('.hero__top-bar').after('<div class="hero-bg"></div>');
      $('.hero__layer-outer, .hero__layer-inner').addClass('bg-transparent');
      $('#button-js').hide();
      $('.hamburger__container').addClass('visible');
      $('main, footer').show();
     
    }

  });

})(jQuery);
