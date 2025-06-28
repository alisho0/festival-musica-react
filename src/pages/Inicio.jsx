import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cocaColaLogo from "../assets/sponsors/coca-cola.jpg";
import claroLogo from "../assets/sponsors/claro.jpg";
import itseLogo from "../assets/sponsors/itse.jpg";

export const Inicio = () => {
  // Estado para cuenta regresiva
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  // Fecha del festival
  const festivalDate = new Date("2025-07-18T20:00:00-03:00"); // 18 de julio de 2025, 20:00hs Argentina

  // Sponsors de ejemplo
  const sponsors = [
    {
      name: "Coca-Cola",
      logo: cocaColaLogo,
    },
    {
      name: "Claro",
      logo: claroLogo,
    },
    {
      name: "ITSE",
      logo: itseLogo,
    },
  ];

  // Razones para venir
  const razones = [
    { icon: "fa-solid fa-music", text: "Artistas de primer nivel" },
    { icon: "fa-solid fa-users", text: "Ambiente único y seguro" },
    { icon: "fa-solid fa-star", text: "Experiencia inolvidable" },
    { icon: "fa-solid fa-utensils", text: "Gastronomía y foodtrucks" },
  ];

  // Animación de bienvenida
  useEffect(() => {
    Swal.fire({
      title: "¡Bienvenido al festival!",
      text: "Disfruta la experiencia Sonidos de la Ciudad",
      icon: "info",
      confirmButtonText: "OK",
      timer: 2500,
      timerProgressBar: true,
      showConfirmButton: false,
      toast: true,
      position: "top-end",
    });
  }, []);

  // Cuenta regresiva
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = festivalDate - now;
      if (diff > 0) {
        setCountdown({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Banner con slider y parallax */}
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="banner-bg"
        style={{ overflow: "hidden", width: "100vw", position: "relative", left: "50%", right: "50%", marginLeft: "-50vw", marginRight: "-50vw" }}
      >
        <div className="countdown countdown-banner">
          <h2>¡Faltan solo:</h2>
          <div className="countdown-numbers">
            <span>{countdown.days}d</span> <span>{countdown.hours}h</span>{" "}
            <span>{countdown.minutes}m</span> <span>{countdown.seconds}s</span>
          </div>
          <p>para el festival</p>
        </div>
      </motion.section>

      {/* Cartel de bienvenida */}
      <section
        className="bienvenida-section container"
        style={{ textAlign: "center", margin: "2rem auto 0 auto" }}
      >
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bienvenida-banner"
        >
          <h1
            className="fw-bold pulse"
            style={{
              fontSize: "2.3rem",
              color: "#05299e",
              marginBottom: "0.5rem",
            }}
          >
            ¡Bienvenido al festival Sonidos de la Ciudad!
          </h1>
          <p style={{ fontSize: "1.2rem", color: "#333" }}>
            Del 18 al 20 de julio en el Nodo Tecnológico. No te pierdas los
            mejores sonidos de la ciudad.
          </p>
        </motion.div>
      </section>

      <main className="container-fluid px-0" style={{overflowX: 'hidden'}}>
        {/* Razones para venir */}
        <motion.section
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>¿Por qué venir?</h2>
          <div className="razones-lista row justify-content-center">
            {razones.map((r, i) => (
              <motion.div
                key={i}
                className="razon-card col-12 col-sm-6 col-md-3 mb-3"
                whileHover={{ scale: 1.08 }}
                style={{ minWidth: 0 }}
              >
                <i className={r.icon + " razon-icono"}></i>
                <span>{r.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Fechas y artistas en columnas alineadas */}
        <motion.section
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="fechas-artistas-grid ">
            <div className="fechas-col ">
              <h3>Fechas del festival</h3>
              <ul>
                <li>18 de mayo - 20:00 a 00:00</li>
                <li>19 de mayo - 20:00 a 00:00</li>
                <li>20 de mayo - 20:00 a 00:00</li>
              </ul>
            </div>
            <div className="artistas-col ">
              <h3>Artistas principales</h3>
              <ul>
                <li>Los Piojos</li>
                <li>Conociendo Rusia</li>
                <li>Él Mató a un Policía Motorizado</li>
                <li>El Zar</li>
                <li>NAFTA</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Video */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>Escuchá un adelanto de Los Piojos</h3>
          <div className="d-flex justify-content-center">
            <iframe
              style={{maxWidth: '100%', width: 500, height: 300}}
              src="https://www.youtube.com/embed/Ic_URsKMZVM"
              title="Me matan Limón! – Los Piojos | FIESTA ¡FA! #13 Complejo C Quilmes Rock"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </motion.section>

        {/* Sponsors */}
        <motion.section
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="sponsors-section"
        >
          <h2>Sponsors</h2>
          <div className="sponsors-lista row justify-content-center">
            {sponsors.map((s, i) => (
              <div className="sponsor-card col-6 col-md-4 col-lg-3 mb-3 d-flex flex-column align-items-center" key={i}>
                <img src={s.logo} alt={s.name} style={{maxWidth: '100%', height: 'auto'}} />
                <span>{s.name}</span>
              </div>
            ))}
          </div>
        </motion.section>
      </main>

      <footer className="container-fluid px-0" style={{overflowX: 'hidden'}}>
        <p>2025 Sonidos de la Ciudad</p>
        <p>
          Contacto: {" "}
          <a href="mailto:sonidosciudad@gmail.com">sonidosciudad@gmail.com</a>
        </p>
      </footer>
    </>
  );
};

export default Inicio;
