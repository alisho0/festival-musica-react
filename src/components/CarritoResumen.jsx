import React from 'react'

export const CarritoResumen = ({ isDark, DIAS, ENTRADAS, cantidades, subtotal, handlePagar}) => {
  return (
    <>
      <div
        className="carrito-resumen"
        style={{
          flex: 0.7,
          background: isDark ? "#181818" : "#f8f8f8",
          color: isDark ? "#f2f2f2" : "#222",
          border: isDark ? "1.5px solid #333" : "none",
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <h3 style={{ color: isDark ? "#90caf9" : "#1a237e" }}>Resumen</h3>
        <div
          style={{
            maxHeight: 220,
            overflowY: "auto",
            marginBottom: 12,
            flex: 1,
          }}
        >
          {DIAS.map(
            (dia) =>
              ENTRADAS.some((e) => cantidades[dia.id][e.id] > 0) && (
                <div key={dia.id} style={{ marginBottom: 10 }}>
                  <div
                    style={{
                      fontWeight: 600,
                      color: isDark ? "#90caf9" : "#1976d2",
                    }}
                  >
                    {dia.nombre}
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {ENTRADAS.filter((e) => cantidades[dia.id][e.id] > 0).map(
                      (entrada) => (
                        <li
                          key={entrada.id}
                          style={{
                            marginBottom: 4,
                            color: isDark ? "#e0e0e0" : "#222",
                          }}
                        >
                          {entrada.nombre} x {cantidades[dia.id][entrada.id]} ={" "}
                          <strong>
                            $
                            {(
                              cantidades[dia.id][entrada.id] * entrada.precio
                            ).toLocaleString()}
                          </strong>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )
          )}
        </div>
        <div
          style={{
            margin: "16px 0",
            fontWeight: "bold",
            fontSize: 18,
            color: isDark ? "#90caf9" : "#1a237e",
          }}
        >
          Total: ${subtotal.toLocaleString()}
        </div>
        <button
          onClick={handlePagar}
          style={{
            background: isDark ? "#1976d2" : "#1976d2",
            color: "#fff",
            border: 0,
            borderRadius: 8,
            padding: "16px 0",
            fontSize: 18,
            cursor: "pointer",
            width: "100%",
            marginTop: "auto",
            fontWeight: 600,
            boxShadow: isDark
              ? "0 2px 16px rgba(0,0,0,0.25)"
              : "0 2px 8px #1976d233",
          }}
        >
          Pagar
        </button>
      </div>
    </>
  )
}
