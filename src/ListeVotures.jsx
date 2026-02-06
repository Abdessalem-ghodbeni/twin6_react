import React, { useState } from "react";
import Voiture from "./Voiture";
import Commande from "./Commande";

function ListeVotures() {
  const [count, setCount] = useState(0);

  const listVotures = [
    {
      id: 1,
      marque: "golf",
      modele: "Corolla",
      annee: 2020,
      image: "assets/voiture/golf.jfif",
    },
    {
      id: 2,
      marque: "bmw",
      modele: "Civic",
      annee: 2019,
      image: "assets/voiture/bmww.jfif",
    },
    {
      id: 3,
      marque: "clio",
      modele: "clio",
      annee: 2018,
      image: "assets/voiture/clio.jfif",
    },
  ];
  const incrementer = () => {
    return setCount(count + 1);
  };
  return (
    <>
      <div className="container">
        <Commande />
        <h4 className="text-danger">{count}</h4>
        <button className="btn btn-danger" onClick={incrementer}>
          incrementer
        </button>
        <button className="btn btn-danger mx-2" onClick={() => setCount(0)}>
          reset
        </button>
        <h1>Liste des voitures</h1>
        <div className="row">
          {listVotures.map((voiture) => (
            <div className="col-4">
              <Voiture voiture={voiture} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ListeVotures;
