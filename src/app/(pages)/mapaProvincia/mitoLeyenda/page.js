'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '@/components/sideBar';
import fallbackMap from '@/app/img/mapa.png';
import { provinceColors } from '@/data/provinceColors';
import {
  getCompletedProvinceIds,
  READING_PROGRESS_EVENT,
} from '@/lib/readingProgress';

const provincePositions = {
  1: { x: 43, y: 50 },
  2: { x: 30, y: 28 },
  3: { x: 28, y: 62 },
  4: { x: 31, y: 73 },
  5: { x: 28, y: 82 },
  6: { x: 36, y: 44 },
  7: { x: 45, y: 58 },
  8: { x: 47, y: 66 },
  9: { x: 70, y: 85 },
  10: { x: 74, y: 54 },
  11: { x: 57, y: 50 },
  12: { x: 55, y: 76 },
  13: { x: 43, y: 75 },
  14: { x: 51, y: 34 },
  15: { x: 39, y: 62 },
  16: { x: 55, y: 62 },
};

const Mapa = () => {
  const [activeProvince, setActiveProvince] = useState(
    () => provinceColors.find((province) => province.id === 6) || provinceColors[0]
  );
  const [completedProvinceIds, setCompletedProvinceIds] = useState([]);

  useEffect(() => {
    const syncProgress = (event) => {
      setCompletedProvinceIds(event?.detail || getCompletedProvinceIds());
    };

    syncProgress();
    window.addEventListener(READING_PROGRESS_EVENT, syncProgress);
    window.addEventListener('storage', syncProgress);

    return () => {
      window.removeEventListener(READING_PROGRESS_EVENT, syncProgress);
      window.removeEventListener('storage', syncProgress);
    };
  }, []);

  const imgcbba = '/images/mapa-cochabamba.webp';

  const styles = {
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
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '14px',
      minHeight: '70vh',
    },
    mapWrapper: {
      position: 'relative',
      width: '100%',
      maxWidth: '800px',
      aspectRatio: '1 / 1',
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
      padding: '12px',
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

  return (
    <div className="map-page" style={styles.container}>
      <div style={styles.backgroundOverlay}></div>
      <div className="map-layout" style={styles.contentWrapper}>
        <Sidebar
          data={provinceColors}
          activeProvince={activeProvince}
          onActiveProvince={setActiveProvince}
          completedProvinceIds={completedProvinceIds}
        />
        <div className="map-stage" style={styles.mapContainer}>
          <div className="map-guide" role="note" aria-label="Cómo abrir un cuento">
            <span className="map-guide__step">1</span>
            <span><strong>Elige una provincia</strong> en la lista</span>
            <span className="map-guide__arrow" aria-hidden="true">➜</span>
            <span className="map-guide__step">2</span>
            <span><strong>Presiona la banderita</strong> para entrar al cuento</span>
          </div>
          <div className="map-selection" aria-live="polite">
            <span aria-hidden="true">📍</span>
            Provincia elegida: <strong>{activeProvince?.province || 'ninguna'}</strong>
          </div>
          <div className="map-canvas" style={styles.mapWrapper}>
            <div style={styles.mapGlow}></div>
            <div className="map-image" style={styles.imageContainer}>
              <Image 
                src={imgcbba || "/placeholder.svg"} 
                alt="Mapa interactivo de las provincias de Cochabamba" 
                fill
                style={styles.mapImage}
                priority
                unoptimized
                onError={(event) => {
                  event.currentTarget.src = fallbackMap.src;
                }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 60vw"
              />
              {activeProvince && provincePositions[activeProvince.id] && (
                <Link
                  href={`/mapaProvincia/mitoLeyenda/${activeProvince.id}`}
                  className="map-marker"
                  style={{
                    left: `${provincePositions[activeProvince.id].x}%`,
                    top: `${provincePositions[activeProvince.id].y}%`,
                    '--marker-color': activeProvince.colors?.[0] || '#e84a3c',
                  }}
                  aria-label={`Abrir el cuento de ${activeProvince.province}`}
                  title={`Leer el cuento de ${activeProvince.province}`}
                >
                  <span className="map-marker__halo" aria-hidden="true" />
                  <span className="map-marker__flag" aria-hidden="true">🚩</span>
                  <span className="map-marker__label">{activeProvince.province}</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mapa;
