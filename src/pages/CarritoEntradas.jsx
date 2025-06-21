import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "../index.css";

const ENTRADAS = [
  { id: 1, nombre: "General", precio: 10000 },
  { id: 2, nombre: "VIP", precio: 20000 },
  { id: 3, nombre: "Backstage", precio: 35000 },
];

const DIAS = [
  { id: 1, nombre: "Día 1 - Viernes" },
  { id: 2, nombre: "Día 2 - Sábado" },
  { id: 3, nombre: "Día 3 - Domingo" },
];

// Estado inicial: cantidades[día][tipoEntrada] = cantidad
const getInitialCantidades = () => {
  const obj = {};
  DIAS.forEach((dia) => {
    obj[dia.id] = {};
    ENTRADAS.forEach((e) => {
      obj[dia.id][e.id] = 0;
    });
  });
  return obj;
};

export default function CarritoEntradas() {
  // Estado reactivo para modo oscuro
  const [isDark, setIsDark] = useState(() => document.body.classList.contains("dark-mode"));
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.body.classList.contains("dark-mode"));
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const [cantidades, setCantidades] = useState(getInitialCantidades());

  const handleCantidad = (diaId, entradaId, valor) => {
    setCantidades((prev) => ({
      ...prev,
      [diaId]: {
        ...prev[diaId],
        [entradaId]: Math.max(0, prev[diaId][entradaId] + valor),
      },
    }));
  };

  const subtotal = DIAS.reduce(
    (accDias, dia) =>
      accDias +
      ENTRADAS.reduce(
        (accEnt, entrada) => accEnt + cantidades[dia.id][entrada.id] * entrada.precio,
        0
      ),
    0
  );

  const handlePagar = () => {
    if (subtotal === 0) {
      Swal.fire({
        icon: "warning",
        title: "Carrito vacío",
        text: "Agrega al menos una entrada para continuar.",
      });
      return;
    }
    // Resumen por día
    let resumen = "";
    DIAS.forEach((dia) => {
      const totalDia = ENTRADAS.reduce(
        (acc, entrada) => acc + cantidades[dia.id][entrada.id],
        0
      );
      if (totalDia > 0) {
        resumen += `<b>${dia.nombre}</b><ul style='text-align:left;'>`;
        ENTRADAS.forEach((entrada) => {
          if (cantidades[dia.id][entrada.id] > 0) {
            resumen += `<li>${entrada.nombre} x ${cantidades[dia.id][entrada.id]} = $${(
              cantidades[dia.id][entrada.id] * entrada.precio
            ).toLocaleString()}</li>`;
          }
        });
        resumen += `</ul>`;
      }
    });
    Swal.fire({
      icon: "success",
      title: "¡Compra realizada!",
      html: `${resumen}<b>Total:</b> $${subtotal.toLocaleString()}`,
      confirmButtonText: "OK",
      width: 500,
    });
    setCantidades(getInitialCantidades());
  };

  return (
    <div className="carrito-container" style={{ display: "flex", gap: 32, justifyContent: "center", marginTop: 40 }}>
      {/* Columna izquierda: selección de días y entradas */}
      <div className="carrito-card" style={{ flex: 1, background: isDark ? "#232323" : "#fff", color: isDark ? "#f2f2f2" : "#222", border: isDark ? "1.5px solid #444" : "none", boxShadow: isDark ? "0 2px 16px rgba(0,0,0,0.25)" : "0 2px 8px #0001" }}>
        <h2 style={{ color: isDark ? "#90caf9" : "#1a237e" }}>Seleccioná tus entradas por día</h2>
        {DIAS.map((dia) => (
          <div key={dia.id} style={{ marginBottom: 32, borderBottom: isDark ? "1px solid #333" : "1px solid #eee", paddingBottom: 18 }}>
            <div style={{ fontWeight: 700, color: isDark ? "#90caf9" : "#1976d2", marginBottom: 10 }}>{dia.nombre}</div>
            {ENTRADAS.map((entrada) => (
              <div key={entrada.id} style={{ display: "flex", alignItems: "center", marginBottom: 18 }}>
                <div style={{ flex: 1 }}>
                  <strong style={{ color: isDark ? "#e0e0e0" : "#222" }}>{entrada.nombre}</strong>
                  <div style={{ fontSize: 14, color: isDark ? "#bdbdbd" : "#555" }}>${entrada.precio.toLocaleString()}</div>
                </div>
                <button onClick={() => handleCantidad(dia.id, entrada.id, -1)} style={{ margin: "0 8px", background: isDark ? "#232323" : "#fff", color: isDark ? "#fff" : "#222", border: isDark ? "1px solid #555" : "1px solid #222" }}>-</button>
                <span style={{ minWidth: 24, textAlign: "center", color: isDark ? "#fff" : "#222" }}>{cantidades[dia.id][entrada.id]}</span>
                <button onClick={() => handleCantidad(dia.id, entrada.id, 1)} style={{ margin: "0 8px", background: isDark ? "#232323" : "#fff", color: isDark ? "#fff" : "#222", border: isDark ? "1px solid #555" : "1px solid #222" }}>+</button>
              </div>
            ))}
          </div>
        ))}
      </div>
      {/* Columna derecha: resumen y pagar */}
      <div className="carrito-resumen" style={{ flex: 0.7, background: isDark ? "#181818" : "#f8f8f8", color: isDark ? "#f2f2f2" : "#222", border: isDark ? "1.5px solid #333" : "none", display: "flex", flexDirection: "column", height: "100%" }}>
        <h3 style={{ color: isDark ? "#90caf9" : "#1a237e" }}>Resumen</h3>
        <div style={{ maxHeight: 220, overflowY: "auto", marginBottom: 12, flex: 1 }}>
          {DIAS.map(dia => (
            ENTRADAS.some(e => cantidades[dia.id][e.id] > 0) && (
              <div key={dia.id} style={{ marginBottom: 10 }}>
                <div style={{ fontWeight: 600, color: isDark ? "#90caf9" : "#1976d2" }}>{dia.nombre}</div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {ENTRADAS.filter(e => cantidades[dia.id][e.id] > 0).map(entrada => (
                    <li key={entrada.id} style={{ marginBottom: 4, color: isDark ? "#e0e0e0" : "#222" }}>
                      {entrada.nombre} x {cantidades[dia.id][entrada.id]} = <strong>${(cantidades[dia.id][entrada.id] * entrada.precio).toLocaleString()}</strong>
                    </li>
                  ))}
                </ul>
              </div>
            )
          ))}
        </div>
        <div style={{ margin: "16px 0", fontWeight: "bold", fontSize: 18, color: isDark ? "#90caf9" : "#1a237e" }}>
          Total: ${subtotal.toLocaleString()}
        </div>
        <button onClick={handlePagar} style={{ background: isDark ? "#1976d2" : "#1976d2", color: "#fff", border: 0, borderRadius: 8, padding: "16px 0", fontSize: 18, cursor: "pointer", width: "100%", marginTop: "auto", fontWeight: 600, boxShadow: isDark ? "0 2px 16px rgba(0,0,0,0.25)" : "0 2px 8px #1976d233" }}>
          Pagar
        </button>
      </div>
    </div>
  );
}
