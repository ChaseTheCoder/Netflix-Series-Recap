//  ./ represents the currnet index.html file

// KEEP FOOTER AT THE BOTTOM OF THE PAGE
// set main tag min-height to 100vh
// view height and view width unit in CSS is the current view of the page
// main tag on everypage

console.log('Does this work yet?')

// const validateInput = element => {
//     let response = {
//         isValid: false,
//         message: ''
//     }
//     if (element.value.length === 0) {
//         response.message = 'Required field';
//     } else if (hasSpecialChar(element.value)) {
//         response.message = 'No special characters';
//     } else if (
//         element.value.length < 1 &&
//         (element.name === 'name')
//     ) {
//         response.message = 'Enter your full name';
//     } else if (element.value.length < 1 && element.name === 'email') {
//         response.message = 'Please Enter a Valid Email';
//     } else {
//         response.isValid = true;
//     }
//     return response;
// }

// const formEl = document.querySelector('.landing-form');
// formEl.addEventListener('submit', e => {
//     let allInputValid = true;
//     formEl.querySelectorAll('input').forEach(el => {
//         let errorEl = el.parentElement.firstElementChild;
//         let validationResponse = validateInput(el);
//         if (!validationResponse.isValid) {
//             allInputValid = false;
//             el.classList.add('error');
//             errorEl.classList.remove('hidden', 'opaque');
//             // errorEl.innerText = validationResponse.message;
//         } else {
//             el.classList.remove('error');
//             errorEl.classList.add('hidden');
//         }
//     })
//     if (allInputValid) {
//         console.log('SUBMITTED FORM');
//     }
// })

// document.querySelectorAll('input, textarea').forEach(el => {
//   el.addEventListener('focus', e => {
//     el.parentElement.firstElementChild.classList.add('opaque');
//   })
// })


const hasSpecialChar = str => {
    const specialCharRE = /[<>]+/;
    return specialCharRE.test(str);
  }

//   const isCCV = input => {
//     let inputNum = Number(input);
//     if (inputNum) {
//       // let re = /[0-9]/;
//       // let re = /[0-9][0-9][0-9]/;
//       // let re = /^[0-9][0-9][0-9]$/;
//       // let re = /^\d\d\d$/;
//       let re = /^\d{3}$/;
//       return re.test(inputNum);
//     }
//     return false;
//   }

  const validateInput = element => {
    let response = {
      isValid: false,
      message: ''
    }
    if (element.value.length === 0) {
      response.message = 'Required field';
    }  else if (hasSpecialChar(element.value)) {
      response.message = 'No special characters';
    } else if (
      element.value.length < 3 &&
      (element.name === 'fName' || element.name === 'lName')
      ) {
      response.message = 'Enter your full name';
    } else if (element.value.length < 20 && element.name === 'message') {
      response.message = 'Message too short';
    } else if (element.name === 'ccv' && !isCCV(element.value)) {
      response.message = 'Enter valid CCV';
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
      let errorEl = el.parentElement.firstElementChild;
      let validationResponse = validateInput(el);
      if (!validationResponse.isValid) {
        allInputValid = false;
        el.classList.add('error');
        errorEl.classList.remove('hidden', 'opaque');
        errorEl.innerText = validationResponse.message;
      } else {
        el.classList.remove('error');
        errorEl.classList.add('hidden');
      }
    })
    if (allInputValid) {
      console.log('SUBMITTED FORM');
    }
  })

  document.querySelectorAll('input, textarea').forEach(el => {
    el.addEventListener('focus', e => {
      el.parentElement.firstElementChild.classList.add('opaque');
    })
  })