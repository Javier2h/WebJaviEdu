import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const items = [
    { id: 1, src: '/p1.png', title: 'Bordados Premium', span: 'col-span-2' },
    { id: 2, src: '/p2.png', title: 'DTF Alta Resolución', span: 'col-span-1' },
    { id: 3, src: '/p3.png', title: 'Serigrafía en Serie', span: 'col-span-1' },
    { id: 4, src: '/p1.png', title: 'Transfers Flexibles', span: 'col-span-2' },
  ];

  return (
    <section id="proyectos" className="gallery">
      <div className="container">
        <h2 className="section-title animate-float-up">Proyectos Recientes</h2>
        <div className="gallery-grid">
          {items.map((item, index) => (
            <div key={item.id} className={`gallery-item ${item.span} animate-float-up delay-${index * 100}`}>
              <img src={item.src} alt={item.title} className="gallery-image" />
              <div className="gallery-overlay">
                <span className="gallery-tag">Destacado</span>
                <h4 className="gallery-title">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
