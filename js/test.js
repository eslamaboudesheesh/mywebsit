$(function() {
   clientStuff();
   workslide();
   workload();
   scrollsmoth(1000);
});
/* slide function   in tool section */
function clientStuff() {
   $('.clients-box .client-slide').first().addClass('active-client');
   $('.slide-right-next , .slide-left-prev ').click(function() {
      var $this = $(this),
         currentActiveClient = $('.clients-box').find('.active-client'),
         position = $('.clients-box').children().index(
            currentActiveClient),
         clientNum = $('.client-slide').length;
      if ($this.hasClass('slide-right-next ')) {
         if (position < clientNum - 1) {
            $('.active-client').removeClass('active-client').next().addClass(
               'active-client');
         } else {
            $('.client-slide').removeClass('active-client').first().addClass(
               'active-client');
         }
      } else {
         if (position === 0) {
            $('.client-slide').removeClass('active-client').last().addClass(
               'active-client');
         } else {
            $('.active-client').removeClass('active-client').prev().addClass(
               'active-client');
         }
      }
   });
}
/* slide  gallary fade */
function workslide() {
   $('figure').click(function() {
      $('.work-slider').css('left', '-100%');
      $('.photo-container').show();
      $('figure').css('height', '3px');
   });
   $('.work-return').click(function() {
      $('.work-slider').css('left', '0%');
      $('.photo-container').hide(800);
      $('figure').css('height', 'auto');
   });
}
/* slide gallary ajax page comming */
function workload() {
   $('figure').on('click', function() {
      // body...
      var $this = $(this),
         newTitle = $this.find('figcaption').text(),
         spinner = '<div class="loader">Loading...</div>',
         newHtml = 'slides/proj-1.html';
      $('.project-load').html(spinner).load(newHtml);
      $(' .project-title').text(newTitle);
   });
}
$(document).ready(function() {
   $(".toggle").on("click", function() {
      $(this).toggleClass("open");
      $(".toggle").parent().toggleClass('active');
   });
   $(window).on('scroll', function() {
      var wScroll = $(this).scrollTop();
      var sectionnavcontainer = 1;
      var offsetElement = $('.header-section').offset().top + $(
         '.header-section').height() - sectionnavcontainer;
      if (Math.round(wScroll) > offsetElement) {
         $('.navbar').addClass('scrolled');
      } else {
         $('.navbar').removeClass('scrolled');
      }
   });
   //slick slide  conttent  effect 
   $('.header-section-slide').on('afterChange', function(event, slick,
      currentSlide) {
      $('.slick-active .slide-content').removeClass('hidden');
      $('.slick-active .slide-content').addClass('animation');
   });
   $('.header-section-slide').on('beforeChange', function(event, slick,
      currentSlide) {
      $('.active-slide-animat').removeClass('active-slide-animat ')
         .addClass('hidden');
      $('.slick-active .slide-content').removeClass('animation');
      $('.slick-active .slide-content').addClass('hidden');
   });
   // gallary 
   $(window).scroll(function() {
      var wScroll = $(this).scrollTop();
      if (wScroll > $('.stone-pics').offset().top - ($(window).height() /
            1.2)) {
         $('.stone-pics figure').each(function(i) {
            setTimeout(function() {
               $('.stone-pics figure').eq(i).addClass(
                  'is-showing');
            }, (700 * (Math.exp(i * 0.14))) - 700);
         });
      }
   });
});
// smoth scroll function 
function scrollsmoth(duration) {
   $('a[href^="#"]').on('click', function(event) {
      var target = $($(this).attr('href'));
      if (target.length) {
         event.preventDefault();
         $('html,body').animate({
            scrollTop: target.offset().top - 50
         }, duration);
      }
   });
}
$(document).ready(function() {
   $(window).on('scroll', function() {
      var wScroll = $(this).scrollTop();
      var elems = $('.scrollspy');
      elems.each(function(index) {
         var elemTop = $(this).offset().top - 150;
         var elemBottom = elemTop + $(this).height() + 150;
         if (wScroll >= elemTop && wScroll <= elemBottom) {
            var id = $(this).attr('id');
            var navElem = $('a[href="#' + id + '"]');
            navElem.addClass('active-tab').css({
               "transition": "0.3s ease"
            }).siblings().removeClass('active-tab').css({
               "transition": "0.3s ease"
            });
         }
      });
   });
});