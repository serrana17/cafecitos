import React from 'react'

const CTA = () => {
  const handleDownload = (store) => {
    alert(`Redirigiendo a ${store}...`)
  }

  return (
    <section className="cta" id="cta">
      <div className="container">
        <div className="cta-content">
          <h3>¿Listo para tu experiencia perfecta?</h3>
          <p>Descarga Cafecitos y descubre más que un café, una experiencia personalizada</p>
          <div className="download-buttons">
            <button className="btn-download" onClick={() => handleDownload('App Store')}>
              <span className="download-icon">📱</span>
              <div className="download-text">
                <span className="download-label">Descargar en</span>
                <span className="download-store">App Store</span>
              </div>
            </button>
            <button className="btn-download" onClick={() => handleDownload('Google Play')}>
              <span className="download-icon">🤖</span>
              <div className="download-text">
                <span className="download-label">Descargar en</span>
                <span className="download-store">Google Play</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA