import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from "./components/Header/Header";
import Sidemenu from "./components/Sidemenu/Sidemenu";

const Home = lazy(() => import("./pages/Home/Home"));
const PokemonList = lazy(() => import("./pages/PokemonList/PokemonList"));
const About = lazy(() => import("./pages/About/About"));
const PokemonDetail = lazy(() => import("./pages/PokemonDetail/PokemonDetail"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* Placing the header and sidemenu inside the router so that the router doesnt throw an out of context error */}
        <Header></Header>
        <Sidemenu />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="pokemon" element={<PokemonList />} />
            {/* <Route path="/details" element={<PokemonDetail />} /> */}
            <Route path="pokemon/id=:id" element={<PokemonDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
