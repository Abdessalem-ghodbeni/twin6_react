import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import ListeVotures from "./ListeVotures";
import Home from "./Home";
import Products from "./Products";
import Dashboard from "./Dashboard";
import Login from "./Login";
import NotFoundPage from "./NotFoundPage";
import VoitureDetails from "./VoitureDetails";
import PrivateRoute from "./PrivateRoute";
import { useState } from "react";
import IsNotAuthentificated from "./IsNotAuthentificated";

function App() {
  const [isauthentificated, setIsauthentificated] = useState(false);
  return (
    <>
      {/* <Dashboard /> */}
      {/* <ListeVotures /> */}
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="liste_produit" element={<Products />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Navigate to="/signin" replace />} />
        <Route path="/signin" element={<Login />} />
        <Route path="voiture/by/:id" element={<VoitureDetails />} />
        {/* <Route path="/liste/voitures" element={<ListeVotures />}>
          {" "}
        </Route> */}
        <Route path="IsNotAuthentificated" element={<IsNotAuthentificated />} />
        <Route element={<PrivateRoute isauthentificated={isauthentificated} />}>
          <Route path="/admin" element={<Dashboard />}>
            <Route path="liste/voitures" element={<ListeVotures />}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
