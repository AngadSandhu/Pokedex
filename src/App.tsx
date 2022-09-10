import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import Sidemenu from "./components/Sidemenu/Sidemenu";

function App() {
  return (
    <div className="App">
      <Header></Header>Welcome to Pokedex
      <Sidemenu />
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
