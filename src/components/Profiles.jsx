import React from 'react'

const Profiles = () => {
  const profiles = [
    {
      icon: '👴',
      title: 'Adultos Mayores',
      description: 'Cafés elegantes donde pueden sentarse a tomar en tazas, con comida de calidad y ambiente relajado para disfrutar la experiencia.',
      tags: ['Tazas Elegantes', 'Ambiente Tranquilo', 'Comida Premium']
    },
    {
      icon: '🎨',
      title: 'Jóvenes Aesthetic',
      description: 'Lugares aesthetic para llevar, ambientes vibrantes con música en vivo y espacios instagrameables.',
      tags: ['Aesthetic', 'Para Llevar', 'Instagrameable']
    },
    {
      icon: '💼',
      title: 'Profesionales',
      description: 'Cafés de especialidad con WiFi confiable, espacios de trabajo y ambiente productivo para el día a día.',
      tags: ['Especialidad', 'WiFi', 'Productivo']
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Familias',
      description: 'Espacios amplios con menú infantil, ambiente familiar y actividades para disfrutar en familia.',
      tags: ['Familiar', 'Amplio', 'Infantil']
    }
  ]

  return (
    <section className="profiles" id="profiles">
      <div className="container">
        <h3 className="section-title">Perfiles de Usuario</h3>
        <div className="profiles-grid">
          {profiles.map((profile, index) => (
            <div key={index} className="profile-card">
              <div className="profile-icon">{profile.icon}</div>
              <h4>{profile.title}</h4>
              <p>{profile.description}</p>
              <div className="profile-tags">
                {profile.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Profiles