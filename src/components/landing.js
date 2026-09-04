import Image from 'next/image';
import Link from 'next/link';

const LandingPage = () => {
  return (
    <div className="landing-page" style={styles.landingContainer}>
      {/* Elementos decorativos de fondo */}
      <div style={styles.backgroundOverlay}></div>
      
      <div className="landing-content" style={styles.contentWrapper}>
        {/* Hero Section */}
        <div className="landing-hero" style={styles.heroSection}>
          <div style={styles.iconContainer}>
            <span style={styles.bookIcon}>📚</span>
            <span style={styles.heartIcon}>❤️</span>
          </div>
          
          <h1 className="landing-title" style={styles.title}>
            <span style={styles.titleMain}>Mitos y cuentos</span>
            <span style={styles.titleAccent}>Cochabambinos</span>
          </h1>
          
          <p className="landing-subtitle" style={styles.subtitle}>
            ✨ Fomentando la lectura y preservando nuestras tradiciones ✨
          </p>
          
          <Link
            href="/mapaProvincia/mitoLeyenda"
            className="landing-enter-button"
            style={styles.enterButton} 
          >
            <span style={styles.buttonIcon}>🗺️</span>
            Explorar Mapa
            <span style={styles.buttonArrow}>→</span>
          </Link>
        </div>

        {/* Images Section */}
        <div className="landing-images" style={styles.imageSection}>
          <div style={styles.imageContainer}>
            <div className="landing-image-frame" style={styles.imageWrapper}>
              <Image
                src="/images/portada-cultura.webp"
                alt="Tradiciones cochabambinas - Cultura ancestral"
                width={1200}
                height={675}
                sizes="(max-width: 700px) 100vw, 45vw"
                priority
                unoptimized
                className="landing-cover-image"
                style={styles.landingImage}
              />
              <div className="landing-image-overlay" style={styles.imageOverlay}>
                <span style={styles.overlayText}>Cultura Ancestral</span>
              </div>
            </div>
          </div>

          <div style={styles.imageContainer}>
            <div className="landing-image-frame" style={styles.imageWrapper}>
              <Image
                src="/images/portada-tradiciones.webp"
                alt="Tradiciones cochabambinas - Patrimonio cultural"
                width={1200}
                height={675}
                sizes="(max-width: 700px) 100vw, 45vw"
                loading="lazy"
                unoptimized
                className="landing-cover-image"
                style={styles.landingImage}
              />
              <div className="landing-image-overlay" style={styles.imageOverlay}>
                <span style={styles.overlayText}>Patrimonio Cultural</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="landing-features" style={styles.featuresSection}>
          <div
            className="landing-feature-card"
            style={styles.featureCard}
          >
            <span style={styles.featureIcon}>📖</span>
            <h3 style={styles.featureTitle}>Historias Auténticas</h3>
            <p style={styles.featureText}>Descubre los mitos y leyendas tradicionales</p>
          </div>
          
          <div
            className="landing-feature-card"
            style={styles.featureCard}
          >
            <span style={styles.featureIcon}>🏔️</span>
            <h3 style={styles.featureTitle}>Cultura Viva</h3>
            <p style={styles.featureText}>Preservamos nuestra rica herencia cultural</p>
          </div>
          
          <div
            className="landing-feature-card"
            style={styles.featureCard}
          >
            <span style={styles.featureIcon}>🎓</span>
            <h3 style={styles.featureTitle}>Educación</h3>
            <p style={styles.featureText}>Fomentamos el aprendizaje interactivo</p>
          </div>
        </div>
      </div>

      {/* Credits Section */}
      <div className="landing-credits" style={styles.creditsSection}>
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
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    marginBottom: '30px',
  },
  bookIcon: {
    fontSize: '48px',
  },
  heartIcon: {
    fontSize: '32px',
  },
  title: {
    fontSize: '4rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    textShadow: '0 4px 8px rgba(0,0,0,0.3)',
    lineHeight: '1.1',
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
    transition: 'transform 0.18s ease, color 0.18s ease, background-color 0.18s ease, box-shadow 0.18s ease',
    boxShadow: '0 8px 25px rgba(255, 255, 255, 0.3), 0 4px 10px rgba(0, 0, 0, 0.1)',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    minWidth: '220px',
    textDecoration: 'none',
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
  },
  imageWrapper: {
    position: 'relative',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
    transition: 'box-shadow 0.18s ease',
    background: 'rgba(255, 255, 255, 0.1)',
    padding: '8px',
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
    padding: '30px 20px',
    borderRadius: '20px',
    textAlign: 'center',
    minWidth: '200px',
    maxWidth: '250px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    transition: 'transform 0.18s ease, background-color 0.18s ease, box-shadow 0.18s ease',
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
  },
  featureIcon: {
    fontSize: '48px',
    display: 'block',
    marginBottom: '16px',
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

export default LandingPage;
