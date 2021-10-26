/* eslint-disable no-use-before-define */
/* eslint-disable no-mixed-spaces-and-tabs */
const sendForm = () => {
	const errorMessage = 'Что то пошло не так',
		loadMessage = 'Загрузка...',
		succesMessage = 'Спасибо! Мы скоро с вами свяжемся!';

	const forms = document.querySelectorAll('form'),
		btn = document.querySelector('.feedback');

	const statusMessage = document.createElement('div');
	statusMessage.style.cssText = `font-size: 2rem;
                                  color: #333333;`;

	forms.forEach(form => {

		form.addEventListener('submit', event => {
			event.preventDefault();
			form.appendChild(statusMessage);

			statusMessage.textContent = loadMessage;
			btn.classList.add('circle');
			const formData = new FormData(form);
			const body = {};

			formData.forEach((val, key) => {
				body[key] = val;
			});

			postData(body)
				.then(response => {
					if (response.status !== 200) {
						throw new Error('status network not 200.');
					}
					statusMessage.textContent = succesMessage;

					setTimeout(() => {
						statusMessage.textContent = '';
						btn.classList.remove('circle');
						btn.value = 'Отправить';
					}, 3000);
				})
				.catch(error => {
					statusMessage.textContent = errorMessage;
					console.error(error);
					setTimeout(() => {
						statusMessage.textContent = '';
						btn.classList.remove('circle');
						btn.value = 'Отправить';
					}, 3000);
				});

			[...form].forEach(input => {
				input.value = '';
			});
		});

		const postData = body => fetch('./server.php', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
				  },
			body: JSON.stringify(body)
		});
	});

};

export default sendForm;
