"use strict"

document.addEventListener('DomContentLoaded', getForms());

function getForms() {

	const forms = document.querySelectorAll('form');
	if (forms.length) sendForms(forms);
}

function sendForms(forms) {

	forms.forEach(form => {
		checkFormImage(form);

		form.addEventListener('submit', formSend);
		async function formSend(e) {

			e.preventDefault();
			let error = formValidate(form);
			console.log(error);

			let formData = new FormData(form);
			formData.append('image', formImage.files[0]);

			if (error === 0) {
				form.classList.add('_sending');
				//---------------------------------------------------send
				/*
				let response = await fetch('sendmail.php', {
					method: 'POST',
					body: formData
				});
				if (response.ok) {
					console.log('response ok');

					let result = await response.json();
					alert(result.message);
					formPreview.innerHTML = '';
					form.reset();
					form.classList.remove('_sending');
				} else {
					alert('Server error'); //-------------------------------------------alert
					form.classList.remove('_sending');
				}
				*/
				setTimeout(() => {
					form.classList.remove('_sending');
				}, 2000);
			} else {
				//----------------------------------------------------------something
			}
		}
	});
}

function formValidate(form) {
	let error = 0;
	//let formRequired = document.querySelectorAll('[required]'); // or by className to exclude default browser form checking
	let formRequired = form.querySelectorAll('._required');


	for (let i = 0; i < formRequired.length; i++) {
		const input = formRequired[i];

		formRemoveError(input);
		if (input.type === "email") {
			if (emailTest(input)) {
				formAddError(input);
				error++;
			}
		} else if (input.type === "checkbox" && input.checked === false) {
			formAddError(input);
			error++;
		} else if (input.value === '') {
			formAddError(input);
			error++;
		}
	}

	return error;

	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}

	//---------------------------------------------------------test email
	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}

}

function checkFormImage(form) {

	//---------------------------------------------------------------input file
	const formImage = form.querySelector('#formImage');
	const formPreview = form.querySelector('#formPreview');
	//---------------------------------------------------------------input change listener

	if (formImage) {
		//----------------------------------------------------add div for error message
		const errorMessage = document.createElement('div')
		errorMessage.classList.add('file__error');
		formImage.parentElement.append(errorMessage);



		formImage.addEventListener('change', () => {
			uploadFile(formImage.files[0]);
		});

		function uploadFile(file) {

			errorMessage.innerHTML = '';
			//check file type
			if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
				// some alert
				errorMessage.innerHTML = 'Only jpeg or png or gif';
				formImage.value = '';
				return;
			}

			//check image size (<2mb)
			if (file.size > 2 * 1024 * 1024) {
				//some alert
				errorMessage.innerHTML = 'image file must be smaller then 2mb';
				formImage.value = '';
				return;
			}

			//--------------------------------preview
			var reader = new FileReader();
			reader.onload = function (e) {
				if (formPreview) {
					formPreview.innerHTML = `<img src="${e.target.result}" alt = "Photo">`;
				} else errorMessage.innerText = 'image uploaded';
			};
			reader.onerror = function (e) {
				errorMessage.innerHTML = 'error';
			};
			reader.readAsDataURL(file);
		}
	}
}