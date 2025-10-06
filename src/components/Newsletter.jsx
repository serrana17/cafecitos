import React, { useState } from 'react'
import './../App.css' // Import App.css for global styles

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      // Guardar email en localStorage
      const existingEmails = JSON.parse(localStorage.getItem('newsletter_emails') || '[]')
      
      // Verificar si el email ya existe
      if (existingEmails.includes(email)) {
        alert('Este email ya está suscrito.')
        return
      }
      
      // Agregar nuevo email
      existingEmails.push(email)
      localStorage.setItem('newsletter_emails', JSON.stringify(existingEmails))
      
      // Mostrar confirmación
      alert(`¡Gracias por suscribirte con ${email}! Te mantendremos informado sobre los mejores cafés.`)
      setIsSubscribed(true)
      setEmail('')
    }
  }

  if (isSubscribed) {
    return (
      <section className="newsletter" id="newsletter">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-success">
              <div className="success-icon">✅</div>
              <h3>¡Te has suscrito exitosamente!</h3>
              <p>Pronto recibirás las mejores recomendaciones de cafés personalizadas para ti.</p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="newsletter" id="newsletter">
      <div className="container">
        <div className="newsletter-content">
          <div className="newsletter-text">
            <h3>Mantente al día con los mejores cafés</h3>
            <p>Recibe recomendaciones personalizadas, ofertas especiales y descubre nuevos lugares cerca de ti.</p>
          </div>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                placeholder="Tu email aquí..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="newsletter-input"
              />
              <button type="submit" className="btn-newsletter">
                Suscribirse
              </button>
            </div>
            <p className="newsletter-privacy">
              Al suscribirte, aceptas recibir emails sobre cafés y experiencias personalizadas.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
