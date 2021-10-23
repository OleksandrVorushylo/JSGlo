/* eslint-disable no-unused-vars */
const сarousel = () => {
	// eslint-disable-next-line no-unused-vars
	const servicesCarousel = document.querySelector('.services-carousel'),
		servicesItem = document.querySelectorAll('.services-carousel .col-sm-6'),
		servicesItems = document.querySelectorAll('.services-carousel .col-sm-6'),
		arrowLeft = document.querySelector('.arrow-left'),
		arrowRight = document.querySelector('.arrow-right');
	console.log('servicesItem: ', servicesItem);

	let offset = 0;
	servicesCarousel.style.cssText = `position: relative;
																		left: 0;
																		transition:all ease 1s;`;

	// const slideShow = 1,
	// 	slideScroll = 1,
	// 	count = servicesItems.length,
	// 	width = servicesItem.clientWidth / slideShow,
	// 	move = slideScroll * width;
	// console.log('count: ', count);

	// let currentSlide = 0;

	// const prevSlide = (elem, index) => {
	// 	// elem[index].style.display = 'flex';
	// 	elem[index].style.order = '0';
	// };

	// const nextSlide = (elem, index) => {
	// 	// elem[index].style.display = 'none';
	// 	elem[index].style.order = '6';
	// };

	// const playSlide = () => {
	// 	prevSlide(servicesItems, currentSlide, 'hidden');
	// 	currentSlide++;
	// 	if (currentSlide >= servicesItems.length) {
	// 		currentSlide = 0;
	// 	}
	// 	nextSlide(servicesItems, currentSlide, 'hidden');
	// };

	// if (currentSlide >= servicesItems.length) {
	// 	currentSlide = 0;
	// }
	// if (currentSlide < 0) {
	// 	currentSlide = servicesItems.length - 1;
	// }


	arrowLeft.addEventListener('click', () => {
		// currentSlide--;
		// prevSlide(servicesItems, currentSlide);

		offset -= 400;
		if (offset < 0) {
			offset = 1200;
		}
		servicesCarousel.style.left = -offset + 'px';
	});
	arrowRight.addEventListener('click', () => {
		// // const target = event.target;
		// currentSlide++;
		// nextSlide(servicesItems, currentSlide);

		offset += 400;
		if (offset > 1200) {
			offset = 0;
		}
		servicesCarousel.style.left = -offset + 'px';
	});





	// arrowLeft.onclick = () => move(1);  // кнопка «влево»
	// arrowRight.onclick = () => move(0); // кнопка «вправо»

	// const move

	// servicesItems[3].style.display = 'none';
	// servicesItems[4].style.display = 'none';
	// servicesItems[5].style.display = 'none';


};

export default сarousel;
