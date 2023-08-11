import React from "react";
import "./App.css";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import Detail from "./pages/Detail";
//import ListOfGifs from "./components/ListOfGifs";

import { Link, Route } from "wouter";

export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        {/* <h1>App</h1> */}
        <Link to="/">
          <img className="App-logo" alt="Giffy logo" src="/LogoPageWeb.png" />
        </Link>
        {/* <Link to="/gif/ecuador">Gifs de Ecuador</Link>
        <Link to="/gif/chile">Gifs de Chile</Link> */}
        {/* <Route component={ListOfGifs} path="/gif/:keyword"></Route> */}
        <Route component={Home} path="/"></Route>
        <Route component={SearchResults} path="/search/:keyword"></Route>
        <Route component={Detail} path="/gif/:id"></Route>
      </section>
    </div>
  );
}
