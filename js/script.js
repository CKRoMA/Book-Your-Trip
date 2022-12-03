const testimonialsSwiper = document.querySelector('.swiper-testimonials');


if (testimonialsSwiper) {
	const swiper = new Swiper('.swiper-testimonials', {
		// Default parameters
		autoHeight: true,
		loop: true,
		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
	});
}



