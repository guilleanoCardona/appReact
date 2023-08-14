import React, { useContext } from "react";
//import StaticContext from "../../context/StaticContext";
//import GifsContext from "../../context/GifsContext";
import Gif from "../../components/Gif";
import useGlobalGifs from "../../hooks/useGlobalGifs";

export default function Detail({ params }) {
  //const staticConfig = useContext(StaticContext);
  const gifs = useGlobalGifs();

  const gif = gifs.find((singleGif) => singleGif.id === params.id);
  console.log(gif);

  return <Gif {...gif}></Gif>;
  //return <h1>Gif con id {params.id}</h1>;
}
