'use client'

import React from 'react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { IoArrowBackSharp } from "react-icons/io5";

const Province = ({ params }) => {
    const router = useRouter();
    const id = params.id;
    const [dataProvinceId, setDataProvinceId] = useState({});
    const [isQuechua, setIsQuechua] = useState(false);
    const [questions, setQuestions] = useState(false);
    const [loading, setLoading] = useState(true);

    const handleClickGoBack = () => {
        router.push('/mapaProvincia/mitoLeyenda');
    };

    useEffect(() => {
        if (id) {
            const fetchDataId = async () => {
                try {
                    setLoading(true);
                    const response = await fetch(`/api/data?id=${id}`);
                    const data = await response.json();
                    setDataProvinceId(data);
                } catch (error) {
                    console.error('Error fetching data:', error);
                } finally {
                    setLoading(false);
                }
            }
            fetchDataId();
        }
    }, [id]);

    const toggleLanguage = () => {
        setIsQuechua(!isQuechua);
    }

    const handleQuestion = () => {
        setQuestions(!questions);
    }

    if (loading) {
        return (
            <div style={styles.loadingContainer}>
                <div style={styles.loadingContent}>
                    <div style={styles.spinner}></div>
                    <p style={styles.loadingText}>Cargando provincia...</p>
                </div>
            </div>
        );
    }

    return (
        <div style={styles.mainContainer}>
            <div style={styles.contentContainer}>
                <div style={styles.flexContainer}>
                    {/* Content Wrapper */}
                    <div style={styles.contentWrapper}>
                        {/* Language Switch */}
                        <div style={styles.languageSwitch}>
                            <button 
                                onClick={handleClickGoBack}
                                style={styles.buttonGoBack}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = '#ff6b6b';
                                    e.target.style.transform = 'translateY(-4px)';
                                    e.target.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = '#0abdc6';
                                    e.target.style.transform = 'translateY(0)';
                                    e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                                }}
                            >
                                <IoArrowBackSharp size={24} style={styles.buttonIcon} />
                                Regresar
                            </button>
                            <button 
                                onClick={toggleLanguage}
                                style={styles.languageButton}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = 'rgba(255,255,255,0.3)';
                                    e.target.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = 'rgba(255,255,255,0.2)';
                                    e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                                }}
                            >
                                {isQuechua ? '🇪🇸 Español' : '🏔️ Quechua'}
                            </button>
                        </div>

                        {/* Content */}
                        {isQuechua ? (
                            <div style={styles.quechuaContent}>
                                <h1 style={styles.titleQuechua}>
                                    {dataProvinceId?.titleQuechua || 'Cargando...'}
                                </h1>
                                <p style={styles.descriptionQuechua}>
                                    {dataProvinceId?.descriptionQuechua || 'Cargando descripción...'}
                                </p>
                                <button 
                                    onClick={handleQuestion}
                                    style={styles.questionButton}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = '#b45309';
                                        e.target.style.transform = 'translateY(-2px)';
                                        e.target.style.boxShadow = '0 8px 20px rgba(180,83,9,0.3)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = '#d97706';
                                        e.target.style.transform = 'translateY(0)';
                                        e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                                    }}
                                >
                                    🤔 Tapuyquna
                                </button>
                                {questions && dataProvinceId?.questionsQuechua && (
                                    <div style={styles.questionsContainer}>
                                        <h3 style={styles.questionsTitle}>Tapuyquna:</h3>
                                        {dataProvinceId.questionsQuechua.map((question, index) => (
                                            <div 
                                                key={index} 
                                                style={{
                                                    ...styles.questionItem,
                                                    animationDelay: `${index * 0.1}s`
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.target.style.transform = 'translateY(-2px)';
                                                    e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.transform = 'translateY(0)';
                                                    e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                                                }}
                                            >
                                                <p style={styles.questionTextQuechua}>
                                                    <span style={styles.questionNumber}>{index + 1}</span>
                                                    {question}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div style={styles.spanishContent}>
                                <h1 style={styles.titleSpanish}>
                                    {dataProvinceId?.title || 'Cargando...'}
                                </h1>
                                <p style={styles.descriptionSpanish}>
                                    {dataProvinceId?.description || 'Cargando descripción...'}
                                </p>
                                <button 
                                    onClick={handleQuestion}
                                    style={styles.questionButtonSpanish}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = '#ff6b6b';
                                        e.target.style.transform = 'translateY(-2px)';
                                        e.target.style.boxShadow = '0 8px 20px rgba(255,107,107,0.3)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = '#0abdc6';
                                        e.target.style.transform = 'translateY(0)';
                                        e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                                    }}
                                >
                                    📚 Preguntas de comprensión lectora
                                </button>
                                {questions && dataProvinceId?.questions && (
                                    <div style={styles.questionsContainer}>
                                        <h3 style={styles.questionsTitleSpanish}>Preguntas de comprensión:</h3>
                                        {dataProvinceId.questions.map((question, index) => (
                                            <div 
                                                key={index} 
                                                style={{
                                                    ...styles.questionItemSpanish,
                                                    animationDelay: `${index * 0.1}s`
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.target.style.transform = 'translateY(-2px)';
                                                    e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.transform = 'translateY(0)';
                                                    e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                                                }}
                                            >
                                                <p style={styles.questionTextSpanish}>
                                                    <span style={styles.questionNumberSpanish}>{index + 1}</span>
                                                    {question}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Image Container */}
                    {dataProvinceId?.images && dataProvinceId.images[0] && (
                        <div style={styles.imageContainer}>
                            <div style={styles.imageWrapper}>
                                <img 
                                    src={dataProvinceId.images[0] || "/placeholder.svg"} 
                                    alt={`Imagen de ${dataProvinceId?.title || 'la provincia'}`}
                                    style={styles.provinceImage}
                                    onMouseEnter={(e) => {
                                        e.target.style.transform = 'scale(1.05)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.transform = 'scale(1)';
                                    }}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const styles = {
    // Loading styles
    loadingContainer: {
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0abdc6 0%, #ff6b6b 50%, #ffa500 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loadingContent: {
        textAlign: 'center',
        color: 'white',
    },
    spinner: {
        width: '48px',
        height: '48px',
        border: '4px solid rgba(255,255,255,0.3)',
        borderTop: '4px solid white',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
        margin: '0 auto 16px',
    },
    loadingText: {
        fontSize: '18px',
        fontWeight: '600',
        margin: 0,
    },

    // Main container styles
    mainContainer: {
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0abdc6 0%, #ff6b6b 50%, #ffa500 100%)',
        padding: '16px',
    },
    contentContainer: {
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '32px 0',
    },
    flexContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: '32px',
        '@media (max-width: 1024px)': {
            flexDirection: 'column',
        },
    },

    // Content wrapper
    contentWrapper: {
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
    },

    // Language switch
    languageSwitch: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '16px',
        '@media (max-width: 640px)': {
            flexDirection: 'column',
            alignItems: 'flex-start',
        },
    },
    buttonGoBack: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#0abdc6',
        color: 'white',
        fontWeight: 'bold',
        padding: '12px 16px',
        border: 'none',
        borderRadius: '12px',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    },
    buttonIcon: {
        marginRight: '8px',
        transition: 'transform 0.3s ease',
    },
    languageButton: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        backdropFilter: 'blur(10px)',
        color: 'white',
        fontWeight: 'bold',
        padding: '12px 16px',
        border: '1px solid rgba(255,255,255,0.3)',
        borderRadius: '12px',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    },

    // Quechua content
    quechuaContent: {
        background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
        padding: '24px',
        borderRadius: '16px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        border: '1px solid #f59e0b',
        animation: 'fadeIn 0.5s ease-out',
    },
    titleQuechua: {
        fontSize: '32px',
        fontWeight: 'bold',
        color: '#b45309',
        marginBottom: '16px',
        borderBottom: '2px solid #f59e0b',
        paddingBottom: '8px',
    },
    descriptionQuechua: {
        color: '#d97706',
        fontSize: '18px',
        lineHeight: '1.6',
        marginBottom: '24px',
    },
    questionButton: {
        backgroundColor: '#d97706',
        color: 'white',
        fontWeight: 'bold',
        padding: '12px 24px',
        border: 'none',
        borderRadius: '12px',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        marginBottom: '24px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    },

    // Spanish content
    spanishContent: {
        background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
        padding: '24px',
        borderRadius: '16px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        border: '1px solid #e2e8f0',
        animation: 'fadeIn 0.5s ease-out',
    },
    titleSpanish: {
        fontSize: '32px',
        fontWeight: 'bold',
        color: '#0abdc6',
        marginBottom: '16px',
        borderBottom: '2px solid #0abdc6',
        paddingBottom: '8px',
    },
    descriptionSpanish: {
        color: '#4b5563',
        fontSize: '18px',
        lineHeight: '1.6',
        marginBottom: '24px',
    },
    questionButtonSpanish: {
        backgroundColor: '#0abdc6',
        color: 'white',
        fontWeight: 'bold',
        padding: '12px 24px',
        border: 'none',
        borderRadius: '12px',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        marginBottom: '24px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    },

    // Questions
    questionsContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        animation: 'fadeIn 0.5s ease-out',
    },
    questionsTitle: {
        fontSize: '20px',
        fontWeight: '600',
        color: '#b45309',
        borderBottom: '1px solid #f59e0b',
        paddingBottom: '8px',
        marginBottom: '8px',
    },
    questionsTitleSpanish: {
        fontSize: '20px',
        fontWeight: '600',
        color: '#0abdc6',
        borderBottom: '1px solid #0abdc6',
        paddingBottom: '8px',
        marginBottom: '8px',
    },
    questionItem: {
        backgroundColor: 'rgba(255,255,255,0.8)',
        backdropFilter: 'blur(10px)',
        padding: '16px',
        borderRadius: '12px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        border: '1px solid #f59e0b',
        transition: 'all 0.3s ease',
        animation: 'fadeIn 0.5s ease-out',
    },
    questionItemSpanish: {
        backgroundColor: 'rgba(248,250,252,0.8)',
        backdropFilter: 'blur(10px)',
        padding: '16px',
        borderRadius: '12px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        border: '1px solid #e2e8f0',
        transition: 'all 0.3s ease',
        animation: 'fadeIn 0.5s ease-out',
    },
    questionTextQuechua: {
        color: '#b45309',
        fontWeight: '500',
        margin: 0,
        display: 'flex',
        alignItems: 'center',
    },
    questionTextSpanish: {
        color: '#4b5563',
        fontWeight: '500',
        margin: 0,
        display: 'flex',
        alignItems: 'center',
    },
    questionNumber: {
        backgroundColor: '#f59e0b',
        color: 'white',
        padding: '4px 8px',
        borderRadius: '50%',
        fontSize: '14px',
        fontWeight: 'bold',
        marginRight: '12px',
        minWidth: '24px',
        textAlign: 'center',
    },
    questionNumberSpanish: {
        backgroundColor: '#0abdc6',
        color: 'white',
        padding: '4px 8px',
        borderRadius: '50%',
        fontSize: '14px',
        fontWeight: 'bold',
        marginRight: '12px',
        minWidth: '24px',
        textAlign: 'center',
    },

    // Image container
    imageContainer: {
        flex: '1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        animation: 'fadeIn 0.5s ease-out 0.3s both',
    },
    imageWrapper: {
        position: 'relative',
        padding: '8px',
        background: 'linear-gradient(135deg, #0abdc6, #ff6b6b, #ffa500)',
        borderRadius: '16px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
    },
    provinceImage: {
        width: '100%',
        maxWidth: '500px',
        height: 'auto',
        objectFit: 'cover',
        borderRadius: '12px',
        transition: 'transform 0.3s ease',
        backgroundColor: 'white',
    },
};

// Add CSS animations
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(styleSheet);

export default Province;
