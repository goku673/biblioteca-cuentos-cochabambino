'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Sidebar from '@/components/sideBar';

const Mapa = () => {
  const [dataColors, setDataColors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/colors');
      const data = await response.json();
      setDataColors(data);
    };
    fetchData();
  }, []);

  return (
    <div style={styles.container}>
      <Sidebar data={dataColors} />
      <div style={styles.imageContainer}>
        <Image src={imgcbba} alt="Mapa de Cochabamba" layout="fill" objectFit="contain" priority />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(to right, #0abdc6, #ff6b6b, #ffa500)',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
};
const imgcbba = 'https://firebasestorage.googleapis.com/v0/b/red-conexia.appspot.com/o/MAPA%20F%20CBBA.png?alt=media&token=7b3d1c00-a211-48d7-b2c0-acb4c0ff0fc4';

export default Mapa;