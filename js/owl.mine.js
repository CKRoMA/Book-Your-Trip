$(document).ready(function () {
	$(".owl-carousel").owlCarousel();
});

$(document).ready(function () {
	$('.owl-carousel').owl.owlCarousel({
		center: true,
		loop: true,
		startPosition: 1,
		items: 5,
		responsive: {
			540: {
				items: 3,
				startPosition: 1,
			},
			1200: {
				items: 3,
				margin: 30,
			},
		},
	});
});

$('.slider__btn--prev').click(function () {
	owl.trigger('prev.owl.carousel');
});
const owl = $('.owl-carousel');

owl.owlCarousel({
	center: true,
	loop: true,
	margin: 20,
	startPosition: 1,
	items: 3,
	responsive: {
		321.98: {
			items: 1,
			startPosition: 2,
			margin: 0,
		},
		479.98: {
			items: 2,
			startPosition: 2,
			margin: 0,
		},
		767.98: {
			items: 3,
			startPosition: 1,
			margin: 10,
		},
		991.98: {
			items: 4,
			startPosition: 1,
			margin: 20,
		},
		1320: {
			items: 5,
			margin: 30,
		},
	},
});

$('.slider__btn--prev').click(function () {
	owl.trigger('prev.owl.carousel');
});


$('.slider__btn--next').click(function () {
	owl.trigger('next.owl.carousel');
});

// Nav icon
const navBtn = document.querySelector('.nav__toggle');
const nav = document.querySelector('.nav')
const menuIcon = document.querySelector('.menu-icon');


navBtn.onclick = function () {
	nav.classList.toggle('nav--mobile')
	menuIcon.classList.toggle('menu-icon--active');
	document.body.classList.toggle('no-scroll');
};