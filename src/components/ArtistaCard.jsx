import React from "react";

export const ArtistaCard = ({imgUrl, desc, titulo, mscUrl}) => {
  return (
    <>
      <article>
        <h3>{titulo}</h3>
        <img src={imgUrl} alt={titulo} width="400" />
        <p>{desc}</p>
        <p>Canción destacada:</p>
        <audio controls>
          <source src={mscUrl} type="audio/mp3" />
          Tu navegador no soporta el elemento de audio.
        </audio>
      </article>
    </>
  );
};
