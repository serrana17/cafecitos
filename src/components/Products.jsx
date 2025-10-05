import React from 'react'
import coffeeImage1 from '../assets/img/cofee.png'
import coffeeImage2 from '../assets/img/b613643a-775e-4f8e-8f9c-227c813b6393.png'
import coffeeImage3 from '../assets/img/cafe 1.jpeg'
import coffeeImage4 from '../assets/img/cafe 2.jpg'
import coffeeImage5 from '../assets/img/cafe 3.webp'
import coffeeImage6 from '../assets/img/cafe 4.webp'
import './../App.css' // Import App.css for global styles

const Products = () => {
  const cafeTypes = [
    {
      id: 1,
      name: "Cafés Elegantes",
      description: "Lugares sofisticados con ambiente tranquilo, perfectos para adultos mayores que buscan calidad y comodidad. Caracterizados por su decoración refinada, música suave y atención personalizada.",
      feeling: "Elegancia y tranquilidad",
      experience: "Tazas elegantes, ambiente relajado, música suave",
      image: coffeeImage6,
      characteristics: ["Decoración refinada", "Música suave", "Atención personalizada", "Mobiliario cómodo"]
    },
    {
      id: 2,
      name: "Cafés Aesthetic",
      description: "Espacios vibrantes e instagrameables, ideales para jóvenes que buscan experiencias visuales y para llevar. Diseño moderno, colores vibrantes y perfectos para redes sociales.",
      feeling: "Energía y creatividad",
      experience: "Ambiente vibrante, perfecto para redes sociales, diseño moderno",
      image: coffeeImage3,
      characteristics: ["Diseño moderno", "Colores vibrantes", "Instagrameable", "Para llevar"]
    },
    {
      id: 3,
      name: "Cafés de Especialidad",
      description: "Para profesionales que buscan calidad premium, WiFi confiable y ambiente productivo para trabajar. Baristas expertos y granos de alta calidad.",
      feeling: "Productividad y enfoque",
      experience: "Café de alta calidad, ambiente profesional, WiFi confiable",
      image: coffeeImage4,
      characteristics: ["Baristas expertos", "Granos premium", "WiFi confiable", "Ambiente productivo"]
    },
    {
      id: 4,
      name: "Cafés Familiares",
      description: "Espacios amplios y acogedores, perfectos para familias con menú infantil y actividades para todos. Ambiente cálido y espacios para niños.",
      feeling: "Calidez familiar y conexión",
      experience: "Ambiente familiar, espacios amplios, menú infantil",
      image: coffeeImage5,
      characteristics: ["Espacios amplios", "Menú infantil", "Actividades familiares", "Ambiente cálido"]
    }
  ]

  return (
    <section className="products" id="products">
      <div className="container">
        <h3 className="section-title">Conoce Distintos Tipos de Cafés</h3>
        <p className="products-subtitle">
          Descubre la variedad de experiencias cafetaleras que existen. Cada tipo de café tiene su personalidad única y se adapta a diferentes momentos y personas.
        </p>
        <div className="products-grid">
          {cafeTypes.map((cafe) => (
            <div key={cafe.id} className="product-card">
              <div className="product-image">
                <img src={cafe.image} alt={cafe.name} />
                <div className="product-overlay">
                  <span className="product-price">Conocer</span>
                </div>
              </div>
              <div className="product-content">
                <h4 className="product-name">{cafe.name}</h4>
                <p className="product-description">{cafe.description}</p>
                <div className="product-feeling">
                  <span className="feeling-label">Te hace sentir:</span>
                  <span className="feeling-text">{cafe.feeling}</span>
                </div>
                <div className="product-experience">
                  <span className="experience-label">Experiencia:</span>
                  <span className="experience-text">{cafe.experience}</span>
                </div>
                <div className="product-characteristics">
                  <span className="characteristics-label">Características:</span>
                  <div className="characteristics-tags">
                    {cafe.characteristics.map((char, index) => (
                      <span key={index} className="characteristic-tag">{char}</span>
                    ))}
                  </div>
                </div>
                <button className="btn-product">Explorar Cafés</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
