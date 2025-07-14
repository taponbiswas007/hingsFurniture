$(document).ready(function () {
    $(".menubarbtn").click(function () {
        $(".navlink_area").toggleClass('active');
    })
})

$(document).ready(function () {
    $(window).scroll(function () {
        // Get the header element
        var header = $(".header");
        // Get the scroll position
        var scroll = $(window).scrollTop();

        // Add or remove sticky class based on scroll position
        if (scroll >= 100) { // You can adjust this value (100px) as needed
            header.addClass("sticky");
        } else {
            header.removeClass("sticky");
        }
    });
});
$(document).ready(function () {
    // Show the button when scrolled down 100px
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.backToTopBtn').fadeIn();
        } else {
            $('.backToTopBtn').fadeOut();
        }
    });

    // Scroll to top when button is clicked
    $('.backToTopBtn').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500, 'linear'); // smooth and same speed
        return false;
    });


});
$(document).ready(function () {
    // Hide preloader after 2 seconds
    setTimeout(function () {
        $('.preloader').fadeOut('slow');
    }, 2000);
});

$(document).ready(function () {
    // All anchor links inside .termsconditionlistbutton
    $(".termsconditionlistbutton a").on("click", function (e) {
        e.preventDefault();

        // Remove white space from the id selector (some of your IDs have trailing spaces)
        let targetId = $(this).attr("href").trim(); // like "#introduction"

        // Check if the target element exists
        let target = $(targetId);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 160 // Adjust offset as needed
            }, 800); // 800ms animation
        }
    });
});