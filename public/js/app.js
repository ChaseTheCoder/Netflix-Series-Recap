
console.log('Does this work yet?')

const isEmail = input => {
    let inputEmail = String(input);
    if (inputEmail) {
      // let re = /[0-9]/;
      // let re = /[0-9][0-9][0-9]/;
      // let re = /^[0-9][0-9][0-9]$/;
      // let re = /^\d\d\d$/;
      let re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
      console.log(input)
      return re.test(inputEmail);
    }
    return false;
  }

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
        alert('Enter your full name');
    } else if (isEmail === false && element.name === 'email') {
        alert('Please enter a valid email');
        console.log('Please enter a valid email')
    } else {
        response.isValid = true;
        alert("Thank you!")
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
        let errorEl = el.parentElement.firstElementChild;
        let validationResponse = validateInput(el);
        if (!validationResponse.isValid) {
            allInputValid = false;
            // el.classList.add('error');
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

  document.querySelectorAll('input, textarea').forEach(el => {
    el.addEventListener('focus', el => {
      el.parentElement.firstElementChild.classList.add('opaque');
    })
  })





