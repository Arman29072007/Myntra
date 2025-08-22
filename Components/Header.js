// import React, { useState } from 'react';
// import '../App.css';


// const Header = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   return (
//     <nav className="navbar">
//       <div className="logo">
//       <img src='https://th.bing.com/th/id/OIP.Hm0pDpKrcG55AdHV6rMtWQHaEH?w=329&h=182&c=7&r=0&o=7&pid=1.7&rm=3' alt=""/>
//        </div>

//       <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
//           onClick={() => setIsMobile(false)}>
//         <li>MEN</li>
//         <li>WOMEN</li>
//         <li>KIDS</li>
//         <li>HOME</li>
//         <li>BEAUTY</li>
//         <li>GENZ</li>
//         <li>STUDIO <span className="new-badge">NEW</span></li>
//       </ul>

//       <div className="search">
//         <input type="text" placeholder="Search for products" />
//       </div>

//       <div className="icons">
//         <span>🥰<p>Profile</p></span>
//         <span>❤️<p>Wishlist</p></span>
//         <span>🛍️<p>Bag</p></span>
//       </div>

//       <button className="mobile-menu-icon"
//               onClick={() => setIsMobile(!isMobile)}>
//         {isMobile ? "✖" : "☰"}
//       </button>
      
//     </nav>
//   );
// };

// export default Header;

// import React, { useState } from "react";
// import Cart from "./Cart"; // Make sure path is correct
// import "../App.css";

// const Header = () => {
//   const [isMobile, setIsMobile] = useState(false);
//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const [cart, setCart] = useState([
//     { id: 1, title: "Item 1", price: 100, quantity: 2 },
//     { id: 2, title: "Item 2", price: 200, quantity: 1 },
//   ]);

//   const removeFromCart = (id) => {
//     setCart(cart.filter((item) => item.id !== id));
//   };

//   return (
//     <>
//       <nav className="navbar">
//         <div className="logo">
//           <img
//             src="https://th.bing.com/th/id/OIP.Hm0pDpKrcG55AdHV6rMtWQHaEH?w=329&h=182&c=7&r=0&o=7&pid=1.7&rm=3"
//             alt="Logo"
//           />
//         </div>

//         <ul
//           className={isMobile ? "nav-links-mobile" : "nav-links"}
//           onClick={() => setIsMobile(false)}
//         >
//           <li>MEN</li>
//           <li>WOMEN</li>
//           <li>KIDS</li>
//           <li>HOME</li>
//           <li>BEAUTY</li>
//           <li>GENZ</li>
//           <li>
//             STUDIO <span className="new-badge">NEW</span>
//           </li>
//         </ul>

//         <div className="search">
//           <input type="text" placeholder="Search for products" />
//         </div>

//         <div className="icons">
//           <span>
//             🥰
//             <p>Profile</p>
//           </span>
//           <span>
//             ❤️
//             <p>Wishlist</p>
//           </span>
//           <span onClick={() => setIsCartOpen(true)} style={{ cursor: "pointer" }}>
//             🛒
//             <p>Bag ({cart.length})</p>
//           </span>
//         </div>

//         <button
//           className="mobile-menu-icon"
//           onClick={() => setIsMobile(!isMobile)}
//         >
//           {isMobile ? "✖" : "☰"}
//         </button>
//       </nav>

//       {/* Cart Modal */}
//       {isCartOpen && (
//         <div className="modal-overlay" onClick={() => setIsCartOpen(false)}>
//           <div
//             className="modal-content"
//             onClick={(e) => e.stopPropagation()} // Prevent close on modal click
//           >
//             <button
//               className="close-button"
//               onClick={() => setIsCartOpen(false)}
//             >
//               ✖
//             </button>
//             <Cart cart={cart} removeFromCart={removeFromCart} />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Header;


import React, { useState } from "react";
import Cart from "./Cart"; // Ensure this path is correct
import "../App.css";
import { useCart } from "./CartContext"; // 👈 Use shared cart

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { cartItems, removeFromCart } = useCart(); // 👈 Access shared cart

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img
            src="https://th.bing.com/th/id/OIP.Hm0pDpKrcG55AdHV6rMtWQHaEH?w=329&h=182&c=7&r=0&o=7&pid=1.7&rm=3"
            alt="Logo"
          />
        </div>

        <ul
          className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}
        >
          <li>MEN</li>
          <li>WOMEN</li>
          <li>KIDS</li>
          <li>HOME</li>
          <li>BEAUTY</li>
          <li>GENZ</li>
          <li>
            STUDIO <span className="new-badge">NEW</span>
          </li>
        </ul>

        <div className="search">
          <input type="text" placeholder="Search for products" />
        </div>

        <div className="icons">
          <span>
            🥰
            <p>Profile</p>
          </span>
          <span>
            ❤️
            <p>Wishlist</p>
          </span>
          <span onClick={() => setIsCartOpen(true)} style={{ cursor: "pointer" }}>
            🛒
            <p>Bag ({cartItems.length})</p>
          </span>
        </div>

        <button
          className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? "✖" : "☰"}
        </button>
      </nav>

      {/* Cart Modal */}
      {isCartOpen && (
        <div className="modal-overlay" onClick={() => setIsCartOpen(false)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Prevent close on modal click
          >
            <button
              className="close-button"
              onClick={() => setIsCartOpen(false)}
            >
              ✖
            </button>
            <Cart cart={cartItems} removeFromCart={removeFromCart} />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
