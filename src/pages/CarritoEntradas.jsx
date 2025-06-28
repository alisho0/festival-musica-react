import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "../index.css";
import { CarritoCard } from "../components/CarritoCard";
import { CarritoResumen } from "../components/CarritoResumen";

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
  const [isDark, setIsDark] = useState(() =>
    document.body.classList.contains("dark-mode")
  );

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
        (accEnt, entrada) =>
          accEnt + cantidades[dia.id][entrada.id] * entrada.precio,
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
    // Resumen por dia
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
            resumen += `<li>${entrada.nombre} x ${
              cantidades[dia.id][entrada.id]
            } = $${(
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
    <div
      className="carrito-container"
      style={{
        display: "flex",
        gap: 32,
        justifyContent: "center",
        marginTop: 40,
      }}
    >
      {/* columna izq de seleccion de dias y entradas */}
      <CarritoCard
        isDark={isDark}
        DIAS={DIAS}
        ENTRADAS={ENTRADAS}
        handleCantidad={handleCantidad}
        cantidades={cantidades}
      />
      {/* columna derecha de resumen y pagar */}
      <CarritoResumen
        isDark={isDark}
        DIAS={DIAS}
        ENTRADAS={ENTRADAS}
        cantidades={cantidades}
        subtotal={subtotal}
        handlePagar={handlePagar}
      />
    </div>
  );
}
