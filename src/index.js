import './index.html';
//new modules
import 'swiper/scss';
import 'swiper/scss/pagination';
import './index.scss';
import { sliderInit } from './modules/sliders';
import { videoBackroundInit } from './modules/video-bg';
import { menuControl } from './modules/menuControl';

// use modules
videoBackroundInit();
menuControl();


sliderInit('.about__slider', {
	pagination: {
		el: '.about__slider-pagination',
		// bulletClass:'about__bullet',
		// bulletActiveClass:'about__bullet-active'
	}
});

sliderInit('.career__slider', {
	pagination: {
		el: '.career__slider-pagination',
		// bulletClass:'about__bullet',
		// bulletActiveClass:'about__bullet-active'
	},
	// Responsive breakpoints
	breakpoints: {
		// when window width is >= 768px
		768: {
			slidesPerView: 'auto',
			spaceBetween: 20,
			pagination: false
		},
		// when window width is >=1024px
		1024: {
			slidesPerView: 'auto',
			spaceBetween: 26,
			pagination: false
		},
		// when window width is >= 1240px
		1240: {
			slidesPerView: 'auto',
			spaceBetween: 30,
			pagination: false
		}
	}
});



