
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        panel.classList.toggle("active");
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 86 + "px";
        }
    });
}


var mySwiper = new Swiper('#sl_1', {
    // Optional parameters
    loop: true,
    slidesPerView: 2,
    centeredSlides: true,
    effect: 'coverflow',
    coverflow: {
        rotate: 0,
        stretch: 0,
        depth: 300,
        modifier: 1,
    },
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    breakpoints: {
        768: {
            slidesPerView: 1.3,
        },
    }
});

var swiper = new Swiper("#sl_2", {
    loop: false,
    slidesPerView: 4,
    spaceBetween: 20,
    freeMode: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    breakpoints: {
        1280: {
          //slidesPerView: 2.5,
          spaceBetween: 5,
        },
        600: {
            slidesPerView: 1.5,
            spaceBetween: 10,
        },
    }
});

Fancybox.bind('[data-fancybox]', {
    compact: false,
    idle: false,
    animated: false,
    showClass: false,
    hideClass: false,
    dragToClose: false,
    contentClick: false,
    Images: {
        // Disable animation from/to thumbnail on start/close
        zoom: false,
    },
    Toolbar: {
        display: {
            left: [],
            middle: ['infobar'],
            right: ['close'],
        },
    },
    Thumbs: {
        type: 'classic',
    },
}); 
