
import { useParams } from "react-router-dom";
import products from "./products.js";
import "../App.css";
import { useCart } from "../Components/CartContext";
// import Cart from "../Components/Cart";
// import React from "react";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const { addToCart, } = useCart();

  const filteredProducts = products.filter(
    (product) => product.category === categoryName
  );

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="category-page">
      <h2>{categoryName.toUpperCase()} Products</h2>
      {filteredProducts.length === 0 ? (
        <p>No products found in this category.</p>
      ) : (
        <div className="category-products">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-item">
              <img src={product.image} alt={product.title} />
              <h5>{product.title}</h5>
              <p>{product.cta}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="btn btn-primary"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
      {/* Cart shown after product list */}
      {/* <Cart cart={cartItems} removeFromCart={removeFromCart} />S */}
    </div>
  );
};

export default CategoryPage;
