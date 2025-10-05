import React from 'react'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>Cafecitos<span className="dot">.</span></h1>
        </div>
            <nav className="nav">
              <a href="#home">Inicio</a>
              <span>/</span>
              <a href="#products">Productos</a>
              <span>/</span>
              <a href="#nearme">Cerca de Mí</a>
              <span>/</span>
              <a href="#contact">Contacto</a>
            </nav>
        <div className="header-actions">
          <button className="btn-signin">Iniciar Sesión</button>
          <div className="user-icon">👤</div>
        </div>
      </div>
    </header>
  )
}

export default Header