import React, { useState } from "react";
import "./App.css";

const GIFS = [
  "https://media2.giphy.com/media/xT1XGODypTezG3O2MU/giphy.gif?cid=ecf05e47ynerm69v0v9qkmlofwj5o4pydjkodoqvd8v3wqq8&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  "https://media3.giphy.com/media/EPcvhM28ER9XW/200w.webp?cid=ecf05e47ynerm69v0v9qkmlofwj5o4pydjkodoqvd8v3wqq8&ep=v1_gifs_search&rid=200w.webp&ct=g",
];

const DIERENTS_GIFS = [
  "https://media2.giphy.com/media/xT5LMXIZcIT7hjkDny/200.webp?cid=ecf05e4721vmadejosq89p7b3r0baz174hvnultt44l0imoy&ep=v1_gifs_related&rid=200.webp&ct=g",
];
function App() {
  const [gifs, setGifs] = useState(GIFS);
  return (
    <div className="App">
      <section className="App-content">
        {gifs.map((singleGif) => (
          <img src={singleGif} />
        ))}
        {/* <button onClick={() => setGifs(DIERENTS_GIFS)}>Cambiar Gifs</button> */}
      </section>
    </div>
  );
}

export default App;
