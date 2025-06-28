import React from 'react'

export const CarritoCard = ({isDark, DIAS, ENTRADAS, handleCantidad, cantidades}) => {
  return (
    <>
      <div
        className="carrito-card"
        style={{
          flex: 1,
          background: isDark ? "#232323" : "#fff",
          color: isDark ? "#f2f2f2" : "#222",
          border: isDark ? "1.5px solid #444" : "none",
          boxShadow: isDark ? "0 2px 16px rgba(0,0,0,0.25)" : "0 2px 8px #0001",
        }}
      >
        <h2 style={{ color: isDark ? "#90caf9" : "#1a237e" }}>
          Seleccioná tus entradas por día
        </h2>
        {DIAS.map((dia) => (
          <div
            key={dia.id}
            style={{
              marginBottom: 32,
              borderBottom: isDark ? "1px solid #333" : "1px solid #eee",
              paddingBottom: 18,
            }}
          >
            <div
              style={{
                fontWeight: 700,
                color: isDark ? "#90caf9" : "#1976d2",
                marginBottom: 10,
              }}
            >
              {dia.nombre}
            </div>
            {ENTRADAS.map((entrada) => (
              <div
                key={entrada.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 18,
                }}
              >
                <div style={{ flex: 1 }}>
                  <strong style={{ color: isDark ? "#e0e0e0" : "#222" }}>
                    {entrada.nombre}
                  </strong>
                  <div
                    style={{ fontSize: 14, color: isDark ? "#bdbdbd" : "#555" }}
                  >
                    ${entrada.precio.toLocaleString()}
                  </div>
                </div>
                <button
                  onClick={() => handleCantidad(dia.id, entrada.id, -1)}
                  style={{
                    margin: "0 8px",
                    background: isDark ? "#232323" : "#fff",
                    color: isDark ? "#fff" : "#222",
                    border: isDark ? "1px solid #555" : "1px solid #222",
                  }}
                >
                  -
                </button>
                <span
                  style={{
                    minWidth: 24,
                    textAlign: "center",
                    color: isDark ? "#fff" : "#222",
                  }}
                >
                  {cantidades[dia.id][entrada.id]}
                </span>
                <button
                  onClick={() => handleCantidad(dia.id, entrada.id, 1)}
                  style={{
                    margin: "0 8px",
                    background: isDark ? "#232323" : "#fff",
                    color: isDark ? "#fff" : "#222",
                    border: isDark ? "1px solid #555" : "1px solid #222",
                  }}
                >
                  +
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}
