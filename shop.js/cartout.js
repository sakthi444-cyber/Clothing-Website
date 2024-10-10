import { cart, removeFromCart } from "../data/cart.js";
import { products } from "../data/Product.js";



   
    let cartHTML=''
    cart.forEach((cartitem)=>{
        const productId=cartitem.productId;

        let matchingProduct;
        products.forEach((product) =>{
            if(product.id === productId){
                matchingProduct=product
            }
        })

       
        





            cartHTML +=`<div class="row row-cols-12 row-cols-md-12 g-4 py-5 js-cart-item-container-${matchingProduct.id}">
                        <div class="col">
                            <div class="product-image-name">
                                <img src="${matchingProduct.image}" alt="" width="200px" height="200px">
                                <h6 class="mt-2">
                                    ${matchingProduct.Name}
                                </h6>
                                <div class="quantity-order">
                                    <h4>Quantity:<span>${cartitem.quantity}</span></h4>
                                </div>
                            </div>
                            <div class="Deleveiry">
                                <article>
                                    <h4 class="text-success">Deleveiry on Monday Dec 2 </h4>
                                    <p>2 Days Return Policy Available</p>
                                    <p>Afflicted Membership 14 days Return Policy</p>
                                    <h3>You can Save Rs:400 by the<h2 class="text-success">Discount 30%</h2></h3>
                                </article>
                                </article>
                                
                            </div>
                            <div class="price">
                                <p>Price: <span> ${matchingProduct.price}</span></p>
                                <button class="btn btn-warning mb-2 js-delete" data-product-id=${matchingProduct.id}>Delete</button>
                                <button class="btn btn-success"> Place Order</button>
                            </div>
                            
                
                           </div>
                         </div>`

    })
    document.querySelector('.js-cart-addition-input').innerHTML=cartHTML








document.querySelectorAll('.js-delete')
 .forEach((dele)=>{
    dele.addEventListener('click',()=>{
        const productId=dele.dataset.productId;
        removeFromCart(productId)

        const container=document.querySelector(`.js-cart-item-container-${productId}`);
        container.remove();
        
    })
    
    
 })

