'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Sidebar from '@/components/sideBar';

const Mapa = () => {
  const [dataColors, setDataColors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/colors');
        
        if (!response.ok) {
          throw new Error('Error al cargar los datos');
        }
        
        const data = await response.json();
        setDataColors(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const imgcbba = 'https://firebasestorage.googleapis.com/v0/b/red-conexia.appspot.com/o/MAPA%20F%20CBBA.png?alt=media&token=7b3d1c00-a211-48d7-b2c0-acb4c0ff0fc4';

  const styles = {
    // Loading styles
    loadingContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, #0abdc6 0%, #ff6b6b 50%, #ffa500 100%)',
    },
    loadingContent: {
      textAlign: 'center',
      color: 'white',
      animation: 'fadeIn 0.5s ease-out',
    },
    spinner: {
      width: '60px',
      height: '60px',
      border: '6px solid rgba(255,255,255,0.3)',
      borderTop: '6px solid white',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
      margin: '0 auto 20px',
    },
    loadingText: {
      fontSize: '18px',
      fontWeight: '600',
      margin: 0,
      textShadow: '0 2px 4px rgba(0,0,0,0.3)',
    },

    // Error styles
    errorContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, #0abdc6 0%, #ff6b6b 50%, #ffa500 100%)',
    },
    errorContent: {
      textAlign: 'center',
      backgroundColor: 'rgba(255,255,255,0.95)',
      backdropFilter: 'blur(20px)',
      padding: '40px',
      borderRadius: '20px',
      boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
      maxWidth: '400px',
      margin: '20px',
    },
    errorTitle: {
      color: '#ff6b6b',
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '16px',
    },
    errorText: {
      color: '#4b5563',
      fontSize: '16px',
      marginBottom: '24px',
      lineHeight: '1.5',
    },
    retryButton: {
      backgroundColor: '#0abdc6',
      color: 'white',
      border: 'none',
      padding: '12px 24px',
      borderRadius: '50px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(10, 189, 198, 0.3)',
    },

    // Main container
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0abdc6 0%, #ff6b6b 50%, #ffa500 100%)',
      padding: '20px',
      position: 'relative',
      overflow: 'hidden',
    },
    backgroundOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'radial-gradient(circle at 30% 70%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(255,255,255,0.1) 0%, transparent 50%)',
      pointerEvents: 'none',
    },
    contentWrapper: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      gap: '24px',
      width: '100%',
      maxWidth: '1400px',
      position: 'relative',
      zIndex: 1,
    },
    mapContainer: {
      flex: '1',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '70vh',
    },
    mapWrapper: {
      position: 'relative',
      width: '100%',
      maxWidth: '800px',
      height: '600px',
      borderRadius: '24px',
      overflow: 'hidden',
      boxShadow: '0 25px 50px rgba(0,0,0,0.2), 0 10px 20px rgba(0,0,0,0.1)',
      animation: 'fadeInScale 0.8s ease-out 0.3s both',
    },
    mapGlow: {
      position: 'absolute',
      top: '-10px',
      left: '-10px',
      right: '-10px',
      bottom: '-10px',
      background: 'linear-gradient(45deg, #0abdc6, #ff6b6b, #ffa500, #0abdc6)',
      borderRadius: '30px',
      opacity: '0.7',
      filter: 'blur(20px)',
      zIndex: '-1',
      animation: 'rotateGlow 8s linear infinite',
    },
    imageContainer: {
      position: 'relative',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(255,255,255,0.95)',
      backdropFilter: 'blur(10px)',
    },
    mapImage: {
      objectFit: 'contain',
      padding: '20px',
      transition: 'transform 0.3s ease',
    },
    mapTitle: {
      position: 'absolute',
      bottom: '0',
      left: '0',
      right: '0',
      background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
      color: 'white',
      padding: '30px 20px 20px',
      textAlign: 'center',
    },
    titleText: {
      fontSize: '24px',
      fontWeight: 'bold',
      margin: '0 0 8px 0',
      textShadow: '0 2px 4px rgba(0,0,0,0.5)',
    },
    subtitleText: {
      fontSize: '16px',
      margin: '0',
      opacity: '0.9',
      textShadow: '0 1px 2px rgba(0,0,0,0.5)',
    },
  };

  if (loading) {
    return (
      <div style={styles.loadingContainer}>
        <div style={styles.loadingContent}>
          <div style={styles.spinner}></div>
          <p style={styles.loadingText}>Cargando mapa de Cochabamba...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.errorContainer}>
        <div style={styles.errorContent}>
          <h2 style={styles.errorTitle}>⚠️ Error</h2>
          <p style={styles.errorText}>{error}</p>
          <button 
            style={styles.retryButton}
            onClick={() => window.location.reload()}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#ff6b6b';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#0abdc6';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.backgroundOverlay}></div>
      <div style={styles.contentWrapper}>
        <Sidebar data={dataColors} />
        <div style={styles.mapContainer}>
          <div style={styles.mapWrapper}>
            <div style={styles.mapGlow}></div>
            <div style={styles.imageContainer}>
              <Image 
                src={imgcbba || "/placeholder.svg"} 
                alt="Mapa interactivo de las provincias de Cochabamba" 
                fill
                style={styles.mapImage}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 60vw"
              />
            </div>
            <div style={styles.mapTitle}>
              <h2 style={styles.titleText}>Mapa de Cochabamba</h2>
              <p style={styles.subtitleText}>Explora las provincias y sus tradiciones</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add CSS animations
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes fadeInScale {
      from {
        opacity: 0;
        transform: scale(0.9) translateY(20px);
      }
      to {
        opacity: 1;
        transform: scale(1) translateY(0);
      }
    }
    
    @keyframes rotateGlow {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    /* Responsive styles */
    @media (max-width: 1024px) {
      .contentWrapper {
        flex-direction: column !important;
        align-items: center !important;
      }
      
      .mapWrapper {
        width: 100% !important;
        height: 500px !important;
        max-width: 600px !important;
      }
    }
    
    @media (max-width: 768px) {
      .container {
        padding: 16px !important;
      }
      
      .mapWrapper {
        height: 400px !important;
        border-radius: 16px !important;
      }
      
      .mapGlow {
        border-radius: 20px !important;
      }
      
      .titleText {
        font-size: 20px !important;
      }
      
      .subtitleText {
        font-size: 14px !important;
      }
    }
    
    @media (max-width: 640px) {
      .contentWrapper {
        gap: 16px !important;
      }
      
      .mapWrapper {
        height: 350px !important;
      }
      
      .mapTitle {
        padding: 20px 16px 16px !important;
      }
    }
  `;
  document.head.appendChild(styleSheet);
}

export default Mapa;
