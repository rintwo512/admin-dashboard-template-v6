
"use strict";

function disableSearchWhentListEmpty() {
  $('.is-slider .tabs li').on('click', function () {
    setTimeout(function () {
      if ($('.page-content.tabs-wrapper .tab-content.is-active .list-view-item').length === 0) {
        $('.list-view-toolbar input').addClass('is-disabled');
      } else {
        $('.list-view-toolbar input').removeClass('is-disabled');
      }
    }, 400);
  });
}

$(document).ready(function () {
  
  if ($('.list-view-v1').length) {
    
    if ($('.infinite-scroll-loader').length) {
      var counter = 0; //Infinite Scroll

      $(window).on('scroll', function () {
        if ($(window).scrollTop() >= $('body').offset().top + $('body').outerHeight() - window.innerHeight) {
          var clones = $('.list-view .list-view-inner').html();
          $('.infinite-scroll-loader').addClass('is-active');

          if (counter < 2) {
            setTimeout(function () {
              $('.infinite-scroll-loader').removeClass('is-active');
              $('.list-view .list-view-inner').append(clones);
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


  if ($('.list-view-v2').length) {
    
    disableSearchWhentListEmpty();

    if ($('.infinite-scroll-loader').length) {
      var counter = 0; //Infinite Scroll

      $(window).on('scroll', function () {
        if ($(window).scrollTop() >= $('body').offset().top + $('body').outerHeight() - window.innerHeight) {
          var clones = $('.list-view .tab-content.is-active .list-view-inner').html();
          $('.infinite-scroll-loader').addClass('is-active');

          if (counter < 2) {
            setTimeout(function () {
              $('.infinite-scroll-loader').removeClass('is-active');
              $('.list-view .tab-content.is-active .list-view-inner').append(clones);
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


  if ($('.list-view-v3').length) {
    
    disableSearchWhentListEmpty();

    if ($('.infinite-scroll-loader').length) {
      var counter = 0; //Infinite Scroll

      $(window).on('scroll', function () {
        if ($(window).scrollTop() >= $('body').offset().top + $('body').outerHeight() - window.innerHeight) {
          var clones = $('.list-view .tab-content.is-active .list-view-inner').html();
          $('.infinite-scroll-loader').addClass('is-active');

          if (counter < 2) {
            setTimeout(function () {
              $('.infinite-scroll-loader').removeClass('is-active');
              $('.list-view .tab-content.is-active .list-view-inner').append(clones);
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


  if ($('.list-view-v4').length) {
    
    disableSearchWhentListEmpty();

    if ($('.infinite-scroll-loader').length) {
      var counter = 0; //Infinite Scroll

      $(window).on('scroll', function () {
        if ($(window).scrollTop() >= $('body').offset().top + $('body').outerHeight() - window.innerHeight) {
          var clones = $('.list-view .tab-content.is-active .list-view-inner').html();
          $('.infinite-scroll-loader').addClass('is-active');

          if (counter < 2) {
            setTimeout(function () {
              $('.infinite-scroll-loader').removeClass('is-active');
              $('.list-view .tab-content.is-active .list-view-inner').append(clones);
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