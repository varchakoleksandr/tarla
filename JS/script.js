// inner slider

let offsetTrust = 0;
const sliderTrust = document.querySelector('.intro__slider-line'); //

document.getElementById("intro__slider-next").addEventListener('click', function(){
    offsetTrust += 600;
    if (offsetTrust > 2400) {offsetTrust = 0};
    sliderTrust.style.left = -offsetTrust + "px";
});

document.getElementById("intro__slider-prew").addEventListener('click', function(){
    offsetTrust -= 600;
    if (offsetTrust < 0) {offsetTrust = 2400};
    sliderTrust.style.left = -offsetTrust + "px";
});



// inner slider adaptive

const images = document.querySelectorAll('.intro__slider .intro__slider-blok .intro__slider-line img');
const sliderLine = document.querySelector('.intro__slider-line');
let count = 0;
let width;
function init(){
	width = document.querySelector('.intro__slider-blok').offsetWidth;
	sliderLine.style.width = width*images.length + "px";
	images.forEach (item => {

		item.style.width = width + "px";
		item.style.height = "auto";
	});
	rollSlider();
};

window.addEventListener("resize", init)
init();

document.getElementById("intro__slider-next").addEventListener('click', function(){
	count++;
	if (count >= images.length) {
		count = 0;
	}
	rollSlider();
});

document.getElementById("intro__slider-prew").addEventListener('click', function(){
	count--;
	if (count < 0) {
		count = images.length-1;
	}
	rollSlider();
});

function rollSlider () {
	sliderLine.style.transform = "translate(-" + count * width + "px)";
};



// modal window

var modal = document.getElementById('myModal');
var btn = document.getElementById('myBtn');
var span = document.getElementsByClassName('close')[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



// JQuery

$('document').ready(function(){


	// burger

    $('#humburger').click(function(){
        $('.menu').toggleClass('menu_open');
    });

	$('.menu li a').click(function () {
		$(this).closest('.menu').find('.active').removeClass('active');
		$(this).addClass('active');
	});

	$('.bakes-play').click(function(){
		$('.bakes-play').toggleClass('active');
	});

	$('.menu__icon').click(function(){
		$('.mobil__menu').toggleClass('mobil__menu-open');
	});

	$('.mobil__menu-close').click(function(){
		$('.mobil__menu').toggleClass('mobil__menu-open');
	});



	// owl-Carousel = 0;

		var owl = $('.owl-carousel');

			$('.playCarousel').on('click',function(){
				owl.trigger('play.owl.autoplay',[3000]);
				$(".playCarousel").css("display", "none");
				$(".stopCarousel").css("display", "block");
			});

			$('.stopCarousel').on('click',function(){
				owl.trigger('stop.owl.autoplay');
				$(".stopCarousel").css("display", "none");
				$(".playCarousel").css("display", "block");
			});

	$('#customers-testimonials').owlCarousel({
		loop: true,
		center: true,
		items: 3,
		margin: 0,
		dots: true,
		smartSpeed: 450,
		responsive: {
			0: {items: 1},
			1200: {items: 3}
		}
		
	});



	// accordion

	$('.accordion__title').on("click", function(){
		document.querySelectorAll(".accordion-item").forEach(item => {
			item.classList.remove("active");
		});
		$(this).parent().addClass("active");
	});



	// SlickSlider

	$(".slickSlider").slick({
		arrows:true,
		dots:true,
		slidesToShow: 3,
			slidesToScroll: 2,
		responsive: [
			{
				breakpoint: 1500,
				settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
			},
			{
				breakpoint: 1000,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1
				}
			}
		]
	});



});


