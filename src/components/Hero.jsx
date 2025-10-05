import React from 'react'
import coffeeImage from '../assets/img/b613643a-775e-4f8e-8f9c-227c813b6393.png'

const Hero = () => {
  return (
    <section className="hero" id="home" style={{ backgroundImage: `url(${coffeeImage})` }}>
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <div className="subtitle">Más que un café, una experiencia</div>
          <h2 className="main-title">CAFECITOS</h2>
          <p className="hero-description">
            Cafecitos conecta personas con el tipo de café perfecto para su estilo de vida. 
            Desde cafés elegantes para adultos mayores hasta ambientes vibrantes para jóvenes, 
            encuentra tu lugar ideal según tu perfil y preferencias.
          </p>
          <button className="btn-primary">Descargar App</button>
        </div>
      </div>
    </section>
  )
}

export default Hero