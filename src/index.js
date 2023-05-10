import './index.html';
//new modules
import 'swiper/scss';
import 'swiper/scss/pagination';
import './index.scss';
import { sliderInit } from './modules/sliders';

// use modules

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
	}
});

const videoBG = document.querySelector('.video-bg');

videoBG.innerHTML = `
<source src = "video/video.webp" type="video/webm">
<source src = "video/video.mp4" type="video/mp4">
`;