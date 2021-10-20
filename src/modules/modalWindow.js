/* eslint-disable prefer-const */
const modalWindow = () => {
	const modal = document.querySelector('.modal-callback'),
		modalOverlay = document.querySelector('.modal-overlay'),
		modalBtn = document.querySelectorAll('.fancyboxModal');

	modalBtn.forEach(elem => {
		elem.addEventListener('click', () => {
			modal.style.display = 'block';
			modalOverlay.style.display = 'block';
		});
	});

	modal.addEventListener('click', event => {
		let target = event.target;

		if (target.closest('.modal-close')) {
			modal.style.display = 'none';
			modalOverlay.style.display = 'none';
		}

	});

	modalOverlay.addEventListener('click', () => {
		modal.style.display = 'none';
		modalOverlay.style.display = 'none';
	});
};



export default modalWindow;
