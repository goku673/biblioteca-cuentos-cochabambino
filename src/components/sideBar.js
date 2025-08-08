'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { IoHomeSharp } from "react-icons/io5";
import ColorPalette from './colorBar';
const Sidebar = ({ data }) => {
    const router = useRouter();
    
    const handleClickGoBack = (id) => {
        router.push('/');
    };

    return (
        <div style={styles.sidebar}>
            <div style={styles.header}>
                <h1 style={styles.sidebarTitle}>🗺️ Provincias</h1>
                <div style={styles.titleUnderline}></div>
            </div>
            
            <div style={styles.scrollContainer}>
                <ul style={styles.provinceList}>
                    {data.map((prov, index) => (
                        <li 
                            key={prov.id} 
                            style={{
                                ...styles.provinceItem,
                                animationDelay: `${index * 0.1}s`
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateX(8px)';
                                e.currentTarget.style.backgroundColor = 'rgba(10, 189, 198, 0.08)';
                                e.currentTarget.style.borderLeft = '4px solid #0abdc6';
                                e.currentTarget.style.boxShadow = '0 4px 12px rgba(10, 189, 198, 0.15)';
                                const link = e.currentTarget.querySelector('a');
                                if (link) link.style.color = '#ff6b6b';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateX(0)';
                                e.currentTarget.style.backgroundColor = 'transparent';
                                e.currentTarget.style.borderLeft = '4px solid transparent';
                                e.currentTarget.style.boxShadow = 'none';
                                const link = e.currentTarget.querySelector('a');
                                if (link) link.style.color = '#0abdc6';
                            }}
                        >
                            <Link href={`/mapaProvincia/mitoLeyenda/${prov.id}`} style={styles.sidebarLink}>
                                <span style={styles.provinceName}>{prov.province}</span>
                            </Link>
                            <div style={styles.colorBar}>
                                {prov.colors.map((color, colorIndex) => (
                                    <div
                                        key={colorIndex}
                                        style={{
                                            ...styles.colorSquare,
                                            backgroundColor: color,
                                            animationDelay: `${(index * 0.1) + (colorIndex * 0.05)}s`
                                        }}
                                        title={`Color: ${color}`}
                                        onMouseEnter={(e) => {
                                            e.target.style.transform = 'scale(1.4) rotate(45deg)';
                                            e.target.style.boxShadow = `0 6px 16px ${color}60`;
                                            e.target.style.zIndex = '10';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.transform = 'scale(1) rotate(0deg)';
                                            e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                                            e.target.style.zIndex = '1';
                                        }}
                                    />
                                ))}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            
            <div style={styles.buttonGoBackContainer}>
                <button 
                    style={styles.buttonGoBack} 
                    onClick={handleClickGoBack}
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#ff6b6b';
                        e.target.style.transform = 'translateY(-4px) scale(1.05)';
                        e.target.style.boxShadow = '0 8px 25px rgba(255, 107, 107, 0.4)';
                        const icon = e.target.querySelector('svg');
                        if (icon) icon.style.transform = 'rotate(-10deg) scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#0abdc6';
                        e.target.style.transform = 'translateY(0) scale(1)';
                        e.target.style.boxShadow = '0 4px 15px rgba(10, 189, 198, 0.3)';
                        const icon = e.target.querySelector('svg');
                        if (icon) icon.style.transform = 'rotate(0deg) scale(1)';
                    }}
                >
                    <IoHomeSharp size={24} style={styles.homeIcon} />
                    <span style={styles.buttonText}>Inicio</span>
                </button>
            </div>
        </div>
    );
};

const styles = {
    sidebar: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
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
        animation: 'slideInLeft 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
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
        animation: 'fadeInDown 0.8s ease-out',
        letterSpacing: '0.5px',
    },
    titleUnderline: {
        width: '80px',
        height: '4px',
        background: 'linear-gradient(90deg, #0abdc6, #ff6b6b, #ffa500)',
        margin: '0 auto',
        borderRadius: '2px',
        animation: 'expandWidth 1s ease-out 0.5s both',
    },
    scrollContainer: {
        flex: '1',
        overflowY: 'auto',
        overflowX: 'hidden',
        paddingRight: '8px',
        marginRight: '-8px',
        scrollbarWidth: 'thin',
        scrollbarColor: '#0abdc6 rgba(0,0,0,0.1)',
    },
    provinceList: {
        listStyle: 'none',
        padding: '0',
        margin: '0',
    },
    provinceItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '14px 16px',
        marginBottom: '8px',
        borderRadius: '12px',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        borderLeft: '4px solid transparent',
        position: 'relative',
        animation: 'fadeInUp 0.6s ease-out both',
        cursor: 'pointer',
    },
    sidebarLink: {
        textDecoration: 'none',
        flex: '1',
        marginRight: '16px',
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
    },
    colorSquare: {
        width: '18px',
        height: '18px',
        borderRadius: '6px',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        cursor: 'pointer',
        animation: 'popIn 0.6s ease-out both',
        border: '2px solid rgba(255,255,255,0.8)',
        position: 'relative',
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
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: '0 4px 15px rgba(10, 189, 198, 0.3)',
        position: 'relative',
        overflow: 'hidden',
        minWidth: '140px',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
    },
    homeIcon: {
        transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    buttonText: {
        fontWeight: '700',
        fontSize: '14px',
    },
};

// Add CSS animations and responsive styles
if (typeof document !== 'undefined') {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = `
        @keyframes slideInLeft {
            from {
                opacity: 0;
                transform: translateX(-100px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        @keyframes fadeInDown {
            from {
                opacity: 0;
                transform: translateY(-30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
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
        
        @keyframes expandWidth {
            from {
                width: 0;
                opacity: 0;
            }
            to {
                width: 80px;
                opacity: 1;
            }
        }
        
        @keyframes popIn {
            from {
                opacity: 0;
                transform: scale(0) rotate(180deg);
            }
            to {
                opacity: 1;
                transform: scale(1) rotate(0deg);
            }
        }
        
        /* Custom scrollbar */
        .sidebar::-webkit-scrollbar {
            width: 8px;
        }
        
        .sidebar::-webkit-scrollbar-track {
            background: rgba(0,0,0,0.05);
            border-radius: 4px;
        }
        
        .sidebar::-webkit-scrollbar-thumb {
            background: linear-gradient(45deg, #0abdc6, #ff6b6b);
            border-radius: 4px;
            transition: background 0.3s ease;
        }
        
        .sidebar::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(45deg, #ff6b6b, #ffa500);
        }
        
        /* Responsive Design */
        @media (max-width: 1024px) {
            .sidebar {
                width: 280px !important;
                margin-right: 20px !important;
                padding: 20px !important;
            }
        }
        
        @media (max-width: 768px) {
            .sidebar {
                width: 100% !important;
                margin-right: 0 !important;
                margin-bottom: 20px !important;
                max-height: 50vh !important;
                border-radius: 16px !important;
            }
            
            .provinceItem {
                padding: 12px 14px !important;
            }
            
            .sidebarTitle {
                font-size: 20px !important;
            }
            
            .buttonGoBack {
                padding: 12px 24px !important;
                min-width: 120px !important;
            }
        }
        
        @media (max-width: 640px) {
            .sidebar {
                padding: 16px !important;
                max-height: 45vh !important;
            }
            
            .colorSquare {
                width: 14px !important;
                height: 14px !important;
            }
            
            .provinceName {
                font-size: 14px !important;
            }
            
            .buttonText {
                font-size: 12px !important;
            }
        }
        
        /* Hover effects for better UX */
        .sidebar::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: linear-gradient(45deg, #0abdc6, #ff6b6b, #ffa500, #0abdc6);
            border-radius: 22px;
            opacity: 0;
            z-index: -1;
            transition: opacity 0.3s ease;
        }
        
        .sidebar:hover::before {
            opacity: 0.1;
        }
        
        /* Pulse animation for button */
        @keyframes pulse {
            0% {
                box-shadow: 0 4px 15px rgba(10, 189, 198, 0.3);
            }
            50% {
                box-shadow: 0 4px 25px rgba(10, 189, 198, 0.5);
            }
            100% {
                box-shadow: 0 4px 15px rgba(10, 189, 198, 0.3);
            }
        }
        
        .buttonGoBack {
            animation: pulse 2s infinite;
        }
    `;
    document.head.appendChild(styleSheet);
}

export default Sidebar;
