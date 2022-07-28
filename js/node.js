//for quantity button
// function increaseCount(a, b) {
//     var input = b.previousElementSibling;
//     var value = parseInt(input.value, 10); 
//     value = isNaN(value)? 0 : value;
//     value ++;
//     input.value = value;
//   }
//   function decreaseCount(a, b) {
//     var input = b.nextElementSibling;
//     var value = parseInt(input.value, 10); 
//     if (value > 1) {
//       value = isNaN(value)? 0 : value;
//       value --;
//       input.value = value;
//     }
//   }

let carts = document.querySelectorAll('.cart-btn');
let products = [
    {
        name: 'Aloevera body soap',
        tag: 'Alovera body',
        price:2500,
        inCart:0,
       
    },
    {
        name: 'Cornflower lotion',
        tag: 'Cornflower lotion',
        price:1500,
        inCart:0,
       
    }, 
    {
        name: 'Tumeric lotion',
        tag: 'Tumeric',
        price: 115,
        inCart:0,
       
    },
    {
        name: 'Aloevera lotion soap',
        tag:  'Alovera lotion',
        price: 125,
        inCart:0,
       
    },
];

for(let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click',  () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartsNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.shopping-cart').textContent = productNumbers;
    }
}

function cartNumbers(product) {
    // console.log("the product clicked is", product);
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt (productNumbers);

    if( productNumbers ){
        localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('.shopping-cart').textContent = productNumbers + 1;
    } else {

    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.shopping-cart').textContent = 1;
    
}
setItems(product);

}

function setItems(product){
    let cartItems = localStorage.getItem("prouctsInCart");

    cartItems = JSON.parse(cartItems);
    if(cartItems != null){
        if( cartItems[product.tag] == undefined) {
            cartItems = {

                ...cartItems,
                [product.tag]:product
            }
        }
        cartItems[product.tag].inCart += 1;
    }else{
        product.inCart = 1;
        cartItems = {
           [product.tag]:product
    }
    }
    localStorage.setItem("prouctsInCart", JSON.stringify (cartItems));
}
function totalCost(product){
    
let cartCost = localStorage.getItem('totalCost');

    console.log("My cartCost is", cartCost);
    console.log(typeof cartCost );
    
    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price)
    }else{
        localStorage.setItem("totalCost", product.price);
    } 
}
    function displayCart(){
        let cartItems = localStorage.getItem("prouctsInCart");
        cartItems = JSON.parse(cartItems);
        let productContainer = document.querySelector
        (".products");
        let cartCost = localStorage.getItem('totalCost');

        console.log(cartItems);
        if( cartItems &&  productContainer) {
            productContainer.innerHTML = '';
            Object.values(cartItems).map(item => {
                productContainer.innerHTML += `
                <div class"product">
                <img src="./img/shop img/${item.tag}.svg" style="width:200px; hight:auto;">
                <span>${item.name}</span>
                <img src="./img/fluent_delete-48-regular.png" alt="">
                </div>
                <div class="price">N${item.price},00</div>
                <div class="quantity">
                <button>-</button>
                <span>${item.inCart}</span>
                <button>+</button>
                </div>
                </div>
                <div class="total">
                N${item.inCart * item.price},00
                </div>
                `;
            });
       
        productContainer.innerHTML += `
        <div class="cartTotalContainer">
        <h1 class="cartTotalTitle">
        CART Total
        </h1>
        <h1 class="cartTotal">
        N${cartCost},00
        </h1>
        `
    }

    }
onLoadCartsNumbers();
displayCart()


//   function close(){
	// 	alert("hey")
	// }

    // let disappear = document.querySelector('#bin');
    //         disappear.addEventListener('onclick', close);





// let carts = document.querySelectorAll('.cart-btn');
// for  (let i=0; i < carts.length; i++){
//     carts[i].addEventListener('click',() => {
//         cartNumbers(product[i]);
//         totalCost(product[i]);
//     })
// }


// //prevents it from going back to zero on refresh
// function onLoadCartsNumbers(){
//     let productNumbers = localStorage.getItem ('cartNumbers')
//     //if localstorage contains productNumbers
//     if(productNumbers){
//         document.querySelector('.shopping-cart ').textContent = productNumbers;
//     }
// }

// //stores the variable in the local storage
// function cartNumbers(product) {
//     // gets the counter variable
//     let productNumbers = localStorage.getItem('cartNumbers');
//     //the above, will return a string NaN
//     //when runs the second converts the previous value from string to number
//     productNumbers = parseInt(productNumbers);
//     //   console.log("the product clicked is:",product) 


//     if( productNumbers){
//         //whatever was there plus one
//         // the first block of the if statement is executed
//          localStorage.setItem('cartNumbers', productNumbers + 1);
//         document.querySelector('.shopping-cart ').textContent = productNumbers + 1;   
//      } 
//      //this is executed the first time
//      else {
//          localStorage.setItem('cartNumbers',1);

//         //Return the text content of an element(textContent):
//        document.querySelector('.shopping-cart ').textContent = 1; 
//     }
//     //function call,gets product details
//         setItems(product);
    
//         function setItems(product){
//             // console.log("Inside of setItems function ");
//             // console.log("My product is",product);
           
//             let cartItems = localStorage.getItem('productsInCart'); 
//             cartItems = JSON.parse(cartItems); 
//             // console.log("My cartitems are",cartItems);

//             if(cartItems  != null){
//                 // cartItems['']
//                 //
//                 if(cartItems[products.tag] == undefined){
//                     //updte the cart to be a js object i.e update localstorage
//                     cartItems = {
//                         //"..." used to make shallow copies of JS objects
//                         ...cartItems,
//                         [product.tag]: product
//                     }
//                 }
//                 cartItems[product.tag].inCart += 1;
//             }else {

            
//             product.inCart =1;
//              cartItems = {
//                 [product.tag]:product
//             }
//         }
    
//             localStorage.setItem("productsInCart", JSON.stringify(cartItems));
//         }
// }
// let totalPrice = function totalCost(product){
//     // console.log("the products price",product.price);

//     //checks if there's sth in the local storage
//     let cartCost =localStorage.getItem('totalCost');


//     //whenever we get sth from the local storage, it comes as a string
//     console.log(typeof cartCost);

//     if(cartCost != null) {
//         cartCost = parseInt(cartCost);

//             localStorage.setItem('totalCost',cartCost + product.price);
//     } else{
//     localStorage.setItem("totalCost",product.price);
//     }
// }

// //checks if there are products in the localstorage
// function displayCart(){
//         let cartItems= localStorage.getItem('productsInCart');
//          cartItems = JSON.parse(cartItems);
//         // console.log(cartItems);

//         let productContainer = document.querySelector(".products")
//         //checks if cartitems exist in the localstorage
//         console.log(cartItems);

//         if(cartItems && productContainer ){
//                 // console.log('running');
//                 productContainer.innerHTML = '';
//                 Object.values(cartItems).map(item => {
//                     productContainer.innerHTML += `
//                     <div class="products"> 
//                     <ion-icon name="close-circle"></ion-icon>
//                     <img src="./img/${item.tag}.svg" style="width:60px; height:60px;">
//                     <span>${item.name}</span>
//                     <span>${item.price}</span>
//                     <span></span>
                    
//                     </div>
//                     `
//                     // totalCost(products[i]);
//                 })
//         }
// }

// onLoadCartsNumbers();
// displayCart();
















// 

// if (inputValue === '') {
//  document.querySelector('#form1').forEach((input) => {
//         input.addEventListener ('submit', (e) => {
            
//         });
//     })

//   } else {
//     alert("Your submission was successful!");
//   }









