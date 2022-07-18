let carts = document.querySelectorAll('.cart-btn');

let products = [
    {
        name: 'lavenda herbal soap',
        tag: 'Group 229 (4).png',
        price: 150,
        inCart:0,
       
    },
    {
        name: 'Black Tshirt',
        tag: 'image-2',
        price: 155,
        inCart:0,
       
    }, 
    {
        name: 'Blue Tshirt',
        tag: 'image-3',
        price: 115,
        inCart:0,
       
    },
    {
        name: 'White Tshirt',
        tag:  'image-4',
        price: 125,
        inCart:0,
       
    },
]

for(i=0; i<carts.length; i++){
    carts[i].addEventListener('click',()=>{
        cartNumbers();
    });

}

function onLoadCartsNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers){
    document.querySelector('.shopping-cart').textContent= productNumbers;
}
}



function cartNumbers (){
    let productNumbers = localStorage.getItem('cartNumbers');

     productNumbers =  parseInt(productNumbers);
    console.log('productNumbers');
     if(productNumbers){
         localStorage.setItem('cartNumbers',productNumbers + 1);
         document.querySelector('.shopping-cart').textContent =productNumbers +1;
     }
     else{
         localStorage.setItem ('cartNumbers', 1);
         document.querySelector('.shopping-cart').textContent = 1
     }

//function call,gets product details
setItems(product);
    
function setItems(product){
    // console.log("Inside of setItems function ");
    // console.log("My product is",product);
   
    let cartItems = localStorage.getItem('productsInCart'); 
    cartItems = JSON.parse(cartItems); 
    // console.log("My cartitems are",cartItems);

    if(cartItems  != null){
        // cartItems['']
        //
        if(cartItems[products.tag] == undefined){
            //updte the cart to be a js object i.e update localstorage
            cartItems = {
                //"..." used to make shallow copies of JS objects
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    }else {

    
    product.inCart =1;
     cartItems = {
        [product.tag]:product
    }
}

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}
}
let totalPrice = function totalCost(product){
// console.log("the products price",product.price);

//checks if there's sth in the local storage
let cartCost =localStorage.getItem('totalCost');


//whenever we get sth from the local storage, it comes as a string
console.log(typeof cartCost);

if(cartCost != null) {
cartCost = parseInt(cartCost);

    localStorage.setItem('totalCost',cartCost + product.price);
} else{
localStorage.setItem("totalCost",product.price);
}
}

//checks if there are products in the localstorage
function displayCart(){
let cartItems= localStorage.getItem('productsInCart');
 cartItems = JSON.parse(cartItems);
// console.log(cartItems);

let productContainer = document.querySelector(".cart2-row")
//checks if cartitems exist in the localstorage
console.log(cartItems);

if(cartItems && productContainer ){
        // console.log('running');
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product"> 
            <ion-icon name="close-circle"></ion-icon>
            <img src="./img/${item.tag}.png" style="width:60px; height:60px;">
            <span>${item.name}</span>
            <span>${item.price}</span>
            <span></span>
            
            </div>
            `
            // totalCost(products[i]);
        })
}
}

onLoadCartsNumbers();
displayCart();
