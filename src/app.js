
const loginForm = document.querySelector('#form')
const formFields = form.querySelectorAll('.form__input')
const submitBtn = form.querySelector('#submitBtn')

loginForm.addEventListener('change', () => {
	form.checkValidity()
		? (submitBtn.disabled = false)
		: (submitBtn.disabled = true)
})

const checkEmailField = (input) => {
	const inputValue = input.value.trim()
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputValue)) {
		setSuccesFor(input)
	} else {
		setErrorFor(input)
	}
}

const checkTextField = (input) => {
	const inputValue = input.value.trim()
	if (inputValue === '') {
		setErrorFor(input)
	} else {
		setSuccesFor(input)
	}
}

const checkInput = (input) => {	
	switch (input.type) {
		case 'email':
			console.log('Email: ', input);
			checkEmailField(input)
			break
		
		default:
			checkTextField(input)
	}
}

formFields.forEach((input) => {
	input.addEventListener('focus', (e) => {
		setFancyLabel(input, e)
	})
	input.addEventListener('change', () => {
		checkInput(input)
	})
	input.addEventListener('blur', (e) => {
		setFancyLabel(input, e)
	})
})

const setErrorFor = (input) => {
	const formRow = input.closest('.form__row')
	const errorMsgContainer = formRow.querySelector('.form__error')
	const errorMsg = formRow.dataset.errorMsg
	formRow.classList.add('filled')
	formRow.classList.remove('success')
	formRow.classList.add('error')
	errorMsgContainer.innerText = errorMsg
}

const setSuccesFor = (input) => {
	const formRow = input.closest('.form__row')
	const errorMsgContainer = formRow.querySelector('.form__error')
	formRow.classList.add('filled')
	formRow.classList.add('success')
	formRow.classList.remove('error')
	errorMsgContainer.innerText = ''
}

const setFancyLabel = (input, e) => {
	const formRow = input.closest('.form__row')
	
	if (input.value === '' && e.type === 'blur') {
		formRow.classList.remove('filled')	
	} else {
		formRow.classList.add('filled')
	}
	
}