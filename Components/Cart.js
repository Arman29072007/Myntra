
// const Cart = ({ Cart, removeFromCart }) => {
//   return (
//     <div className="cart">
//       <h2>Your Cart</h2>
//       {Cart.length === 0 ? (
//         <p>Your cart is empty!</p>
//       ) : (
//         <ul>
//           {Cart.map((item) => (
//             <li key={item.id}>
//               {item.title} - ₹{item.price || "N/A"} x {item.quantity}
//               <button onClick={() => removeFromCart(item.id)}>Remove</button>
//             </li>
//           ))}
//         </ul>
//       )}
//       <div>
//         Total: ₹
//         {Cart.reduce(
//           (total, item) => total + (item.price || 0) * item.quantity,
//           0
//         ).toFixed(2)}
//       </div>
//     </div>
//   );
// };

// export default Cart;


import React from 'react';
import { useCart } from './CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.title} - {item.quantity} x ₹{item.price}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
