'use client'

import React from 'react';
import { useRouter } from 'next/navigation';

const LandingPage = () => {
  const router = useRouter();

  const handleEnter = () => {
    router.push('/mapaProvincia/mitoLeyenda');
  };

  return (
    <div style={styles.landingContainer}>
      {/* Elementos decorativos de fondo */}
      <div style={styles.backgroundOverlay}></div>
      <div style={styles.floatingElement1}></div>
      <div style={styles.floatingElement2}></div>
      <div style={styles.floatingElement3}></div>
      
      <div style={styles.contentWrapper}>
        {/* Hero Section */}
        <div style={styles.heroSection}>
          <div style={styles.iconContainer}>
            <span style={styles.bookIcon}>📚</span>
            <span style={styles.heartIcon}>❤️</span>
          </div>
          
          <h1 style={styles.title}>
            <span style={styles.titleMain}>Mitos y cuentos</span>
            <span style={styles.titleAccent}>Cochabambinos</span>
          </h1>
          
          <p style={styles.subtitle}>
            ✨ Fomentando la lectura y preservando nuestras tradiciones ✨
          </p>
          
          <button 
            style={styles.enterButton} 
            onClick={handleEnter}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#ff6b6b';
              e.target.style.color = '#fff';
              e.target.style.transform = 'translateY(-4px) scale(1.05)';
              e.target.style.boxShadow = '0 15px 35px rgba(255, 107, 107, 0.4), 0 5px 15px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
              e.target.style.color = '#0abdc6';
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.boxShadow = '0 8px 25px rgba(255, 255, 255, 0.3), 0 4px 10px rgba(0, 0, 0, 0.1)';
            }}
          >
            <span style={styles.buttonIcon}>🗺️</span>
            Explorar Mapa
            <span style={styles.buttonArrow}>→</span>
          </button>
        </div>

        {/* Images Section */}
        <div style={styles.imageSection}>
          <div style={styles.imageContainer}>
            <div style={styles.imageWrapper}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/red-conexia.appspot.com/o/landing.jpeg?alt=media&token=7df86399-3e6f-4d70-8786-fc2625ee93b8"
                alt="Tradiciones cochabambinas - Cultura ancestral"
                style={styles.landingImage}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05) rotate(1deg)';
                  e.target.parentElement.style.boxShadow = '0 25px 50px rgba(10, 189, 198, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1) rotate(0deg)';
                  e.target.parentElement.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
                }}
              />
              <div style={styles.imageOverlay}>
                <span style={styles.overlayText}>Cultura Ancestral</span>
              </div>
            </div>
          </div>

          <div style={styles.imageContainer}>
            <div style={styles.imageWrapper}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/red-conexia.appspot.com/o/landing2.jfif?alt=media&token=91849a26-e163-467d-bda7-c172d1cc8dce"
                alt="Tradiciones cochabambinas - Patrimonio cultural"
                style={styles.landingImage}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05) rotate(-1deg)';
                  e.target.parentElement.style.boxShadow = '0 25px 50px rgba(255, 107, 107, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1) rotate(0deg)';
                  e.target.parentElement.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
                }}
              />
              <div style={styles.imageOverlay}>
                <span style={styles.overlayText}>Patrimonio Cultural</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div style={styles.featuresSection}>
          <div 
            style={styles.featureCard}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-8px) scale(1.02)';
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
              e.target.style.boxShadow = '0 15px 35px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
              e.target.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
            }}
          >
            <span style={styles.featureIcon}>📖</span>
            <h3 style={styles.featureTitle}>Historias Auténticas</h3>
            <p style={styles.featureText}>Descubre los mitos y leyendas tradicionales</p>
          </div>
          
          <div 
            style={styles.featureCard}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-8px) scale(1.02)';
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
              e.target.style.boxShadow = '0 15px 35px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
              e.target.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
            }}
          >
            <span style={styles.featureIcon}>🏔️</span>
            <h3 style={styles.featureTitle}>Cultura Viva</h3>
            <p style={styles.featureText}>Preservamos nuestra rica herencia cultural</p>
          </div>
          
          <div 
            style={styles.featureCard}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-8px) scale(1.02)';
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
              e.target.style.boxShadow = '0 15px 35px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
              e.target.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
            }}
          >
            <span style={styles.featureIcon}>🎓</span>
            <h3 style={styles.featureTitle}>Educación</h3>
            <p style={styles.featureText}>Fomentamos el aprendizaje interactivo</p>
          </div>
        </div>
      </div>

      {/* Credits Section */}
      <div style={styles.creditsSection}>
        <p style={styles.creditsText}>
          🎓 Valores, espiritualidad y religiones, Normal de Vacas
        </p>
        <p style={styles.creditsDeveloper}>
          💻 Desarrollado con ❤️ por <strong>Hermanos Z</strong>
        </p>
      </div>
    </div>
  );
};

const styles = {
  landingContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0abdc6 0%, #ff6b6b 50%, #ffa500 100%)',
    color: '#fff',
    position: 'relative',
    overflow: 'hidden',
    padding: '20px',
  },
  backgroundOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)',
    pointerEvents: 'none',
  },
  floatingElement1: {
    position: 'absolute',
    top: '10%',
    left: '10%',
    width: '100px',
    height: '100px',
    background: 'rgba(255,255,255,0.1)',
    borderRadius: '50%',
    filter: 'blur(40px)',
    animation: 'float1 6s ease-in-out infinite',
  },
  floatingElement2: {
    position: 'absolute',
    top: '60%',
    right: '15%',
    width: '150px',
    height: '150px',
    background: 'rgba(255,255,255,0.08)',
    borderRadius: '50%',
    filter: 'blur(50px)',
    animation: 'float2 8s ease-in-out infinite',
  },
  floatingElement3: {
    position: 'absolute',
    bottom: '20%',
    left: '20%',
    width: '80px',
    height: '80px',
    background: 'rgba(255,255,255,0.12)',
    borderRadius: '50%',
    filter: 'blur(30px)',
    animation: 'float3 7s ease-in-out infinite',
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '1200px',
    width: '100%',
    zIndex: 1,
  },
  heroSection: {
    textAlign: 'center',
    marginBottom: '60px',
    animation: 'fadeInUp 1s ease-out',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    marginBottom: '30px',
    animation: 'bounceIn 1.5s ease-out',
  },
  bookIcon: {
    fontSize: '48px',
    animation: 'pulse 2s infinite',
  },
  heartIcon: {
    fontSize: '32px',
    animation: 'heartbeat 1.5s infinite',
  },
  title: {
    fontSize: '4rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    textShadow: '0 4px 8px rgba(0,0,0,0.3)',
    lineHeight: '1.1',
    animation: 'slideInDown 1s ease-out 0.3s both',
  },
  titleMain: {
    display: 'block',
    background: 'linear-gradient(45deg, #ffffff, #f0f9ff)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  titleAccent: {
    display: 'block',
    background: 'linear-gradient(45deg, #ffa500, #ffed4e)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginTop: '10px',
  },
  subtitle: {
    fontSize: '1.5rem',
    marginBottom: '40px',
    fontWeight: '300',
    textShadow: '0 2px 4px rgba(0,0,0,0.2)',
    animation: 'fadeIn 1s ease-out 0.6s both',
    lineHeight: '1.4',
  },
  enterButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    color: '#0abdc6',
    fontSize: '1.3rem',
    fontWeight: 'bold',
    padding: '16px 32px',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 8px 25px rgba(255, 255, 255, 0.3), 0 4px 10px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(10px)',
    animation: 'slideInUp 1s ease-out 0.9s both',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    minWidth: '220px',
  },
  buttonIcon: {
    fontSize: '20px',
    transition: 'transform 0.3s ease',
  },
  buttonArrow: {
    fontSize: '18px',
    transition: 'transform 0.3s ease',
  },
  imageSection: {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    marginBottom: '60px',
    flexWrap: 'wrap',
  },
  imageContainer: {
    animation: 'fadeInScale 1s ease-out 1.2s both',
  },
  imageWrapper: {
    position: 'relative',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s ease',
    background: 'rgba(255, 255, 255, 0.1)',
    padding: '8px',
    backdropFilter: 'blur(10px)',
  },
  landingImage: {
    width: '320px',
    height: '240px',
    objectFit: 'cover',
    borderRadius: '16px',
    transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'block',
  },
  imageOverlay: {
    position: 'absolute',
    bottom: '12px',
    left: '12px',
    right: '12px',
    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
    borderRadius: '0 0 16px 16px',
    padding: '20px 16px 16px',
    transform: 'translateY(100%)',
    transition: 'transform 0.3s ease',
  },
  overlayText: {
    color: 'white',
    fontSize: '16px',
    fontWeight: 'bold',
    textShadow: '0 2px 4px rgba(0,0,0,0.5)',
  },
  featuresSection: {
    display: 'flex',
    gap: '30px',
    marginBottom: '40px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  featureCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(20px)',
    padding: '30px 20px',
    borderRadius: '20px',
    textAlign: 'center',
    minWidth: '200px',
    maxWidth: '250px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    transition: 'all 0.3s ease',
    animation: 'fadeInUp 1s ease-out 1.5s both',
    cursor: 'pointer',
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
  },
  featureIcon: {
    fontSize: '48px',
    display: 'block',
    marginBottom: '16px',
    animation: 'bounce 2s infinite',
  },
  featureTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '12px',
    color: '#fff',
    textShadow: '0 2px 4px rgba(0,0,0,0.3)',
  },
  featureText: {
    fontSize: '14px',
    color: 'rgba(255,255,255,0.9)',
    lineHeight: '1.4',
    margin: 0,
  },
  creditsSection: {
    position: 'absolute',
    bottom: '20px',
    left: '0',
    right: '0',
    textAlign: 'center',
    animation: 'fadeIn 1s ease-out 2s both',
  },
  creditsText: {
    fontSize: '14px',
    color: 'rgba(255,255,255,0.8)',
    marginBottom: '8px',
    textShadow: '0 1px 2px rgba(0,0,0,0.3)',
    margin: '0 0 8px 0',
  },
  creditsDeveloper: {
    fontSize: '12px',
    color: 'rgba(255,255,255,0.7)',
    textShadow: '0 1px 2px rgba(0,0,0,0.3)',
    margin: 0,
  },
};

// Add CSS animations and responsive styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes slideInDown {
      from {
        opacity: 0;
        transform: translateY(-50px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes slideInUp {
      from {
        opacity: 0;
        transform: translateY(50px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes fadeInScale {
      from {
        opacity: 0;
        transform: scale(0.8);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
    
    @keyframes bounceIn {
      0% {
        opacity: 0;
        transform: scale(0.3);
      }
      50% {
        opacity: 1;
        transform: scale(1.05);
      }
      70% {
        transform: scale(0.9);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }
    
    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
    }
    
    @keyframes heartbeat {
      0%, 100% {
        transform: scale(1);
      }
      25% {
        transform: scale(1.1);
      }
      50% {
        transform: scale(1.2);
      }
      75% {
        transform: scale(1.1);
      }
    }
    
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-10px);
      }
      60% {
        transform: translateY(-5px);
      }
    }
    
    @keyframes float1 {
      0%, 100% {
        transform: translateY(0px) rotate(0deg);
      }
      50% {
        transform: translateY(-20px) rotate(180deg);
      }
    }
    
    @keyframes float2 {
      0%, 100% {
        transform: translateY(0px) rotate(0deg);
      }
      50% {
        transform: translateY(-30px) rotate(-180deg);
      }
    }
    
    @keyframes float3 {
      0%, 100% {
        transform: translateY(0px) rotate(0deg);
      }
      50% {
        transform: translateY(-15px) rotate(90deg);
      }
    }
    
    /* Hover effects */
    .imageWrapper:hover .imageOverlay {
      transform: translateY(0) !important;
    }
    
    /* Responsive Design */
    @media (max-width: 1024px) {
      .title {
        font-size: 3rem !important;
      }
      
      .landingImage {
        width: 280px !important;
        height: 210px !important;
      }
      
      .featuresSection {
        gap: 20px !important;
      }
    }
    
    @media (max-width: 768px) {
      .landingContainer {
        padding: 16px !important;
      }
      
      .title {
        font-size: 2.5rem !important;
      }
      
      .subtitle {
        font-size: 1.2rem !important;
      }
      
      .enterButton {
        font-size: 1.1rem !important;
        padding: 14px 28px !important;
        min-width: 200px !important;
      }
      
      .landingImage {
        width: 250px !important;
        height: 180px !important;
      }
      
      .imageSection {
        gap: 20px !important;
      }
      
      .featuresSection {
        flex-direction: column !important;
        align-items: center !important;
      }
      
      .featureCard {
        max-width: 300px !important;
        width: 100% !important;
      }
    }
    
    @media (max-width: 640px) {
      .title {
        font-size: 2rem !important;
      }
      
      .subtitle {
        font-size: 1rem !important;
        padding: 0 20px !important;
      }
      
      .enterButton {
        font-size: 1rem !important;
        padding: 12px 24px !important;
        min-width: 180px !important;
      }
      
      .landingImage {
        width: 220px !important;
        height: 160px !important;
      }
      
      .imageSection {
        flex-direction: column !important;
        align-items: center !important;
      }
      
      .iconContainer {
        gap: 15px !important;
      }
      
      .bookIcon {
        font-size: 36px !important;
      }
      
      .heartIcon {
        font-size: 24px !important;
      }
      
      .creditsSection {
        bottom: 10px !important;
        padding: 0 20px !important;
      }
      
      .creditsText {
        font-size: 12px !important;
      }
      
      .creditsDeveloper {
        font-size: 10px !important;
      }
    }
    
    @media (max-width: 480px) {
      .heroSection {
        margin-bottom: 40px !important;
      }
      
      .imageSection {
        margin-bottom: 40px !important;
      }
      
      .landingImage {
        width: 200px !important;
        height: 140px !important;
      }
      
      .featureCard {
        padding: 20px 16px !important;
      }
      
      .featureIcon {
        font-size: 36px !important;
      }
      
      .featureTitle {
        font-size: 16px !important;
      }
      
      .featureText {
        font-size: 12px !important;
      }
    }
  `;
  document.head.appendChild(styleSheet);
}

export default LandingPage;
