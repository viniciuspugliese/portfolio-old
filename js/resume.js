(function($) {
    "use strict"; // Start of use strict

    // Initialize tooltips
    $('[data-toggle="tooltip"]').tooltip();

    // Smooth scrolling using jQuery easing
    $(document).on('click', 'a.js-scroll-trigger[href*="#"]:not([href="#"])', function(event) {
        event.preventDefault();

        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);

            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top)
                }, 1000, "easeInOutExpo");
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(document).on('click', '.js-scroll-trigger', function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#side-nav'
    });

    // Open fancybox
    $(document).on('click', '[data-open="fancybox"]', function (e) {
        e.preventDefault();
        $.fancybox.open('<div class="card">' + $(this).html() + '<div class="card-body">' + $(this).parent().find('.card-body').html() + '</div></div>');
    });

    // Close floating box
    $(document).on('click', '[data-close="floating-box"]', function(event) {
        event.preventDefault();
        $('[data-close-reference="floating-box"]').removeClass('floating-box--show');
    });

    // Show floating box
    setTimeout(function() {
        $('[data-close-reference="floating-box"]').addClass('floating-box--show');
    }, 15000);

})(jQuery); // End of use strict
