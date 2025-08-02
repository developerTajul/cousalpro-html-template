(function ($) {
  'use strict';
  $(document).ready(function () {
    /*=======================
        navbar toggle active
        =========================*/
    $('#toggle-button').click(function () {
      $('.toggle-menus').addClass('toggle-menu-active');
    });
    $('.toggle-close-icon').click(function () {
      $('.toggle-menus').removeClass('toggle-menu-active');
    });

    /*========================
               Slider
       ============================*/
    $('.hero-slider-active').slick({
      slidesToShow: 1,
      infinite: true,
      autoplay: true,
      draggable: true,
      arrows: true,
      slidesToScroll: 1,
      loop: true,
      speed: 1500,
      prevArrow:
        '<button class="slick-arrow btn-prev"><i class="fa-solid fa-arrow-right"></i></button>',
      nextArrow:
        '<button class="slick-arrow btn-next"><i class="fa-solid fa-arrow-left"></i></button>',
      responsive: [
        {
          breakpoint: 767,
          settings: {
            autoplay: true,
          },
        },
      ],
    });
    /*==========================
        Testimonial Slider
        ============================*/
    // if (!$('.testimonial-active-slider').hasClass('slick-initialized')) {
    // if ($('.testimonial-active-slider').hasClass('slick-initialized')) {
    //   $('.testimonial-active-slider').slick('unslick');
    // }
    $('.testimonial-active-slider').slick({
      slidesToShow: 3,
      centerMode: true,
      centerPadding: '0',
      vertical: true,
      verticalSwiping: true,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            vertical: false,
          },
        },
      ],
    });
    //   $('.testimonial-active-slider').on('setPosition', function () {
    //     $(this).slick('setPosition');
    //   });
    //   $('.testimonial-active-slider').slick('slickGoTo', 0);
    // }

    // $('.testimonial-active-slider')
    //   .off('setPosition')
    //   .on('setPosition', function () {
    //     $(this).slick('setPosition');
    //   });

    $('.testimonial-active-slider-nav').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      autoplay: true,
      autoplaySpeed: 1500,
      asNavFor: '.testimonial-active-slider',
      prevArrow:
        '<button class="slick-arrow btn-prev"><i class="fa-solid fa-caret-right"></i></button>',
      nextArrow:
        '<button class="slick-arrow btn-next"><i class="fa-solid fa-caret-left"></i></button>',
    });

    /*==========================
        Portfolio Slider
        ============================*/
    $('.portfolio-area-active').slick({
      slidesToShow: 3.35,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      speed: 1500,
      draggable: true,
      arrows: false,
      slidesToScroll: 1,
      loop: true,
      dots: false,
      rtl: false,
      
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 460,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });

    /*==========================
        Blog Details Slider
        ============================*/
    $('.blog-page-active-slider').slick({
      centerMode: true,
      centerPadding: '0',
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
    });

    $('.marquee-active').slick({
      slidesToShow: 4,
      speed: 5000,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase: 'linear',
      variableWidth: true,
      infinite: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            vertical: false,
          },
        },
      ],
    });

    /*============================
        Service Details Accordion
        ============================*/
    document.querySelectorAll('.wuc-accordion-wrapper').forEach(accordion => {
      const title = accordion.querySelector('.wuc-accordion-title');
      const rightArrow = title.querySelector('.right-arrow');
      const bottomArrow = title.querySelector('.bottom-arrow');
      const content = accordion.querySelector('.wuc-accordion-pra');

      title.addEventListener('click', () => {
        content.classList.toggle('active');
        rightArrow.classList.toggle('active');
        bottomArrow.classList.toggle('active');
      });
    });

    /*============================
        Magnific Popup
        ============================*/
    $('.video-play').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });

    $('.playBtn').magnificPopup({
        type: 'iframe',

        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: function (url) {
                        // Support both ?v=ID and /embed/ID
                        const watchMatch = url.match(/[?&]v=([^&]+)/);
                        if (watchMatch && watchMatch[1]) return watchMatch[1];

                        const embedMatch = url.match(/embed\/([^\?&]+)/);
                        if (embedMatch && embedMatch[1]) return embedMatch[1];

                        return null;
                    },
                    src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                }
            }
        },
        callbacks: {
            close: function () {
                document.activeElement && document.activeElement.blur();

                setTimeout(() => {
                    $('#main-content, .slick-current .playBtn').first().focus();
                }, 100);
            }
        }
    });


    /*============================
        Counter Js
        ============================*/
    $('.counter').counterUp({
      delay: 10,
      time: 1000,
    });

    /*=======================
        Responsive Dropdown Toggle Active
        =========================*/
    function toggleList(listNumber) {
      var $allLists = $('.hidden-list');
      var $targetList = $('#dropdown-toggle-menu-' + listNumber);

      $allLists.each(function () {
        var $list = $(this);

        if ($list.is($targetList)) {
          if ($list.css('visibility') === 'visible') {
            $list.css({
              visibility: 'hidden',
              opacity: 0,
              height: '0px',
            });
          } else {
            $list.css({
              visibility: 'visible',
              opacity: 1,
              height: $list[0].scrollHeight + 'px',
            });
          }
        } else {
          $list.css({
            visibility: 'hidden',
            opacity: 0,
            height: '0px',
          });
        }
      });
    }
    window.toggleList = toggleList;

    /*
        Window nev scrolled fixed
        ============================*/
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 50) {
        $('.fixed-menu').addClass('scrolled');
      } else {
        $('.fixed-menu').removeClass('scrolled');
      }
    });

    /*
        Window Load Offcanvas
        ============================*/
    $('.canvas-menu').click(function () {
      $('.off-canvas-menu').addClass('canvas-ative');
      $('.off-canvas-menu-overlay').addClass('canvas-overlay-ative');
    });
    $('.close-icon').click(function () {
      $('.off-canvas-menu').removeClass('canvas-ative');
      $('.off-canvas-menu-overlay').removeClass('canvas-overlay-ative');
    });
    /*
        /*
        Window Load Offcanvas
        ============================*/
    $(document).ready(function () {
      $('.search-btn-active').click(function () {
        $('body').css('overflow', 'hidden');
        $('.search-menu-container').addClass('search-menu-active');
        $('.search-menu-overlay').addClass('search-menu-overlay-active');
      });

      $('.close-btn').click(function () {
        $('body').css('overflow', 'auto');
        $('.search-menu-container').removeClass('search-menu-active');
        $('.search-menu-overlay').removeClass('search-menu-overlay-active');
      });

      window.onclick = function (e) {
        if (e.target.matches('.search-menu-overlay')) {
          $('body').css('overflow', 'auto');
          $('.search-menu-container').removeClass('search-menu-active');
          $('.search-menu-overlay').removeClass('search-menu-overlay-active');
        }
      };
    });

    /*
      Window PreLoader
      ============================*/
    
    $('#preloader').fadeOut();
    $('body').delay(200).css({ 'overflow-x': 'hidden' });
    /*
        Scroll To Top Js
        ============================*/
    $(function () {
      $('#scrollTop').hide();
      var position = $(window).scrollTop();
      var timer;
      $(window).on('scroll', function () {
        var scrollTop = $(window).scrollTop();
        clearTimeout(timer);
        if (scrollTop > 100) {
          if (scrollTop > position) {
            $('#scrollTop').fadeOut();
          } else {
            $('#scrollTop').fadeIn();
            timer = window.setTimeout(function () {
              $('#scrollTop').fadeOut();
            }, 3000);
          }
          position = scrollTop;
        } else {
          $('#scrollTop').fadeOut();
        }
      });
      $('.scrollup-btn').click(function () {
        $('html, body').animate(
          {
            scrollTop: 0,
          },
          'slow'
        );
        return false;
      });
    });

    /*Blog Hover Card ============================*/
    function handleHoverEffect() {
      if ($(window).width() > 991) {
        // Desktop behavior: Only one visible at a time
        $(".blog-area-card-wrapper p").hide(); // Hide all
        $(".blog-area-card").eq(0).find("p").show(); // Show default

        $(".blog-area-card").off("mouseenter").on("mouseenter", function () {
          $(".blog-area-card-wrapper p").stop().slideUp(300);
          $(this).find("p").stop().slideDown(300);
        });
      } else {
        // Mobile behavior: show all <p> tags
        $(".blog-area-card-wrapper p").show();
        $(".blog-area-card").off("mouseenter"); // Remove hover effects on mobile
      }
    }
      handleHoverEffect();

      $(window).resize(function () {
        handleHoverEffect();
      });
 
    /*pricing Hover Card
        ============================*/
    $('#cards-1, #cards-3').hover(
      function () {
        $('#cards-2 .visibles-card').css({
          visibility: 'hidden',
          opacity: '0',
          height: '0',
          transform: 'scaleY(0)',
        });
        $('#cards-2 .card-wrapper-visible').addClass('hidden-before');
      },
      function () {
        $('#cards-2 .visibles-card').css({
          visibility: 'visible',
          opacity: '1',
          height: 'auto',
          transform: 'scaleY(1)',
          transition: 'all 0.4s ease 0s',
        });
        $('#cards-2 .card-wrapper-visible').removeClass('hidden-before');
      }
    );

    /*Js-Tilt Animation
        ============================*/
    $('.tilt-zoom').tilt({
      scale: 1.1,
      perspective: 1500,
    });

    /*Jquery Tilt Js
       ============================*/
    $('.tilt-animate').tilt({
      maxTilt: 12,
      perspective: 1000,
    });

    /*
        Window Preload
        ============================*/
    $(window).on('load', function () {
      /*
            Preeloader
            ============================*/
      $('#preloader').fadeOut();
      $('#preloader-status').delay(200).fadeOut('slow');
      $('body').delay(200).css({
        'overflow-x': 'hidden',
      });
    });

    //blog post gallery
      $('.post-gallery').slick({
        slidesToShow: 1,
        infinite: true,
        autoplay: true,
        draggable: true,
        arrows: true,
        slidesToScroll: 1,
        loop: true,
        dots: false,
        speed: 300,
        rtl: false,
        prevArrow:
          "<button type='button' class='post-gallery-btn prev-btn'><i class='fa fa-arrow-left'></i></button>",
        nextArrow:
          "<button type='button' class='post-gallery-btn next-btn'><i class='fa fa-arrow-right'></i></button>",
      });
      
      // nice select 
      $('select').niceSelect();

      const sr = ScrollReveal({
        origin: 'top',
        duration : 2000,
        distance: '60px',
        delay: 0,
        opacity: 0              
      });

      sr.reveal('.about-card-area, .blog-area-card, .services-area-card, .pricing-area-card, .wcu-area-info-card-wrapper, .wcu-area-info-card-wrapper, .team-area-member-info-wrapper, .team-area-member-info-3, .team-wcu-info-title, .contact-loction, .wcu-area-info-card-wrapper, .our-work-step-card-wrapper, .wuc-accordion-wrapper, .single-post-item, .projects-wrapper ',{
          origin: 'bottom',
          interval: 250,
          
        })

    // "Empty" <p> Tags (including &nbsp;) for wp

     $('p').each(function () {
      const html = $(this).html();

      // Normalize whitespace and non-breaking space
      const cleaned = html
        .replace(/&nbsp;/gi, '') // remove non-breaking spaces
        .replace(/\s/g, '')      // remove regular spaces, tabs, newlines

      if (cleaned === '') {
        $(this).remove(); // or use .hide() if needed
      }
    });


  });
})(jQuery);
