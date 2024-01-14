import { Route, Routes } from "react-router-dom";
import Pocetna from "./pages/Pocetna";
import Proizvodi from "./pages/Proizvodi";
import OpisSajta from "./pages/OpisSajta";
import Korpa from "./pages/Korpa";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Pocetna />} />
        <Route path="/Proizvodi" element={<Proizvodi />} />
        <Route path="/OpisSajta" element={<OpisSajta />} />
        <Route path="/Korpa" element={<Korpa />} />
      </Routes>
    </>
  );
}

export default App;
