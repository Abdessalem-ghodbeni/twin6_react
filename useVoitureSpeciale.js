import React, { useEffect, useState } from "react";

export function useVoitureSpeciale(voiture) {
  const [message, setMessage] = useState("");
  useEffect(() => {
    if (voiture.marque.toLowerCase() === "bmw") {
      setMessage("🚗 Voiture de rêve !");
    } else {
      setMessage("");
    }
  }, [voiture]);

  return message;
}
