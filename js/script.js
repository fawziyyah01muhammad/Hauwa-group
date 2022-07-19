document.querySelectorAll('input').forEach((input) =>{
    input.addEventListener('click', (e) => {
        alert(`you are editing the ${e.target.name} field!`)
    });
})

let require = document.querySelectorAll('input')
let Submit = document.querySelector('.sign-up-container')
if(require == ""){
Submit.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Your submission was not successful!");
    })
}