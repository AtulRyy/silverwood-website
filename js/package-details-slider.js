$(document).ready(function() {
    AOS.init();

    var $owl = $('.owl-carousel');

    $owl.children().each(function(index) {
        $(this).attr('data-position', index); // NB: .attr() instead of .data()
    });

    $owl.owlCarousel({
        center: true,
        loop: true,
        items: 5,
        autoplay: true,
        autoplayTimeout: 3000, // 3 seconds
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 5
            }
        }
    });

    $(document).on('click', '.owl-item>div', function() {
        // see https://owlcarousel2.github.io/OwlCarousel2/docs/api-events.html#to-owl-carousel
        var $speed = 300; // in ms
        $owl.trigger('to.owl.carousel', [$(this).data('position'), $speed]);
    });
});