
"use strict";

$(document).ready(function () {
  
  if ($('.card-grid-v1, .card-grid-v2, .card-grid-v3, .card-grid-v4').length) {
    
    if ($('.infinite-scroll-loader').length) {
      var counter = 0; 

      $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() > $(document).height() - 5) {
          var clones = $('.card-grid .columns').html();
          $('.infinite-scroll-loader').addClass('is-active');

          if (counter < 2) {
            setTimeout(function () {
              $('.infinite-scroll-loader').removeClass('is-active');
              $('.card-grid .columns').append(clones);
              counter = counter + 1;
            }, 1200);
          } else {
            setTimeout(function () {
              $('.loader, .loader-end').toggleClass('is-hidden');
            }, 1200);
          }
        }
      });
    }
  }
});