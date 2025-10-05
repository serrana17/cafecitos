import React from 'react'

const Features = () => {
  const features = [
    {
      number: '01',
      title: 'Calidad Garantizada',
      description: 'Nos enfocamos en la calidad del café y del ambiente. Solo recomendamos lugares que cumplan nuestros estándares.'
    },
    {
      number: '02',
      title: 'Experiencia Personalizada',
      description: 'Más que una bebida, conectamos con la experiencia perfecta según tu perfil y momento de vida.'
    },
    {
      number: '03',
      title: 'Matching Inteligente',
      description: 'Adultos mayores con tazas elegantes, jóvenes con lugares aesthetic. Cada perfil encuentra su lugar ideal.'
    }
  ]

  return (
    <section className="features" id="features">
      <div className="container">
        <h3 className="section-title">¿Por qué elegir Cafecitos?</h3>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-number">{feature.number}</div>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features