const validation = () => {
	const forms = document.querySelectorAll('form'),
		inputs = document.querySelectorAll('input'),
		btn = document.querySelectorAll('.feedback');

	forms.forEach(item => {
		const errorPhone = document.createElement('div');
		errorPhone.className = ('error-phone');
		errorPhone.textContent = `Номер должен быть в формате +7(XXX)XXX-XX-XX
                              Количество символов: 10`;
		errorPhone.style.fontSize = '10px';
		errorPhone.style.color = 'red';

		item.addEventListener('input', event => {
			const input = event.target;
			// eslint-disable-next-line max-len
			if (input.id === 'fio') {
				input.value = input.value.replace(/[^а-яё -,.]/ig, '');
			}
			if (input.id === 'tel') {
				input.value = input.value.replace(/^\+?[0378]([-()]*\d){9,11}$/ig, '');
				item.addEventListener('input', () => {
					if (input.value.length < 18) {
						btn[0].disabled = true;
						btn[0].style.background = 'gray';
						input.insertAdjacentElement('afterend', errorPhone);
						errorPhone.style.display = 'block';
					}
					if (input.value.length >= 18) {
						btn[0].disabled = false;
						btn[0].style.background = '#e9bb26';
						errorPhone.style.display = 'none';
					}
				});

			}

		});
	});
	inputs.forEach(item => {
		item.addEventListener('blur', event => {
			const input = event.target;
			if (input.id === 'fio') {
				input.value = input.value.replace(/[^а-яё -]/ig, '');
				input.value = input.value.trim();
				input.value = input.value.replace(/\s+/ig, ' ');

				if (input.value.length < 2) {
					btn[0].disabled = true;
					btn[0].style.background = 'gray';
				}
				if (input.value.length >= 2) {
					btn[0].disabled = false;
					btn[0].style.background = '#e9bb26';
				}

				if (input.value.match(/^-+|-+$/)) {
					input.value = input.value.replace(/^-+|-+$/g, '');
					if (input.value.match(/^\s+|\s+$/)) {
						input.value = input.value.replace(/^\s+|\s+$/g, '');
					}
				} else {
					input.value = input.value.replace(/-+/g, '-');
				}
				input.value = input.value.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ');

			}
			if (input.id === 'tel') {
				input.value = input.value.replace(/^\+?[0378]([-()]*\d){9,11}$/ig, '');
				input.value = input.value.trim();
				// input.value = input.value.replace(/\s+/ig, ' ');
			}
		});

	});
};

export default validation;
