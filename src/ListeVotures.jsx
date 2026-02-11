import React, { useEffect, useRef, useState } from "react";
import Voiture from "./Voiture";
import Commande from "./Commande";
import { AppContext } from "./../AppContext";

function ListeVotures() {
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);
  const [{ color, background }, setColor] = useState({
    color: "red",
    background: "purple",
  });
  const [visible, setVisible] = useState(false);

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
  const changerCouleur = (e) => {
    setColor((current) => ({
      ...current,
      color: e.target.value,
    }));
  };

  useEffect(() => {
    console.log("le composant est monté - c'est la 1er fois que se lance ");
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
      inputRef.current.focus();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  useEffect(() => {
    console.log(`le composant est mise a jour et le count est ${count}`);
  }, [count]);

  return (
    <>
      <AppContext.Provider
        value={{
          count,
          color,
          background,
        }}
      >
        <div className="container">
          {visible && (
            <h2>
              {" "}
              Hey : im {color} and my background is {background}
            </h2>
          )}

          <input type="text" onChange={changerCouleur} ref={inputRef} />
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
      </AppContext.Provider>
    </>
  );
}

export default ListeVotures;
