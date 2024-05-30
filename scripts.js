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
        interval: 3000, 
        ride: 'carousel',  
        pause: false 
    });
});

