import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';

function App() {
  return (
    <>
      {/* Fixed animated background layer behind everything */}
      <div className="orbs-wrapper">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="orb orb-4"></div>
      </div>

      {/* Minimal Header */}
      <header className="header animate-float-up">
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img src="/logo.png" alt="JaviEdu Bordados Logo" className="logo" />
          <span className="logo-text">JaviEdu Bordados</span>
        </a>
        <div className="menu-icon">
          <div className="menu-line"></div>
          <div className="menu-line" style={{ width: '70%', marginLeft: 'auto' }}></div>
          <div className="menu-line"></div>
        </div>
      </header>

      <main>
        <Hero />
        <Services />
        <Gallery />
      </main>

      {/* Footer styled softly over dark bg */}
      <footer style={{
        padding: '4rem 0 3rem', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)',
        position: 'relative', zIndex: 2, color: 'var(--text-muted)'
      }}>
        <div className="container" id="contacto">
          <h3 style={{color: '#fff', fontSize: '2.5rem', marginBottom: '1rem'}}>Hablemos</h3>
          <p style={{fontSize: '1.2rem', color: '#fff', marginBottom: '0.5rem'}}>JEBordados26@gmail.com</p>
          <p style={{fontSize: '1.1rem', marginBottom: '0.5rem'}}>📞 0983145488 - 0999736676</p>
          <p style={{fontSize: '1.1rem', fontWeight: '600', color: 'var(--accent-cyan)'}}>📍 Sangolquí, Ecuador</p>
          <div style={{margin: '2.5rem 0'}}>
             <a href="https://wa.me/593983145488?text=Hola%2C%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20servicios%20de%20JaviEdu%20Bordados" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
               Escríbenos por WhatsApp
             </a>
          </div>
          <p style={{fontSize: '0.9rem', marginTop: '3rem'}}>&copy; {new Date().getFullYear()} JaviEdu Bordados. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
