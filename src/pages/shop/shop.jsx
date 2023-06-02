// import React from "react";
// import { PRODUCTS } from "../../products";
// import { Product } from "./product";
// import "./shop.css";

// export const Shop = () => {
//   return (
//     <div className="shop">
//       <div className="shopTitle">
//         <h1>Nikhil's NFT</h1>
//       </div>

//       <div className="products">
//         {PRODUCTS.map((product) => (
//           <Product data={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// Shop.jsx
import React, { useState } from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import { useNavigate } from "react-router-dom";
import "./shop.css";

export const Shop = () => {
  const [products, setProducts] = useState(PRODUCTS);
  const navigate = useNavigate();

  const handleRemoveFromShop = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Nikhil's NFT</h1>
      </div>

      <div className="products">
        {products.map((product) => (
          <Product
            key={product.id}
            data={product}
            onRemoveFromShop={handleRemoveFromShop}
          />
        ))}
      </div>
    </div>
  );
};

