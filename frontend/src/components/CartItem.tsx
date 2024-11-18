import React from 'react'
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
type CartItemProps = {
   cartItem: any;
  
 };
function CartItem({ cartItem}: CartItemProps) {
  const {productId,name,price,stock,quantity,photo}=cartItem
  return (
    <div className='cartItem' >
     <img src={photo} alt="name" />
     <article>
      <Link to={`/product/${productId}`}>{name}</Link>
      <p>${price}</p>
     </article>
     <div>
     <button disabled={quantity===0}>-</button>
     <p>{quantity}</p>
      <button disabled={quantity===stock}>+</button>
      <button >
        <FaTrash/>
      </button>
     </div>
      
    </div>
  )
}
export default CartItem
