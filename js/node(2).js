

  //for Cart
  
  let carts = document.querySelectorAll('.cart-btn');
  let products = [
      {
          name: 'Moringa herbal soap',
          tag: 'Moringa',
          price:2000,
          inCart:0,
         
      },
      {
          name: 'Lavender herbal lotion',
          tag: 'Lavender',
          price:2000,
          inCart:0,
         
      }, 
      {
          name: 'Tumeric bar soap',
          tag: 'image3',
          price:1000,
          inCart:0,
      },
      {
          name: 'Cornflower herbal soap',
          tag:  'image12',
          price: 1000,
          inCart:0,
         
      },
      {
        name: 'Lavender body soap',
        tag:  'image5',
        price: 2500,
        inCart:0,
       
      },
      {
        name: 'Moringa lotion soap',
        tag:  'image6',
        price: 1500,
        inCart:0,
       
      },
      {
        name: 'Moringa bar soap',
        tag:  'image7',
        price: 1500,
        inCart:0,
       
      },
      {
        name: 'Tumeric body soap',
        tag:  'image8',
        price: 2000,
        inCart:0,
       
      },
      {
        name: 'Lavender bar soap',
        tag:  'image9',
        price: 2500,
        inCart:0,
       
      },
      {
        name: 'Aloevera herbal soap',
        tag:  'image10',
        price: 1500,
        inCart:0,
       
      },
      {
        name: 'Aloevera bar soap',
        tag:  'image11',
        price: 1500,
        inCart:0,
       
      },
      {
        name: 'Cornflower herbal soap',
        tag:  'image12',
        price: 2000,
        inCart:0,
       
      }
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
                  <div class="cart2-row">
                  <div class="cart2-col">
                  <div class="grey-img">
                  <img src="./img/cart-img/${item.tag}.svg" style="width:100px; hight:auto;">
                  </div>
                  </div>
                  <div class="cart2-col2">
                  <div class="cart2-col-text">
                  <img src="./img/gg_nametag.png" alt="">
                  <span>${item.name}</span>
                  </div>
                  <i class="fa-regular fa-trash-can" style="float:right; padding-right: 30px;"></i>
                  
                  <div class="price">Price:N${item.price}.00</div>
                  <img src="./img/ri-star-s-fill.png" alt="">
                <img src="./img/ri-star-s-fill.png" alt="">
                 <img src="./img/ri-star-s-fill.png" alt="">
                <img src="./img/ri-star-s-fill.png" alt="">
                 <img src="./img/ri-star-s-fill.png" alt="">
                  
                  
                 <div style="font-size:15px;">Delivery fee:N1000</div>
                  <div class="total">
                 Total:N${item.inCart * item.price},00
                 </div>
                 
                 <div class="quantity">
                  <button class="minus">-</button>
                  <span style="background-color: rgba(241, 238, 238, 0.416);">${item.inCart}</span>
                  <button class="plus">+</button>
                  </div>
                  </div>
                  </div>
                  `;
              });
         
          productContainer.innerHTML += `
          <div class="cart2-col">
          <div class="cartTotalContainer">
          <h1 class="cartTotalTitle">
           Total
         <span> N${cartCost}.00</span>
          </h1>
          </div>
          </div>
          </div>
          `
          productContainer.innerHTML += `
          <a href="checkout.html"><input type="submit" class="CHECK" value="checkout"></input></a>
          `;
      }
      };


      
      onLoadCartsNumbers();
      displayCart()


    







