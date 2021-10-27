const mobileMenu = () => {
	const menuBtn = document.querySelector('.mob-menu-btn'),
		menu = document.querySelector('.mobile-menu'),
		menuClose = document.querySelector('.mobile-menu-close'),
		overlay = document.querySelector('.overlay'),
		link = menu.querySelectorAll('a');

	menuBtn.addEventListener('click', () => {
		menu.classList.add('active-menu');
		overlay.style.zIndex = '100';
		overlay.style.opacity = '1';
	});

	menuClose.addEventListener('click', () => {
		menu.classList.remove('active-menu');
		overlay.style.zIndex = '-100';
		overlay.style.opacity = '0';
	});

	link.forEach(item => {
		item.addEventListener('click', () => {
			menu.classList.remove('active-menu');
			overlay.style.zIndex = '-100';
			overlay.style.opacity = '0';
		});
	});

};

export default mobileMenu;
