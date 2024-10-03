import React, { useState } from 'react';
import ColorPalette from './colorBar';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { IoHomeSharp } from "react-icons/io5";

const Sidebar = ({ data }) => {
    const router = useRouter();

    const handleClickGoBack = (id) => {
        router.push('/');
    };
    return (
      <div style={styles.sidebar}>
        <h1 style={styles.sidebarTitle}>Provincias</h1>
        <ul>
          {data.map((prov) => (
            <li key={prov.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Link href={`/mapaProvincia/mitoLeyenda/${prov.id}`} style={styles.sidebarLink}>
                {prov.province}
              </Link>
              <div style={styles.colorBar}>
                {prov.colors.map((color, index) => (
                  <div
                    key={index}
                    style={{
                      ...styles.colorSquare,
                      backgroundColor: color,
                    }}
                  />
                ))}
              </div>
            </li>
          ))}
        </ul>
        <div style={styles.buttonGoBackContainer}>
        <button style={styles.buttonGoBack} onClick={handleClickGoBack}>
          <IoHomeSharp size={24} />
        </button>
      </div>
      </div>
    );
  };


  const styles = {
    sidebar: {
      backgroundColor: '#fff',
      padding: '2rem',
      borderRadius: '0.5rem',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
      marginRight: '2rem',
      maxWidth: '300px',
      overflowY: 'auto',
      maxHeight: '90vh',
    },
    sidebarTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: '#0abdc6',
    },
    sidebarLink: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      color: '#0abdc6',
      textDecoration: 'none',
      padding: '0.5rem 0',
      borderBottom: '1px solid #f1f1f1',
      '&:hover': {
        color: '#ff6b6b',
      },
    },
    colorBar: {
      display: 'flex',
      
      marginLeft: '1rem',
    },
    colorSquare: {
      width: '1rem',
      height: '1rem',
      borderRadius: '0.25rem',
    },
    buttonGoBackContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '1rem',
      },
      buttonGoBack: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0abdc6',
        color: '#fff',
        padding: '0.5rem 1rem',
        border: 'none',
        borderRadius: '0.5rem',
        fontSize: '1rem',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'background-color 0.3s, transform 0.3s',
        '&:hover': {
          backgroundColor: '#ff6b6b',
          transform: 'translateY(-2px)',
        },
      }
  };

export default Sidebar;
