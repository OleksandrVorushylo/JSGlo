const accordeon = () => {
	const accordeon = document.querySelector('.accordeon'),
		accordeonElem = accordeon.querySelectorAll('.element'),
		accordeonContent = accordeon.querySelectorAll('.element-content'),
		title = accordeon.querySelectorAll('.title');


	const toggleContent = index => {
		for (let i = 0; i < accordeonContent.length; i++) {
			if (index === i) {
				accordeonContent[i].style.display = 'block';
				accordeonContent[i].style.display = `transition:all ease 1s;`;
				accordeonElem[i].classList.add('active');
			} else {
				accordeonContent[i].style.display = 'none';
				accordeonContent[i].style.display = `transition:all ease 1s;`;
				accordeonElem[i].classList.remove('active');
			}
		}
	};

	accordeon.addEventListener('click', event => {
		const target = event.target;
		if (target.classList.contains('title')) {
			title.forEach((item, i) => {
				// eslint-disable-next-line no-undef
				if (item === target) {
					toggleContent(i);
				}
			});
		}
	});
};

export default accordeon;
