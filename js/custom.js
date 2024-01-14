
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
function modal() {
	var offset = window.innerWidth - document.body.offsetWidth ;
	$('body').addClass('oh').css({'padding-right': offset, 'transition': 'all 0.5s ease-in-out;'});
	$('.modal-bg').addClass('vis');
	$('.modal-wrap').addClass('vis');
	$('.modal[data-attr="modal_form"]').addClass('vis');
	$('.scrollTop.vis').css({'right': 30 + offset + 'px'});
	//console.log(offset);
}
$('.modal_btn').click(modal);

$('.modal').on('click', function (e) {
	//e.stopPropagation();
});
$(document).on('click','.modal__close, .modal-wrap',function(){
	var offset = window.innerWidth - document.body.offsetWidth;
	$('body').removeClass('oh').css({'padding-right': offset, 'transition': 'all 0.5s ease-in-out;'});
	$('.modal-bg').removeClass('vis');
	$('.modal-wrap').removeClass('vis');
	$('.modal').removeClass('vis');
	$('.scrollTop.vis').css({'right': 30 + offset + 'px'});
	$('.modal[data-attr="modal_review"] .modal__body .review__item-inner').remove();
	
});
$(document).on('click','.modal',function(e){
	e.stopPropagation();
	
});
$(document).keydown(function(event) { 
	if (event.keyCode == 27) { 
		var offset = window.innerWidth - document.body.offsetWidth;
		$('body').removeClass('oh').css({'padding-right': offset, 'transition': 'all 0.5s ease-in-out;'});
		$('.modal-bg').removeClass('vis');
		$('.modal-wrap').removeClass('vis');
		$('.modal').removeClass('vis');
		$('.scrollTop.vis').css({'right': 30 + offset + 'px'});
		$('.modal[data-attr="modal_review"] .modal__body .review__item-inner').remove();
	}
});

$(document).on('click','.review__item .review__text',function(){
	var qw = $(this).parents('.review__item-inner').clone();
	$('.modal[data-attr="modal_review"] .modal__body').prepend(qw);
	var offset = window.innerWidth - document.body.offsetWidth ;
	$('body').addClass('oh').css({'padding-right': offset, 'transition': 'all 0.5s ease-in-out;'});
	$('.modal-bg').addClass('vis');
	$('.modal-wrap').addClass('vis');
	$('.modal[data-attr="modal_review"]').addClass('vis');
	$('.scrollTop.vis').css({'right': 30 + offset + 'px'});
});