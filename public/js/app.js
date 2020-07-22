
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
    const form = {}
    let allInputValid = true;
    contactEl.querySelectorAll('input, textarea').forEach(el => {
        console.log('pizza');
        //   let errorEl = el.parentElement.firstElementChild;
        let validationResponse = validateInput(el);
        if (!validationResponse.isValid) {
            allInputValid = false;
            el.classList.add('error');
            // errorEl.classList.remove('hidden', 'opaque');
            // errorEl.innerText = validationResponse.message;
        } else {
            form[el.name] = el.value;
          }
    })
    if (allInputValid) {
        console.log(form);
        fetch("/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }, 
            body: JSON.stringify(form)
        }).then(data => data.json()).then(data => console.log('newUser', data))
    }
})

//   document.querySelectorAll('input, textarea').forEach(el => {
//     el.addEventListener('focus', e => {
//       el.parentElement.firstElementChild.classList.add('opaque');
//     })
//   })





