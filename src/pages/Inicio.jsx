import React from "react";

export const Inicio = () => {
  return (
    <>
      {" "}
      <body>
        <header class="navegacion">
          <h1>Festival "Sonidos de la Ciudad"</h1>
          <nav>
            <ul>
              <li>
                <a href="index.html">Inicio</a>
              </li>
              <li>
                <a href="pages/artistas.html">Artistas</a>
              </li>
              <li>
                <a href="pages/cronograma.html">Cronograma</a>
              </li>
              <li>
                <a href="pages/entradas.html">Entradas</a>
              </li>
              <li>
                <a href="pages/ubicacion.html">Ubicación</a>
              </li>
              <li>
                <a href="pages/contacto.html">Contacto</a>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <section>
            <h2 class="pulse">¡Bienvenido al festival!</h2>
            <p>
              Del 2 al 4 de mayo en el Nodo Tecnológico. No te pierdas los
              mejores sonidos de la ciudad.
            </p>
          </section>

          <section>
            <h3>
              <i class="fa-solid fa-calendar"></i>Fechas del festival
            </h3>
            <ul>
              <li>
                <i class="fa-solid fa-check"></i>2 de mayo - 18:00 a 21:00
              </li>
              <li>
                <i class="fa-solid fa-check"></i>3 de mayo - 18:00 a 21:00
              </li>
              <li>
                <i class="fa-solid fa-check"></i>4 de mayo - 19:00 a 21:00
              </li>
            </ul>

            <h3>
              <i class="fa-solid fa-music"></i>Artistas principales
            </h3>
            <ul>
              <li>
                <i class="fa-solid fa-check"></i>Los Piojos
              </li>
              <li>
                <i class="fa-solid fa-check"></i>Conociendo Rusia
              </li>
              <li>
                <i class="fa-solid fa-check"></i>Él Mató a un Policía Motorizado
              </li>
              <li>
                <i class="fa-solid fa-check"></i>El Zar
              </li>
              <li>
                <i class="fa-solid fa-check"></i>NAFTA
              </li>
            </ul>
          </section>

          <section>
            <h3>Escuchá un adelanto de Los Piojos</h3>
            <iframe
              width="500"
              height="300"
              src="https://www.youtube.com/embed/Ic_URsKMZVM"
              title="Me matan Limón! – Los Piojos | FIESTA ¡FA! #13 Complejo C Quilmes Rock"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </section>
        </main>

        <footer>
          <p>2025 Sonidos de la Ciudad</p>
          <p>
            Contacto:
            <a href="mailto:sonidosciudad@gmail.com">sonidosciudad@gmail.com</a>
          </p>
        </footer>
      </body>
    </>
  );
};
