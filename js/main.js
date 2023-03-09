
(function($) {
"use strict";
    
    // Portfolio subpage filters
    function portfolio_init() {
        var portfolio_grid = $('#portfolio_grid'),
            portfolio_filter = $('#portfolio_filters');
            
        if (portfolio_grid) {

            portfolio_grid.shuffle({
                speed: 450,
                itemSelector: 'figure'
            });

            $('.site-main-menu').on("click", "a", function (e) {
                portfolio_grid.shuffle('update');
            });


            portfolio_filter.on("click", ".filter", function (e) {
                portfolio_grid.shuffle('update');
                e.preventDefault();
                $('#portfolio_filters .filter').parent().removeClass('active');
                $(this).parent().addClass('active');
                portfolio_grid.shuffle('shuffle', $(this).attr('data-group') );
            });

        }
    }
    // /Portfolio subpage filters

    // Contact form validator
    $(function () {

        $('#contact-form').validator();

        $('#contact-form').on('submit', function (e) {
            if (!e.isDefaultPrevented()) {
                var url = "https://script.google.com/macros/s/AKfycbwPQ6UZ8XvCC6_y-4Od4OJfU1sjd5mpf9maX10SwbU1qGPmZVM/exec";

                $.ajax({
                    type: "POST",
                    url: url,
                    data: $(this).serialize(),
                    success: function (data)
                    {
                        var messageAlert = 'alert-success';
                        var messageText = 'Mensagem enviada com sucesso!';

                        var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                        if (messageAlert && messageText) {
                            $('#contact-form').find('.messages').html(alertBox);
                            if (messageAlert == "alert-success") {
                                $('#contact-form')[0].reset();
                            }
                        }
                    },
                    fail: function (d) {
                        alert(d);
                    }
                });
                return false;
            }
        });
    });
    // /Contact form validator

    // Text Rotator
    $.fn.extend({ 
            rotaterator: function(options) {

                var defaults = {
                    fadeSpeed: 500,
                    pauseSpeed: 100,
                    child:null
                };
                 
                var options = $.extend(defaults, options);
             
                return this.each(function() {
                      var o =options;
                      var obj = $(this);                
                      var items = $(obj.children(), obj);
                      items.each(function() {$(this).hide();});
                      if(!o.child){var next = $(obj).children(':first');
                      }else{var next = o.child;
                      }
                      $(next).fadeIn(o.fadeSpeed, function() {
                            $(next).delay(o.pauseSpeed).fadeOut(o.fadeSpeed, function() {
                                var next = $(this).next();
                                if (next.length === 0){
                                        next = $(obj).children(':first');
                                }
                                $(obj).rotaterator({child : next, fadeSpeed : o.fadeSpeed, pauseSpeed : o.pauseSpeed});
                            });
                        });
                });
            }
        });
    // /Text Rotator

    // Hide Mobile menu
    function mobileMenuHide() {
        var windowWidth = $(window).width();
        if (windowWidth < 1024) {
            $('#site_header').addClass('mobile-menu-hide');
        }
    }
    // /Hide Mobile menu

    // Animate page loader
    $(window).on('load', function() {
        $(".preloader").fadeOut("slow");
    });

    $(document).ready(function(){

        // Initialize Portfolio grid
        var $portfolio_container = $("#portfolio_grid");

        $portfolio_container.imagesLoaded(function () {
            setTimeout(function(){
                portfolio_init(this);
            }, 500);
        });

        // Portfolio hover effect init
        $(' #portfolio_grid > figure > a ').each( function() { $(this).hoverdir(); } );

        // Mobile menu
        $('.menu-toggle').click(function() { 
            $('#site_header').toggleClass('mobile-menu-hide');
        });

        // Text rotator init
        $('#rotate').rotaterator({fadeSpeed:800, pauseSpeed:1900});
 

         // Blog grid init
        setTimeout(function(){
            var $container = $(".blog-masonry");
            $container.masonry();
        }, 500);

        $('.site-main-menu').on("click", "a", function (e) {
            var $container = $(".blog-masonry");
            $container.masonry();
        });

    });

    // Mobile menu hide
    $(window).on('resize', function() {
         mobileMenuHide();
    });

    // Mobile menu hide on main menu item click
    $('.site-main-menu').on("click", "a", function (e) {
        mobileMenuHide();
    });

})(jQuery);
