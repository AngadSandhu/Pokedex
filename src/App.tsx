import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Sidemenu from "./components/Sidemenu/Sidemenu";
import Home from "./pages/Home/Home";
import PokemonList from "./pages/PokemonList/PokemonList";

function App() {
  return (
    <div className="App">
      <Header></Header>Welcome to Pokedex
      <Sidemenu />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon" element={<PokemonList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
