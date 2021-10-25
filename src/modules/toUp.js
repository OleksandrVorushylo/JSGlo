const toUp = () => {
	const upBtn = document.querySelector('.up'),
		servicesSection = document.querySelector('.services-section');
	const count = 0;

	const servicesSectionTop = servicesSection.getBoundingClientRect().top;
	upBtn.style.cssText = `display: none;
                        `;
	upBtn.style.bottom = '0px';

	// function animationUp() {
	// 	count += 1;
	// 	upBtn.style.bottom = count + 'px';
	// 	if (count <= 50) setTimeout(animationUp, 8);
	// 	console.log('count: ', count);
	// }
	// animationUp();
	window.addEventListener('scroll', () => {

		if (window.scrollY > servicesSectionTop) {
			// upBtn.style.cssText = `display: block;
			//                       transition: 2s;`;
			upBtn.classList.add('up-animation');
		} else {
			// upBtn.style.cssText = `display: none;`;
			upBtn.classList.remove('up-animation');
		}
	});

	upBtn.addEventListener('click', () => {
		window.scrollBy({
			top: -window.scrollY,
			behavior: 'smooth'
		});

	});
};

export default toUp;
