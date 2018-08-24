(function($) {
    "use strict"; // Start of use strict

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

})(jQuery); // End of use strict
