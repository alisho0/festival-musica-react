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

  // Slider imágenes
  const sliderImages = [
    "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
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

  // Configuración del slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
  };

  return (
    <>
      {/* Banner con slider y parallax */}
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="banner-parallax"
      >
        <div className="banner-bg-seq"></div>
        <Slider {...sliderSettings}>
          {sliderImages.map((img, idx) => (
            <div key={idx}>
              <div
                className="slider-img"
                style={{ backgroundImage: `url(${img})` }}
              ></div>
            </div>
          ))}
        </Slider>
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
        className="bienvenida-section"
        style={{ textAlign: "center", margin: "2rem 0 0 0" }}
      >
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bienvenida-banner"
        >
          <h1
            className="fw-bold"
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

      <main>
        {/* Razones para venir */}
        <motion.section
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>¿Por qué venir?</h2>
          <div className="razones-lista">
            {razones.map((r, i) => (
              <motion.div
                key={i}
                className="razon-card"
                whileHover={{ scale: 1.08 }}
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
          <div className="fechas-artistas-grid">
            <div className="fechas-col">
              <h3>Fechas del festival</h3>
              <ul>
                <li>18 de mayo - 20:00 a 00:00</li>
                <li>19 de mayo - 20:00 a 00:00</li>
                <li>20 de mayo - 20:00 a 00:00</li>
              </ul>
            </div>
            <div className="artistas-col">
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
          <iframe
            width="500"
            height="300"
            src="https://www.youtube.com/embed/Ic_URsKMZVM"
            title="Me matan Limón! – Los Piojos | FIESTA ¡FA! #13 Complejo C Quilmes Rock"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
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
          <div className="sponsors-lista">
            {sponsors.map((s, i) => (
              <div className="sponsor-card" key={i}>
                <img src={s.logo} alt={s.name} />
                <span>{s.name}</span>
              </div>
            ))}
          </div>
        </motion.section>
      </main>

      <footer>
        <p>2025 Sonidos de la Ciudad</p>
        <p>
          Contacto:{" "}
          <a href="mailto:sonidosciudad@gmail.com">sonidosciudad@gmail.com</a>
        </p>
      </footer>
    </>
  );
};

export default Inicio;
