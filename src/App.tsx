import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from "./components/Header/Header";
import Sidemenu from "./components/Sidemenu/Sidemenu";
import Home from "./pages/Home/Home";
import PokemonList from "./pages/PokemonList/PokemonList";
import About from "./pages/About/About";
import PokemonDetail from "./pages/PokemonDetail/PokemonDetail";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* Placing the header and sidemenu inside the router so that the router doesnt throw an out of context error */}
        <Header></Header>
        <Sidemenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon" element={<PokemonList />} />
          <Route path="/details/:id" element={<PokemonDetail />} />
          {/* <Route path="/details" element={<PokemonDetail />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
