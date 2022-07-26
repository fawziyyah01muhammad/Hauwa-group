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








