import React from "react";
import { ArtistaCard } from "../components/ArtistaCard";
import Carousel from "react-bootstrap/Carousel";

const artistas = [
  {
    titulo: "Los Piojos",
    desc: "Los Piojos marcaron una época del rock argentino con su fusión de rock, candombe y tango. Liderados por Ciro Martínez, su legado sigue vivo en cada recital que revive sus clásicos himnos populares.",
    mscUrl: "/los-piojos.mp3",
    imgUrl: "/los-piojos.jpg",
  },
  {
    titulo: "Conociendo Rusia",
    desc: "Conociendo Rusia, proyecto liderado por Mateo Sujatovich, representa una nueva ola del rock nacional. Con melodías nostálgicas y letras íntimas, su música conecta con distintas generaciones que buscan poesía y emoción.",
    mscUrl: "/conociendo-rusia.mp3",
    imgUrl: "/ruso.jpg",
  },
  {
    titulo: "El Zar",
    desc: "El Zar es una banda argentina que mezcla pop, soul y rock con una identidad fresca. Sus canciones combinan lirismo urbano y sonidos actuales.",
    mscUrl: "/elzar.mp3",
    imgUrl: "/zar.avif",
  },
  {
    titulo: "NAFTA",
    desc: "NAFTA fusiona soul, funk y música negra. Con una propuesta intensa en vivo, se ha convertido en una de las bandas más innovadoras del circuito independiente argentino.",
    mscUrl: "/nafta.mp3",
    imgUrl: "/nafta.jpg",
  },
  {
    titulo: "Él Mató a un Policía Motorizado",
    desc: "Banda platense referente del indie argentino. Con un estilo lo-fi, melódico y lírico, sus canciones capturan la melancolía y lo cotidiano.",
    mscUrl: "/elmato.mp3",
    imgUrl: "/elmato.jpg",
  },
];

const testimonios = [
  {
    autor: "Ciro Martínez (Los Piojos)",
    texto: "Este festival es una fiesta para la música nacional. ¡Nos emociona compartir escenario con tantas bandas increíbles!",
  },
  {
    autor: "Mateo Sujatovich (Conociendo Rusia)",
    texto: "El público de Sonidos de la Ciudad es único, siempre nos hacen sentir como en casa.",
  },
  {
    autor: "Prensa local",
    texto: "Un evento que reúne lo mejor de la escena argentina en un ambiente seguro y vibrante.",
  },
];

export const Artistas = () => {
  return (
    <>
      <section>
        <div className="row align-items-center justify-content-center min-vh-50">
          <div className="col-md-6 text-center text-md-end mb-3 mb-md-0">
            <div
              style={{
                background: "rgba(0,0,0,0.45)",
                borderRadius: "1rem",
                padding: "2rem",
              }}
            >
              <h3 className="fw-bold text-white">Artistas invitados</h3>
              <p className="lead text-white mb-0">
                En el festival "Sonidos de la Ciudad" contaremos con una variedad
                de artistas que representan lo mejor de la música argentina. Desde
                el rock hasta el pop, cada uno de ellos aportará su estilo único
                al escenario.
              </p>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <Carousel interval={null} className="mb-3 w-100">
              {artistas.map((artista) => (
                <Carousel.Item key={artista.titulo}>
                  <ArtistaCard {...artista} />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
        <div className="mt-3 text-center">
          <a href="#top" className="text-white">
            Volver al inicio
          </a>
        </div>
      </section>

      {/* Sección de testimonios */}
      <section className="container my-5">
        <div className="">
        <h4 className="text-center mb-4">Testimonios</h4>
        <div className="row justify-content-center">
          {testimonios.map((t, i) => (
            <div className="col-md-4 mb-3" key={i}>
              <div
                style={{
                  background: "rgba(0,0,0,0.35)",
                  borderRadius: "1rem",
                  padding: "1.5rem",
                  minHeight: "150px",
                }}
              >
                <p className="text-white fst-italic">“{t.texto}”</p>
                <p className="text-end text-light mb-0">- {t.autor}</p>
              </div>
            </div>
          ))}
        </div>
          
        </div>
      </section>

      {/* Botón de ver cronograma */}
      <div className="text-center my-4">
        <a
          href="/cronograma"
          className="btn btn-warning btn-lg fw-bold shadow"
        >
          Ver cronograma completo
        </a>
      </div>

      {/* Sección playlist */}
      <section className="container my-5">
        <h4 className="text-center mb-4">
          Escuchá la playlist del festival
        </h4>
        <div className="d-flex justify-content-center">
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DXbwoaqxaoAVr?utm_source=generator"
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Playlist Sonidos de la Ciudad"
          ></iframe>
        </div>
      </section>
    </>
  );
};
