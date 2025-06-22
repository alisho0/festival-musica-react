import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Swal from "sweetalert2";


const schema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Debe ser un email válido"),
  asunto: z.string().min(3, "El asunto debe tener al menos 3 caracteres"),
  mensaje: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

export default function Contacto() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    Swal.fire({
      icon: "success",
      title: "Mensaje enviado",
      text: "Gracias por contactarnos. Te responderemos pronto.",
    });
    reset();
  };

  return (
    <div className="container-contacto">
      <section className="contacto-section">
        <h2>Contacto</h2>
        <p>Si tienes alguna pregunta o necesitas más información, no dudes en contactarnos.</p>

        <form onSubmit={handleSubmit(onSubmit)} className="formulario-contacto">
          <div className="form-group">
            <label>Nombre:</label>
            <input type="text" {...register("nombre")} />
            {errors.nombre && <small>{errors.nombre.message}</small>}
          </div>

          <div className="form-group">
            <label>Correo electrónico:</label>
            <input type="email" {...register("email")} />
            {errors.email && <small>{errors.email.message}</small>}
          </div>

          <div className="form-group">
            <label>Asunto:</label>
            <input type="text" {...register("asunto")} />
            {errors.asunto && <small>{errors.asunto.message}</small>}
          </div>

          <div className="form-group">
            <label>Mensaje:</label>
            <textarea rows="4" {...register("mensaje")} />
            {errors.mensaje && <small>{errors.mensaje.message}</small>}
          </div>

          <button type="submit">Enviar</button>
        </form>
      </section>
    </div>
  );
}
