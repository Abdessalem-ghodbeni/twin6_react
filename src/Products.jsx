import React from "react";
import Product from "./Product";

function Products() {
  const listProduits = [
    { id: 1, name: "Produit 1", price: 100 },
    { id: 2, name: "Produit 2", price: 200 },
    { id: 3, name: "Produit 3", price: 300 },
  ];
  return (
    <>
      <h1> liste des produits</h1>
      <div className="row">
        {listProduits.map((produit) => (
          // <div key={item.id}>
          //   <h2>{item.name}</h2>
          //   <p>Prix: {item.price} €</p>
          // </div>
          <div className="col-12 col-md-4">
            <Product produit={produit} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
