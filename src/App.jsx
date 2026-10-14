
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Detalhes from "./pages/Detalhes";
import Busca from "./pages/Busca";
import Favoritos from "./pages/Favoritos";
import NaoEncontrada from "./pages/NaoEncontrada";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Detalhes />} />
          <Route path="/filme/:id" element={<Detalhes />} />
          <Route path="/busca" element={<Busca />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
