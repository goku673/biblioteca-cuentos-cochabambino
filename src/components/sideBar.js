'use client'

import React, { memo } from 'react';
import Link from 'next/link';
import { IoHomeSharp } from "react-icons/io5";
import { TOTAL_PROVINCES } from '@/lib/readingProgress';

const Sidebar = ({ data, activeProvince, onActiveProvince, completedProvinceIds = [] }) => {
    const completedSet = new Set(completedProvinceIds);
    const progressPercentage = Math.round((completedSet.size / TOTAL_PROVINCES) * 100);

    return (
        <aside className="province-sidebar" style={styles.sidebar}>
            <div className="province-sidebar__header" style={styles.header}>
                <h1 style={styles.sidebarTitle}>🗺️ Provincias</h1>
                <div style={styles.titleUnderline}></div>
                <div className="journey-progress" aria-label={`${completedSet.size} de ${TOTAL_PROVINCES} provincias completadas`}>
                    <div className="journey-progress__heading">
                        <span>Mi recorrido</span>
                        <strong>{completedSet.size}/{TOTAL_PROVINCES} ⭐</strong>
                    </div>
                    <div className="journey-progress__track" aria-hidden="true">
                        <span style={{ width: `${progressPercentage}%` }} />
                    </div>
                    <p>{completedSet.size === TOTAL_PROVINCES ? '¡Exploraste toda Cochabamba!' : 'Lee cuentos y colecciona estrellas'}</p>
                </div>
            </div>
            
            <div className="province-sidebar__scroll" style={styles.scrollContainer}>
                <ul style={styles.provinceList}>
                    {data.map((prov) => (
                        <li key={prov.id} style={styles.provinceListItem}>
                            <button
                                type="button"
                                className={activeProvince?.id === prov.id ? 'province-nav-item is-active' : 'province-nav-item'}
                                aria-pressed={activeProvince?.id === prov.id}
                                onClick={() => onActiveProvince?.(prov)}
                                onFocus={() => onActiveProvince?.(prov)}
                                onPointerEnter={(event) => {
                                    if (event.pointerType === 'mouse') onActiveProvince?.(prov);
                                }}
                                style={{
                                    ...styles.provinceItem,
                                    ...(activeProvince?.id === prov.id ? styles.provinceItemActive : {}),
                                }}
                            >
                                <span style={styles.provinceName}>{prov.province}</span>
                                <span style={styles.colorBar} aria-hidden="true">
                                    {completedSet.has(prov.id) && (
                                        <span className="province-completed-star" title="Cuento completado">★</span>
                                    )}
                                    {prov.colors.map((color, colorIndex) => (
                                        <span
                                            key={colorIndex}
                                            className="province-color-swatch"
                                            style={{ ...styles.colorSquare, backgroundColor: color }}
                                        />
                                    ))}
                                </span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            
            <div className="province-sidebar__footer" style={styles.buttonGoBackContainer}>
                <Link href="/" className="sidebar-home-button" style={styles.buttonGoBack}>
                    <IoHomeSharp size={24} style={styles.homeIcon} />
                    <span style={styles.buttonText}>Inicio</span>
                </Link>
            </div>
        </aside>
    );
};

const styles = {
    sidebar: {
        backgroundColor: 'rgba(255, 255, 255, 0.98)',
        padding: '24px',
        borderRadius: '20px',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15), 0 8px 16px rgba(0, 0, 0, 0.1)',
        marginRight: '24px',
        width: '320px',
        maxWidth: '90vw',
        maxHeight: '85vh',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        position: 'relative',
        overflow: 'hidden',
    },
    header: {
        textAlign: 'center',
        marginBottom: '24px',
        paddingBottom: '16px',
    },
    sidebarTitle: {
        fontSize: '24px',
        fontWeight: 'bold',
        margin: '0 0 12px 0',
        color: '#0abdc6',
        textShadow: '0 2px 4px rgba(10, 189, 198, 0.2)',
        letterSpacing: '0.5px',
    },
    titleUnderline: {
        width: '80px',
        height: '4px',
        background: 'linear-gradient(90deg, #0abdc6, #ff6b6b, #ffa500)',
        margin: '0 auto',
        borderRadius: '2px',
    },
    scrollContainer: {
        flex: '1',
        overflowY: 'auto',
        overflowX: 'hidden',
        paddingRight: '8px',
        marginRight: '-8px',
        scrollbarWidth: 'thin',
        scrollbarColor: '#0abdc6 rgba(0,0,0,0.1)',
        overscrollBehavior: 'contain',
        WebkitOverflowScrolling: 'touch',
    },
    provinceList: {
        listStyle: 'none',
        padding: '0',
        margin: '0',
    },
    provinceListItem: {
        marginBottom: '8px',
    },
    provinceItem: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '14px 16px',
        borderRadius: '12px',
        transition: 'transform 0.16s ease, background-color 0.16s ease, box-shadow 0.16s ease, border-color 0.16s ease',
        borderLeft: '4px solid transparent',
        borderTop: 'none',
        borderRight: 'none',
        borderBottom: 'none',
        position: 'relative',
        cursor: 'pointer',
        backgroundColor: 'transparent',
        font: 'inherit',
        textAlign: 'left',
        touchAction: 'manipulation',
        WebkitTapHighlightColor: 'transparent',
    },
    provinceItemActive: {
        transform: 'translateX(8px)',
        backgroundColor: 'rgba(10, 127, 140, 0.1)',
        borderLeft: '4px solid #087f8c',
        boxShadow: '0 4px 14px rgba(8, 127, 140, 0.16)',
    },
    provinceName: {
        color: '#0abdc6',
        fontWeight: '600',
        fontSize: '16px',
        transition: 'color 0.3s ease',
        display: 'block',
        letterSpacing: '0.3px',
    },
    colorBar: {
        display: 'flex',
        gap: '6px',
        alignItems: 'center',
        marginLeft: '12px',
        pointerEvents: 'none',
    },
    colorSquare: {
        width: '18px',
        height: '18px',
        borderRadius: '6px',
        transition: 'transform 0.16s ease, box-shadow 0.16s ease',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        border: '2px solid rgba(255,255,255,0.8)',
    },
    buttonGoBackContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '24px',
        paddingTop: '20px',
        borderTop: '2px solid rgba(10, 189, 198, 0.1)',
    },
    buttonGoBack: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        backgroundColor: '#0abdc6',
        color: 'white',
        padding: '14px 28px',
        border: 'none',
        borderRadius: '50px',
        fontSize: '16px',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'transform 0.18s ease, background-color 0.18s ease, box-shadow 0.18s ease',
        boxShadow: '0 4px 15px rgba(10, 189, 198, 0.3)',
        position: 'relative',
        overflow: 'hidden',
        minWidth: '140px',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        textDecoration: 'none',
        touchAction: 'manipulation',
    },
    homeIcon: {
        transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    buttonText: {
        fontWeight: '700',
        fontSize: '14px',
    },
};

export default memo(Sidebar);
