document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('.nav-menu');
    const menuOverlay = document.querySelector('.menu-overlay');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        menuOverlay.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var myCarousel = document.querySelector('#carouselExampleIndicators');
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 5000, 
        ride: 'carousel',  
        pause: false 
    });
});

document.addEventListener('DOMContentLoaded', function() {
    $('.cocktail-list').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        prevArrow: $('.prev-cocktail'), 
        nextArrow: $('.next-cocktail'), 
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});

