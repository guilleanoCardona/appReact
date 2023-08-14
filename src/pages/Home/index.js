import React, { useState } from "react";
import { Link, useLocation } from "wouter";
//import getGifs from "../../services/getGifs";
import ListOfGifs from "../../components/ListOfGifs/index";
import { useGifs } from "../../hooks/useGifs";

const POPULAR_GIFS = ["Matrix", "Venezuela", "Chile", "Colombia", "Ecuador"];

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();
  const { loading, gifs } = useGifs();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // navegara otra ruta
    pushLocation(`/search/${keyword}`);
  };
  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search a gif here ..."
          onChange={handleChange}
          type="text"
          value={keyword}
        />
        <button />
      </form>
      <h3 className="App-title">Última</h3>
      <ListOfGifs gifs={gifs} />
      <h3 className="App-title">Los Gifs mas populares</h3>
      <ul>
        {POPULAR_GIFS.map((popularesGif) => (
          <li key={popularesGif}>
            <Link to={`/search/${popularesGif}`}>Gifs de {popularesGif}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
