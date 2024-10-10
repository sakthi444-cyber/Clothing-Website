import { cart,addToCart } from "../data/cart.js";
import { products } from "../data/Product.js";
let productsHTML='';

products.forEach((product)=>{
    productsHTML +=`
               <div class="col">
                    <div class="card">
                        <img src="${product.image}" alt="">
                        <div class="card-body">
                            <h3>${product.Name}</h3>
                            <p class="text-secondary">Tax included. Free shipping all over India, usually Arrives in 3-5 Days. Easy 14-Day Return & Exchange.</p>
                            <div class="size">
                                <button class="size-btn">
                                    <span class="in ">S
                                    </span>  
                                </button>
                                <button class="size-btn">
                                    <span class="in">
                                        M
                                    </span>  
                                </button>
                                <button class="size-btn">
                                    <span class="in">
                                        L
                                    </span>  
                                </button>
                                <button class="size-btn">
                                    <span class="in">
                                        XL
                                    </span>  
                                </button>
                                <button class="size-btn">
                                    <span class="in">

                                        XXL
                                    </span> 
                                </button>
                            </div>
                            <div class="color mt-3">
                                <div class="color__order">
                                    <div class="yellow">
                                        <h6 class="d-inline me-3">Select the Color</h6>
                                        <button class="bt me-2" style="width: 20px; height: 20px; background-color: yellow; border-radius: 50%; border: none;"></button>
                                        <button class="bt" style="width: 20px; height: 20px; background-color: rgb(0, 225, 255); border-radius: 50%; border: none;"></button>
                                    </div>
                                </div>
                            </div>
                            <div class="price mt-2">
                                <h3>${product.price}</h3>
                                <h6 class="text-success">Discount 30%</h6>
                            </div>
                            <div class="cart mt-4">
                                <div class="cart-Buy">
                                    <button class="btn btn-success by-cart ">Buy Now</button>
                                    <button class="btn btn-success by-cart js-add-cart" data-product-id="${product.id}">&#128722;</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
    
    `;
    
})

document.querySelector('.js-input-product').innerHTML=productsHTML;




function updateCartQuantity(){
    let cartQuantity=0;
    cart.forEach((cartitem)=>{

     cartQuantity +=cartitem.quantity;
     document.querySelector('.js-span-cart').innerHTML=cartQuantity

    })
}

document.querySelectorAll('.js-add-cart')
   .forEach((button)=>{
     button.addEventListener('click', ()=>{
       const productId= button.dataset.productId;
       
       addToCart(productId);
       updateCartQuantity();

     });

   });