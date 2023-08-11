import React from "react";

export default function Detail({ params }) {
  console.debug(params.id);
  return <h1>Gif con id {params.id}</h1>;
}
