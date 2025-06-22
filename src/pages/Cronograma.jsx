import React, { useState, useEffect } from 'react';

const shows = [
  {
    id: 1,
    dia: '18',
    fecha: '18 de mayo',
    artista: 'Los Piojos',
    desc: 'Los Piojos marcaron una época del rock argentino con su fusión de rock, candombe y tango. Liderados por Ciro Martínez, su legado sigue vivo en cada recital que revive sus clásicos himnos populares.',
    mscUrl: '/los-piojos.mp3',
    imgUrl: '/los-piojos.jpg',
  },
  {
    id: 2,
    dia: '18',
    fecha: '18 de mayo',
    artista: 'El Zar',
    desc: 'El Zar es una banda argentina que mezcla pop, soul y rock con una identidad fresca. Sus canciones combinan lirismo urbano y sonidos actuales.',
    mscUrl: '/elzar.mp3',
    imgUrl: '/zar.avif',
  },
  {
    id: 3,
    dia: '19',
    fecha: '19 de mayo',
    artista: 'Conociendo Rusia',
    desc: 'Conociendo Rusia, proyecto liderado por Mateo Sujatovich, representa una nueva ola del rock nacional. Con melodías nostálgicas y letras íntimas, su música conecta con distintas generaciones que buscan poesía y emoción.',
    mscUrl: '/conociendo-rusia.mp3',
    imgUrl: '/ruso.jpg',
  },
  {
    id: 4,
    dia: '19',
    fecha: '19 de mayo',
    artista: 'NAFTA',
    desc: 'NAFTA fusiona soul, funk y música negra. Con una propuesta intensa en vivo, se ha convertido en una de las bandas más innovadoras del circuito independiente argentino.',
    mscUrl: '/nafta.mp3',
    imgUrl: '/nafta.jpg',
  },
  {
    id: 5,
    dia: '20',
    fecha: '20 de mayo',
    artista: 'Él Mató a un Policía Motorizado',
    desc: 'Banda platense referente del indie argentino. Con un estilo lo-fi, melódico y lírico, sus canciones capturan la melancolía y lo cotidiano.',
    mscUrl: '/elmato.mp3',
    imgUrl: '/elmato.jpg',
  },
];

export const Cronograma = () => {
  const [diaSeleccionado, setDiaSeleccionado] = useState('todos');
  const [favoritos, setFavoritos] = useState([]);
  const [soloFavoritos, setSoloFavoritos] = useState(false);

  useEffect(() => {
    const favs = localStorage.getItem('showsFavoritos');
    if (favs) setFavoritos(JSON.parse(favs));
  }, []);

  useEffect(() => {
    localStorage.setItem('showsFavoritos', JSON.stringify(favoritos));
  }, [favoritos]);

  const handleFavorito = (id) => {
    setFavoritos((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const showsFiltrados = shows.filter((show) => {
    if (soloFavoritos && !favoritos.includes(show.id)) return false;
    if (diaSeleccionado === 'todos') return true;
    return show.dia === diaSeleccionado;
  });

  return (
    <section style={{ maxWidth: 900, margin: '0 auto', padding: '2rem 1rem' }}>
      <h2 style={{ textAlign: 'center' }}>Cronograma</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginBottom: 24 }}>
        <button className={`btn ${diaSeleccionado==='todos' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => setDiaSeleccionado('todos')}>Todos</button>
        <button className={`btn ${diaSeleccionado==='18' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => setDiaSeleccionado('18')}>18 de mayo</button>
        <button className={`btn ${diaSeleccionado==='19' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => setDiaSeleccionado('19')}>19 de mayo</button>
        <button className={`btn ${diaSeleccionado==='20' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => setDiaSeleccionado('20')}>20 de mayo</button>
        <button className={`btn ${soloFavoritos ? 'btn-success' : 'btn-outline-success'}`} onClick={() => setSoloFavoritos((v) => !v)}>
          {soloFavoritos ? 'Ver todos' : 'Mostrar solo favoritos'}
        </button>
      </div>
      <div style={{ display: 'grid', gap: 32 }}>
        {showsFiltrados.length === 0 && <p style={{textAlign:'center'}}>No hay shows para mostrar.</p>}
        {showsFiltrados.map((show) => (
          <article key={show.id} className="card" style={{ display: 'flex', alignItems: 'center', gap: 24, padding: 16, background: 'var(--color-blanco)', borderRadius: 12, boxShadow: '0 2px 8px #0001' }}>
            <img src={show.imgUrl} alt={show.artista} style={{ width: 120, height: 120, objectFit: 'cover', borderRadius: 8, border: '2px solid var(--color-secundario)' }} />
            <div style={{ flex: 1 }}>
              <h3 style={{ margin: 0 }}>{show.artista}</h3>
              <p style={{ margin: '8px 0 4px', color: 'var(--color-primario)' }}><b>{show.fecha}</b></p>
              <p style={{ margin: 0 }}>{show.desc}</p>
              <audio controls style={{ marginTop: 8 }}>
                <source src={show.mscUrl} type="audio/mp3" />
                Tu navegador no soporta el elemento de audio.
              </audio>
            </div>
            <button
              className={`btn ${favoritos.includes(show.id) ? 'btn-warning' : 'btn-outline-warning'}`}
              style={{ height: 40 }}
              onClick={() => handleFavorito(show.id)}
              title={favoritos.includes(show.id) ? 'Quitar de favoritos' : 'Agregar a favoritos'}
            >
              {favoritos.includes(show.id) ? '★' : '☆'}
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};
