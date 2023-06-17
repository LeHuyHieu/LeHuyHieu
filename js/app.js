$(document).ready(function () {
    $(".icon-navbar").click(function () {
        $(".navbar").toggleClass("w-h-50");
        $(".bg-dark_menu").toggleClass("d-block");
    });
    $(".bg-dark_menu").click(function () {
        $(".navbar").removeClass("w-h-50");
        $(".bg-dark_menu").removeClass("d-block");
    });
});

$(window).scroll(function () {
    // Get number of pixels of scroll.
    var pixel = $(window).scrollTop();
    console.log(pixel);
    // When the scroll exceeds 300px, give the [fixed-menu] class.
    if (pixel >= 150) {
        $('.navbar').addClass('fixed-menu');
        $('.back-top').addClass('d-flex');
    } else {
        $('.navbar').removeClass('fixed-menu');
        $('.back-top').removeClass('d-flex');
    }
});

let id_container = document.querySelectorAll('.section');
let navLinks = document.querySelectorAll('header nav ul li a');
window.onscroll = () => {
    id_container.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('lightblue');
                document.querySelector('header nav ul li a[href*=' + id + ']').classList.add('lightblue');
            });
        };
    });
};

$('.responsive').slick({
    dots: true,
    infinite: false,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});
ScrollReveal().reveal('.container__home, .heading, .about__detail, .top', { origin: 'top' });
ScrollReveal().reveal('.img-transform, .responsive, .skill, .form', { origin: 'bottom' });
ScrollReveal().reveal('h1, h2, .left', { origin: 'left' });
ScrollReveal().reveal('.container__home--detail, .about__detail--text, .right', { origin: 'right' });