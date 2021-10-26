const toUp = () => {
	const upBtn = document.querySelector('.up'),
		servicesSection = document.querySelector('.services-section');

	const servicesSectionTop = servicesSection.getBoundingClientRect().top;
	upBtn.style.cssText = `display: none;
                        `;
	upBtn.style.bottom = '0px';

	window.addEventListener('scroll', () => {

		if (window.scrollY > servicesSectionTop) {
			upBtn.classList.add('up-animation');
		} else {
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
