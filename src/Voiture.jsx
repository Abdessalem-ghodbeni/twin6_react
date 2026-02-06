import React from "react";

function Voiture({ voiture }) {
  return (
    <>
      <div className="card">
        <img src={voiture.image} alt={voiture.modele} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{voiture.marque}</h5>
        <p className="card-text">{voiture.modele}</p>
        <p>
          <strong>{voiture.annee}</strong>
        </p>
      </div>
    </>
  );
}

export default Voiture;
