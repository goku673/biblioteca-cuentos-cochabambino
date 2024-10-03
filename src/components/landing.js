import React from 'react';
import { useRouter } from 'next/navigation';

const LandingPage = () => {
  const router = useRouter();

  const handleEnter = () => {
    router.push('/mapaProvincia/mitoLeyenda'); 
  };

  return (
    <div style={styles.landingContainer}>
      <div style={styles.heroSection}>
        <h1 style={styles.title}>Mitos y cuentos Cochabambinos</h1>
        <p style={styles.subtitle}>Fomentando la lectura</p>
        <button style={styles.enterButton} onClick={handleEnter}>
          Entrar
        </button>
      </div>
      <div style={styles.imageSection}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/red-conexia.appspot.com/o/landing.jpeg?alt=media&token=7df86399-3e6f-4d70-8786-fc2625ee93b8"
          alt="Imagen 1"
          style={styles.landingImage}
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/red-conexia.appspot.com/o/landing2.jfif?alt=media&token=91849a26-e163-467d-bda7-c172d1cc8dce"
          alt="Imagen 2"
          style={styles.landingImage}
        />
      </div>
      <div style={styles.creditsSection}>
        <p style={styles.creditsText}>Valores, espiritualidad y religiones, 2do año, Normal de Vacas.</p>
        <p style={styles.creditsDeveloper}>desarrollado por Freddy Amin</p>
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
    height: '100vh',
    background: 'linear-gradient(to right, #0abdc6, #ff6b6b, #ffa500)',
    color: '#fff',
  },
  heroSection: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.5rem',
    marginBottom: '2rem',
  },
  enterButton: {
    backgroundColor: '#fff',
    color: '#0abdc6',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    padding: '1rem 2rem',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s',
  },
  'enterButton:hover': {
    backgroundColor: '#0abdc6',
    color: '#fff',
  },
  imageSection: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
  },
  landingImage: {
    maxWidth: '300px',
    borderRadius: '0.5rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
  },
  creditsSection: {
    position: 'absolute',
    bottom: '1rem',
    fontSize: '0.8rem',
    color: '#ccc',
    textAlign: 'center',
  },
  creditsText: {
    fontSize: '0.8rem',
  },
  creditsDeveloper: {
    fontSize: '0.7rem',
  },
};

export default LandingPage;