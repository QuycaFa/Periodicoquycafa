window.addEventListener('load', function () {
	new Glider(document.querySelector(".glider"), {
		slidesToShow: 4,
		slidesToScroll: 2,
		dots: ".dots",
		draggable: null,
		arrows: {
			prev: '.antes',
			next: '.despues'
		},
		responsive: [{
			// screens greater than >= 480px
			breakpoint: 480,
			settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 1,
				slidesToScroll: 1,
				itemWidth: 150,
				duration: 0.25
			}
		}, {
			// screens greater than >= 775px
			breakpoint: 775,
			settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 1,
				itemWidth: 150,
				duration: 0.25
			}
		}, {
			// screens greater than >= 1024px
			breakpoint: 1024,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 2,
				itemWidth: 150,
				duration: 0.25
			}
		}, {
			// screens greater than >= 1600px
			breakpoint: 1600,
			settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 5,
				slidesToScroll: 2,
				itemWidth: 150,
				duration: 0.25
			}
		}]
	});
});