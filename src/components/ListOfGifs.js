import React, { useEffect, useState } from "react";
import Gif from "./Gif";
import getGifs from "../services/getGifs";

export default function ListOfGifs({ params }) {
  const { keyword } = params;
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState({ loading: false, results: [] });

  useEffect(
    function () {
      setLoading(true);
      setGifs((actualGifs) => ({ loading: true, results: actualGifs.results }));

      getGifs({ keyword }).then((gifs) => {
        setGifs({ loading: false, results: gifs });
        setGifs(gifs);
        setLoading(false);
      });
    },
    [keyword]
  );

  if (gifs.loading) return <i>Cargango...😉️</i>;

  return (
    <div>
      {gifs.results.map(({ id, title, url }) => (
        <Gif id={id} key={id} title={title} url={url} />
      ))}
    </div>
  );
}
