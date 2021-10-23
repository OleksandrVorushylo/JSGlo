const topSlider = () => {
	const sliderItem = document.querySelectorAll('.top-slider .item'),
		sliderTable = document.querySelectorAll('.top-slider .item .table');

	let currentSlide = 0;

	sliderTable[0].style.opacity = '1';
	sliderTable[0].style.visibility = 'visible';

	const prevSlide = (elem, elem2, index) => {
		elem[index].style.display = 'none';
		elem2[index].style.opacity = '0';
		elem2[index].style.visibility = 'hidden';
	};

	const nextSlide = (elem, elem2, index) => {
		elem[index].style.display = 'block';
		elem2[index].style.opacity = '1';
		elem2[index].style.visibility = 'visible';
	};

	const autoPlaySlide = () => {
		prevSlide(sliderItem, sliderTable, currentSlide);
		currentSlide++;
		if (currentSlide >= sliderItem.length) {
			currentSlide = 0;
		}
		nextSlide(sliderItem, sliderTable, currentSlide);
	};

	const startSlide = time => {
		setInterval(autoPlaySlide, time);
	};

	startSlide(3000);

};


export default topSlider;
