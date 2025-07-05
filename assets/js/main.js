$(document).ready(function () {
    $(".menubarbtn").click(function () {
        $(".navlink_area").slideToggle();
    })
})

$(document).ready(function() {
    $(window).scroll(function() {
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