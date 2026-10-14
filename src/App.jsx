
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Detalhes from "./pages/Detalhes";
import Busca from "./pages/Busca";
import Favoritos from "./pages/Favoritos";
import NaoEncontrada from "./pages/NaoEncontrada";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Detalhes />} />
        <Route path="/busca" element={<Busca />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
    </BrowserRouter>
  );
}
