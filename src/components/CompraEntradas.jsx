import React from 'react'
import { useNavigate } from 'react-router-dom';

export const CompraEntradas = () => {
  const isDark = document.body.classList.contains("dark-mode");
  const navigate = useNavigate();
  return (
    <>
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{overflowX: 'hidden' }}
    >
      <div
        style={{
          maxWidth: 600,
          width: '100%',
          background: isDark ? "#232323" : "#fff",
          borderRadius: 12,
          boxShadow: isDark
            ? "0 2px 16px rgba(0,0,0,0.25)"
            : "0 2px 8px #0001",
          padding: 32,
          color: isDark ? "#f2f2f2" : "#222",
          border: isDark ? "1.5px solid #444" : "none",
          transition: "background 0.3s, color 0.3s"
        }}
      >
        <h2 style={{ color: isDark ? "#90caf9" : "#1a237e", fontWeight: 700, marginBottom: 8 }}>
          Compra de entradas
        </h2>
        <div
          style={{
            width: 60,
            height: 4,
            background: isDark ? "#1976d2" : "#90caf9",
            borderRadius: 2,
            marginBottom: 24
          }}
        />
        <p style={{ fontSize: 17, color: isDark ? "#e0e0e0" : "#333", marginBottom: 12 }}>
          Para comprar tus entradas, visita nuestro sitio web oficial o acércate a los puntos de venta autorizados.
        </p>
        <p style={{ fontSize: 16, color: isDark ? "#bdbdbd" : "#555", marginBottom: 28 }}>
          Recuerda que las entradas son limitadas y se agotan rápidamente, así que asegúrate de conseguir la tuya a tiempo.
        </p>
        <button
          onClick={() => navigate("/carrito-entradas")}
          style={{
            background: isDark
              ? "linear-gradient(90deg, #1976d2 60%, #333 100%)"
              : "linear-gradient(90deg, #1976d2 60%, #64b5f6 100%)",
            color: "#fff",
            border: 0,
            borderRadius: 8,
            padding: "14px 0",
            fontSize: 18,
            fontWeight: 600,
            width: "100%",
            boxShadow: isDark
              ? "0 2px 16px rgba(0,0,0,0.25)"
              : "0 2px 8px #1976d233",
            cursor: "pointer",
            transition: "background 0.2s"
          }}
        >
          Comprar entradas
        </button>
      </div>
    </div>
    </>
  )
}
