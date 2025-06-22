import React from "react";
import { useNavigate } from "react-router-dom";
import { CompraEntradas } from "../components/CompraEntradas";

export const Entradas = () => {
  // Detectar modo oscuro
  return (
    <>
    <main>
      <section>
        <h2 className="pulse">Tipos de entrada</h2>
        <p>
          El festival ofrece estos diferentes tipos de entradas para que puedas
          disfrutar de la música y el ambiente a tu manera.
        </p>
        <ul>
          <li>Entrada Diaria</li>
          <li>Entrada VIP</li>
          <li>Combo 3 días</li>
        </ul>
      </section>
      <section>
        <div className="entradas-info">
          <h2>Precios y beneficios</h2>
          <table className="table table-bordered table-striped table-hover align-middle text-center">
            <thead className="table-primary">
              <tr>
                <th>Tipo de entrada</th>
                <th>Precio</th>
                <th>Beneficios</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Entrada General</td>
                <td>$10,000</td>
                <td>Acceso a todas las áreas del festival durante un día.</td>
              </tr>
              <tr>
                <td>Entrada VIP</td>
                <td>$20,000</td>
                <td>
                  Acceso a todas las áreas del festival y zona VIP 
                </td>
              </tr>
              <tr>
                <td>Entrada Backstage</td>
                <td>$35,000</td>
                <td>
                  Acceso a todas las áreas del festival, zona VIP y meet & greet
                  con artistas.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      <CompraEntradas />
      </section>
      </main>
    </>
  );
};
