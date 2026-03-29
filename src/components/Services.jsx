import React from 'react';
import './Services.css';

const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: "Serigrafía Textil",
      description: "Colores vibrantes, durabilidad máxima y rentabilidad para grandes producciones. Perfecto para camisetas personalizadas y merchandising corporativo.",
      image: "/hero_screenprint.png",
      delay: "delay-100"
    },
    {
      id: 2,
      title: "Impresión DTF",
      description: "Impresión 'Direct-to-Film' para diseños a todo color muy complejos. Ofrece un nivel de detalle excelente y flexibilidad en cualquier tipo de prenda.",
      image: "/hero_dtf.png",
      delay: "delay-200"
    },
    {
      id: 3,
      title: "Bordado Computarizado",
      description: "Acabado premium, clásico y 100% profesional. Ideal para polos, gorras, chaquetas y uniformes de alta gama.",
      image: "/hero_embroidery.png",
      delay: "delay-300"
    }
  ];

  return (
    <section id="servicios" className="services">
      <div className="container">
        <h2 className="section-title animate-float-up">Servicios Destacados</h2>
        <div className="services-grid">
          {servicesData.map(service => (
            <div key={service.id} className={`service-card animate-float-up ${service.delay}`}>
              <div className="service-image-container">
                <img src={service.image} alt={service.title} className="service-image" />
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
