'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { IoArrowBackSharp } from "react-icons/io5";
import { completeProvince, getCompletedProvinceIds } from '@/lib/readingProgress';

const ProvinceReader = ({ dataProvinceId }) => {
    const router = useRouter();
    const id = dataProvinceId.id;
    const [isQuechua, setIsQuechua] = useState(false);
    const [questions, setQuestions] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);
    const [showCelebration, setShowCelebration] = useState(false);

    const handleClickGoBack = () => {
        router.push('/mapaProvincia/mitoLeyenda');
    };

    useEffect(() => {
        setQuestions(false);
        setShowCelebration(false);
        setIsCompleted(getCompletedProvinceIds().includes(Number(id)));
    }, [id]);

    const toggleLanguage = () => {
        setIsQuechua(!isQuechua);
    }

    const handleQuestion = () => {
        setQuestions(!questions);
    }

    const handleCompleteActivity = () => {
        completeProvince(Number(id));
        setIsCompleted(true);
        setShowCelebration(true);
    };

    return (
        <div className="province-page" style={styles.mainContainer}>
            <div className="province-shell" style={styles.contentContainer}>
                <div className="province-layout" style={styles.flexContainer}>
                    {/* Content Wrapper */}
                    <div className="province-copy" style={styles.contentWrapper}>
                        {/* Language Switch */}
                        <div className="province-toolbar" style={styles.languageSwitch}>
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
                            <div className="province-quechua" style={styles.quechuaContent}>
                                <h1 style={styles.titleQuechua}>
                                    {dataProvinceId?.titleQuechua || 'Cargando...'}
                                </h1>
                                <p style={styles.descriptionQuechua}>
                                    {dataProvinceId?.descriptionQuechua || 'Cargando descripción...'}
                                </p>
                                <button 
                                    onClick={handleQuestion}
                                    aria-expanded={questions}
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
                                    {questions ? '🙈 Tapuykunata pakay' : '🤔 Tapuykunata qhaway'}
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
                            <div className="province-spanish" style={styles.spanishContent}>
                                <h1 style={styles.titleSpanish}>
                                    {dataProvinceId?.title || 'Cargando...'}
                                </h1>
                                <p style={styles.descriptionSpanish}>
                                    {dataProvinceId?.description || 'Cargando descripción...'}
                                </p>
                                <button 
                                    onClick={handleQuestion}
                                    aria-expanded={questions}
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
                                    {questions ? '🙈 Ocultar preguntas' : '📚 Ver preguntas de comprensión'}
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
                        <section className={`learning-progress-card${isCompleted ? ' is-completed' : ''}`} aria-live="polite">
                            <div className="learning-progress-card__icon" aria-hidden="true">
                                {isCompleted ? '⭐' : '🏅'}
                            </div>
                            <div className="learning-progress-card__content">
                                <h2>{isCompleted ? '¡Provincia completada!' : 'Completa esta aventura'}</h2>
                                <p>
                                    {isCompleted
                                        ? `Ganaste la estrella de ${dataProvinceId?.province || 'esta provincia'}. Tu avance quedó guardado en este dispositivo.`
                                        : questions
                                            ? 'Cuando termines de responder las preguntas, gana tu estrella.'
                                            : 'Primero lee el cuento y abre las preguntas de comprensión.'}
                                </p>
                                <button
                                    type="button"
                                    className="complete-activity-button"
                                    onClick={handleCompleteActivity}
                                    disabled={!questions || isCompleted}
                                >
                                    {isCompleted ? '✓ Actividad completada' : '⭐ Completar actividad'}
                                </button>
                            </div>
                        </section>
                        {showCelebration && (
                            <div className="learning-celebration" role="status">
                                <span aria-hidden="true">🎉</span>
                                ¡Muy bien! Regresa al mapa para ver tu nueva estrella.
                            </div>
                        )}
                    </div>

                    {/* Image Container */}
                    {dataProvinceId?.images && dataProvinceId.images[0] && (
                        <div className="province-art" style={styles.imageContainer}>
                            <div style={styles.imageWrapper}>
                                <Image
                                    src={dataProvinceId.images[0] || "/placeholder.svg"} 
                                    alt={`Imagen de ${dataProvinceId?.title || 'la provincia'}`}
                                    width={1200}
                                    height={675}
                                    sizes="(max-width: 800px) 100vw, 42vw"
                                    priority
                                    unoptimized
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

export default ProvinceReader;
