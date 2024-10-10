export let cart= 
[{
    productId:1,
    quantity:1
},{
    productId:2,
    quantity:1
},{
    productId:3,
    quantity:1
}]
 



export function addToCart(productId){
    let matchingItem;
       cart.forEach((item)=>{
        if(productId === item.productId){
            matchingItem=item

        }
       });

       if(matchingItem){
        matchingItem.quantity +=1;
       }
       else{
        cart.push({
            productId: productId,
            quantity:1
           });
           
       }

       
       


}

export function removeFromCart(productId){

    let newCart=[];
    cart.forEach((cartitem)=>{
        if(cartitem.productId !== productId){
            newCart.push(cartitem);
        }

        cart=newCart;
        
    })
   

  
    
    

}



