import React, { useState, useEffect } from 'react';

const shows = [
	{
		id: 1,
		dia: '18',
		fecha: '18 de mayo',
		artista: 'Los Piojos',
    mscUrl: '/los-piojos.mp3',
		imgUrl: '/los-piojos.jpg',
	},
	{
		id: 2,
		dia: '18',
		fecha: '18 de mayo',
		artista: 'El Zar',
    mscUrl: '/elzar.mp3',
		imgUrl: '/zar.avif',
	},
	{
		id: 3,
		dia: '19',
		fecha: '19 de mayo',
		artista: 'Conociendo Rusia',
    mscUrl: '/conociendo-rusia.mp3',
		imgUrl: '/ruso.jpg',
	},
	{
		id: 4,
		dia: '19',
		fecha: '19 de mayo',
		artista: 'NAFTA',	
    mscUrl: '/nafta.mp3',
		imgUrl: '/nafta.jpg',
	},
	{
		id: 5,
		dia: '20',
		fecha: '20 de mayo',
		artista: 'Él Mató a un Policía Motorizado',mscUrl: '/elmato.mp3',
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
		<section
			className="container"
			style={{
				maxWidth: 900,
				margin: '0 auto',
				padding: '2rem 1rem',
				overflowX: 'hidden',
			}}
		>
			<h2 style={{ textAlign: 'center' }}>Cronograma</h2>
			<div className="row justify-content-center mb-4">
				<div className="col-auto">
					<button
						className={`btn ${
							diaSeleccionado === 'todos'
								? 'btn-primary'
								: 'btn-outline-primary'
						} mb-2`}
						onClick={() => setDiaSeleccionado('todos')}
					>
						Todos
					</button>
				</div>
				<div className="col-auto">
					<button
						className={`btn ${
							diaSeleccionado === '18'
								? 'btn-primary'
								: 'btn-outline-primary'
						} mb-2`}
						onClick={() => setDiaSeleccionado('18')}
					>
						18 de mayo
					</button>
				</div>
				<div className="col-auto">
					<button
						className={`btn ${
							diaSeleccionado === '19'
								? 'btn-primary'
								: 'btn-outline-primary'
						} mb-2`}
						onClick={() => setDiaSeleccionado('19')}
					>
						19 de mayo
					</button>
				</div>
				<div className="col-auto">
					<button
						className={`btn ${
							diaSeleccionado === '20'
								? 'btn-primary'
								: 'btn-outline-primary'
						} mb-2`}
						onClick={() => setDiaSeleccionado('20')}
					>
						20 de mayo
					</button>
				</div>
				<div className="col-auto">
					<button
						className={`btn ${
							soloFavoritos
								? 'btn-success'
								: 'btn-outline-success'
						} mb-2`}
						onClick={() => setSoloFavoritos((v) => !v)}
					>
						{soloFavoritos
							? 'Ver todos'
							: 'Mostrar solo favoritos'}
					</button>
				</div>
			</div>
			<div
				className="row g-4"
			>
				{showsFiltrados.length === 0 && (
					<p style={{ textAlign: 'center' }}>
						No hay shows para mostrar.
					</p>
				)}
				{showsFiltrados.map((show) => (
					<div key={show.id} className="col-12 col-md-6">
						<article
							className="card d-flex flex-row align-items-center mb-4 p-3"
							style={{
								borderRadius: 12,
								boxShadow: '0 2px 8px #0001',
								overflowX: 'auto',
							}}
						>
							<img
								src={show.imgUrl}
								alt={show.artista}
								style={{
									width: 120,
									height: 120,
									objectFit: 'cover',
									borderRadius: 8,
									border: '2px solid var(--color-secundario)',
									maxWidth: '100%',
								}}
							/>
							<div
								style={{ flex: 1, minWidth: 0 }}
								className="ms-3"
							>
								<h3 style={{ margin: 0 }}>{show.artista}</h3>
								<p
									style={{
										margin: '8px 0 4px',
										color: 'var(--color-primario)',
									}}
								>
									<b>{show.fecha}</b>
								</p>
								<p style={{ margin: 0 }}>{show.desc}</p>
								<audio
									controls
									style={{ marginTop: 8, maxWidth: '100%' }}
								>
									<source src={show.mscUrl} type="audio/mp3" />
									Tu navegador no soporta el elemento de audio.
								</audio>
							</div>
							<button
								className={`btn ${
									favoritos.includes(show.id)
										? 'btn-warning'
										: 'btn-outline-warning'
								}`}
								style={{ height: 40, minWidth: 40 }}
								onClick={() => handleFavorito(show.id)}
								title={
									favoritos.includes(show.id)
										? 'Quitar de favoritos'
										: 'Agregar a favoritos'
								}
							>
								{favoritos.includes(show.id) ? '★' : '☆'}
							</button>
						</article>
					</div>
				))}
			</div>
		</section>
	);
};
