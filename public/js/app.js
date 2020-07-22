
console.log('Does this work yet?')


const validateInput = element => {
    let response = {
        isValid: false,
        message: ''
    }
    if (element.value.length === 0) {
        response.message = 'Required field';
    } else if (
        element.value.length < 3 &&
        (element.name === 'name')
    ) {
        response.message = 'Enter your full name';
    } else if (element.value.length < 1 && element.name === 'email') {
        response.message = 'Please enter a valid email';
    } else {
        response.isValid = true;
    }
    return response;
}

const contactEl = document.querySelector('.landing-form');
contactEl.addEventListener('submit', e => {
    e.preventDefault();
    let allInputValid = true;
    contactEl.querySelectorAll('input, textarea').forEach(el => {
        //   let errorEl = el.parentElement.firstElementChild;
        let validationResponse = validateInput(el);
        if (!validationResponse.isValid) {
            allInputValid = false;
            el.classList.add('error');
            // errorEl.classList.remove('hidden', 'opaque');
            // errorEl.innerText = validationResponse.message;
        } //else {
        //     el.classList.remove('error');
        //     errorEl.classList.add('hidden');
        //   }
    })
    if (allInputValid) {
        console.log('Welcome to the Dashboard');
    }
})

//   document.querySelectorAll('input, textarea').forEach(el => {
//     el.addEventListener('focus', e => {
//       el.parentElement.firstElementChild.classList.add('opaque');
//     })
//   })





