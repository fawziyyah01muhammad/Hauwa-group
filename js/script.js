// document.querySelectorAll('input').forEach((input) =>{
//     input.addEventListener('click', (e) => {
//         alert(`you are editing the ${e.target.name} field!`)
//     });
// })

// let require = document.querySelectorAll('input')
// let Submit = document.querySelector('.sign-up-container')
// if(require == ""){
// Submit.addEventListener('submit', (e) => {
//         e.preventDefault();
//         alert("Your submission was not successful!");
//     })
// }


// --------------password visibility---------------

const seePassword = document.querySelector('#togglePassword');

const password = document.querySelector('#password');
    
seePassword.addEventListener('click', () =>{
    const type = password.getAttribute('type') === 'password' ?
    'text' : 'password';
    password.setAttribute('type', type);

this.classList.toggle('fa-eye-eye')

});




//------------------form validation-----------------

