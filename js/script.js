const cartIcon = document.querySelector('shopping-cart')
const cartPage = document.querySelector('cart2.html')

cartIcon.addEventListener('onclick', ()=>{
    if(cartPage.classList.contains('cart2.html'))
    cartPage.classList.show('cart2.html')
    // alert("hello")
})


