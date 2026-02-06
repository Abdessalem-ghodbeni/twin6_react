import React from "react";

function Product({ produit }) {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{produit.name}</h5>
          <p>{produit.price}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
