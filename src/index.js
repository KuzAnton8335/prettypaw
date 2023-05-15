import './index.html';
import './page.html';
//new modules
import 'swiper/scss';
import 'swiper/scss/pagination';
import './index.scss';
import { sliderInit } from './modules/sliders';
import { videoBackroundInit } from './modules/video-bg';
import { menuControl } from './modules/menuControl';
import { locationHover } from './modules/locationHover';
import { initScrollTopButton } from './modules/scrollTopButton';

// use modules
videoBackroundInit();
menuControl();
locationHover();
initScrollTopButton('arrow-top', {
	hover: false
});

sliderInit('.about__slider', {
	pagination: {
		el: '.about__slider-pagination',
		// bulletClass:'about__bullet',
		// bulletActiveClass:'about__bullet-active'
	}
});

const careerImageItems = document.querySelectorAll('.career__image-item');

careerImageItems.forEach((item, i) => {
	item.classList.add(`career__image-item_${i % 2 ? 'even' : 'odd'}`)
})

sliderInit('.career__slider', {
	pagination: {
		el: '.career__slider-pagination',
		// bulletClass:'about__bullet',
		// bulletActiveClass:'about__bullet-active'
	},
	// Responsive breakpoints
	breakpoints: {
		// when window width is >= 768px
		576: {
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



