import React from 'react'

export const Ubicacion = () => {
  return (
    <>  
    <main>
      <h2>¿Dónde se realiza el festival?</h2>
      <p>El evento tendrá lugar en el <strong>Nodo Tecnológico</strong> de Santiago del Estero.</p>
    <section>
      <h3 className='text-white'>Mapa del evento</h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7061.232706150243!2d-64.26144925906056!3d-27.759976861718226!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943b53cc97f9d267%3A0x9d6028c42070faf7!2sNodo%20Tecnol%C3%B3gico!5e0!3m2!1ses!2sar!4v1747688973238!5m2!1ses!2sar"
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </section>
  </main>
  </>
  )
}
