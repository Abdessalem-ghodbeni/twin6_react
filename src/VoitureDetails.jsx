import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function VoitureDetails() {
  const { id } = useParams();
  useEffect(() => {
    console.log("id de la voiture est : ", id);
  });
  return (
    <>
      <h1 className="text-danger">Hello l'id de votre voiture est : </h1>

      <h2 className="text-info text-canter">{id}</h2>
    </>
  );
}

export default VoitureDetails;
