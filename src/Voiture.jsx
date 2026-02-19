import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import { useVoitureSpeciale } from "../useVoitureSpeciale";
import { Link } from "react-router-dom";

function Voiture({ voiture }) {
  const { color, background } = useContext(AppContext);
  const messageSpecial = useVoitureSpeciale(voiture);
  return (
    <>
      <div
        className="card"
        style={{ backgroundColor: background, color: color }}
      >
        <img src={voiture.image} alt={voiture.modele} />
      </div>
      <div className="card-body">
        <h5 className="card-title" style={{ color }}>
          {voiture.marque}
        </h5>
        <p className="card-text">{voiture.modele}</p>
        <p>
          <strong>{voiture.annee}</strong>
        </p>
        {messageSpecial && <p className="text-success">{messageSpecial}</p>}

        <button className="btn btn-outline-info">
          <Link to={`/voiture/by/${voiture.id}`}>Voir details</Link>
        </button>
      </div>
    </>
  );
}

export default Voiture;
