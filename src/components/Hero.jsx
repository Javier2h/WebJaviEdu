import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-left animate-float-up delay-100">
          <div className="video-wrapper">
             <video src="/video.mp4" autoPlay loop muted playsInline className="hero-video" />
          </div>
        </div>
        <div className="hero-right animate-float-up delay-200">
          <h1 className="hero-title">JaviEdu Bordados</h1>
          <h2 className="hero-slogan">Creatividad sobre tela 🎨🧵✨</h2>
        </div>
        {/* Decorative bokeh layer localized in the hero */}
        <div className="bokeh-layer"></div>
      </div>

      <div className="hero-bottom animate-float-up delay-200">
        <div className="hero-nav">
          <a href="#contacto" className="hero-nav-link">
            <span>Contáctanos</span>
            <div className="nav-line"></div>
          </a>
          <a href="#servicios" className="hero-nav-link">
            <span>Servicios Destacados</span>
            <div className="nav-line"></div>
          </a>
          <a href="#proyectos" className="hero-nav-link">
            <span>Proyectos Recientes</span>
            <div className="nav-line"></div>
          </a>
        </div>
        
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
