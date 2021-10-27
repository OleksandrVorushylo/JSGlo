/* eslint-disable no-unused-vars */
const сarousel = () => {
	// eslint-disable-next-line no-unused-vars
	const servicesCarousel = document.querySelector('.services-carousel'),
		arrowLeft = document.querySelector('.arrow-left'),
		arrowRight = document.querySelector('.arrow-right');

	let offset = 0;
	servicesCarousel.style.cssText = `position: relative;
																		left: 0;
																		transition:all ease 1s;`;

	arrowLeft.addEventListener('click', () => {

		offset -= 400;
		if (offset < 0) {
			offset = 1200;
		}
		servicesCarousel.style.left = -offset + 'px';
	});
	arrowRight.addEventListener('click', () => {

		offset += 400;
		if (offset > 1200) {
			offset = 0;
		}
		servicesCarousel.style.left = -offset + 'px';
	});

};

export default сarousel;
