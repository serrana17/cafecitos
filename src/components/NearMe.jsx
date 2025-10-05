import React from 'react'
import './../App.css' // Import App.css for global styles

const NearMe = () => {
  const nearbyCafes = [
    {
      id: 1,
      name: "Café Elegante Centro",
      type: "Elegante",
      distance: "0.5 km",
      rating: "4.8",
      description: "Ambiente tranquilo perfecto para adultos mayores",
      features: ["Tazas elegantes", "Ambiente relajado", "Comida premium"]
    },
    {
      id: 2,
      name: "Aesthetic Coffee Bar",
      type: "Aesthetic",
      distance: "0.8 km",
      rating: "4.6",
      description: "Lugar perfecto para jóvenes y redes sociales",
      features: ["Instagrameable", "Para llevar", "Ambiente vibrante"]
    },
    {
      id: 3,
      name: "Café Especialidad Pro",
      type: "Especialidad",
      distance: "1.2 km",
      rating: "4.9",
      description: "Ideal para profesionales y trabajo remoto",
      features: ["WiFi confiable", "Café premium", "Ambiente productivo"]
    },
    {
      id: 4,
      name: "Café Familiar Plaza",
      type: "Familiar",
      distance: "1.5 km",
      rating: "4.7",
      description: "Espacio amplio perfecto para familias",
      features: ["Menú infantil", "Espacios amplios", "Ambiente familiar"]
    }
  ]

  return (
    <section className="nearme" id="nearme">
      <div className="container">
        <h3 className="section-title">Cerca de Mí</h3>
        <p className="nearme-subtitle">
          Encuentra la experiencia perfecta cerca de donde estás. 
          Descubre cafés que se adaptan a tu perfil y momento de vida.
        </p>
        
        <div className="map-container">
          <div className="map-placeholder">
            <div className="map-icon">🗺️</div>
            <h4>Mapa Interactivo</h4>
            <p>Explora cafés cerca de tu ubicación</p>
            <button className="btn-location">Usar mi Ubicación</button>
          </div>
        </div>

        <div className="nearby-cafes">
          <h4 className="nearby-title">Cafés Recomendados Cerca de Ti</h4>
          <div className="cafes-grid">
            {nearbyCafes.map((cafe) => (
              <div key={cafe.id} className="cafe-card">
                <div className="cafe-header">
                  <h5 className="cafe-name">{cafe.name}</h5>
                  <div className="cafe-badge">{cafe.type}</div>
                </div>
                <div className="cafe-info">
                  <div className="cafe-distance">📍 {cafe.distance}</div>
                  <div className="cafe-rating">⭐ {cafe.rating}</div>
                </div>
                <p className="cafe-description">{cafe.description}</p>
                <div className="cafe-features">
                  {cafe.features.map((feature, index) => (
                    <span key={index} className="feature-tag">{feature}</span>
                  ))}
                </div>
                <button className="btn-cafe">Ver Detalles</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default NearMe
