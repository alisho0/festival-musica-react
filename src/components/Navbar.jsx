import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      localStorage.setItem("darkMode", !prev);
      return !prev;
    })
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <>
      <header className="navegacion">
        <h1 className="pulse">Festival "Sonidos de la Ciudad"</h1>
        <button className="modo-btn" onClick={toggleDarkMode}>
          {darkMode ? "☀️ Modo Claro" : "🌙 Modo Oscuro"}
        </button>
        <nav>
          <ul>
            <li>
                <Link to={"/"} >Inicio</Link>
            </li>
            <li>
                <Link to={"/artistas"} >Artistas</Link>
            </li>
            <li>
                <Link to={"/cronograma"} >Cronograma</Link>
            </li>
            <li>
                <Link to={"/entradas"} >Entradas</Link>
            </li>
            <li>
                <Link to={"/ubicacion"} >Ubicación</Link>
            </li>
            <li>
                <Link to={"/contacto"} >Contacto</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
