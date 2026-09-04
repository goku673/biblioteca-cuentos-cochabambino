'use client'

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoArrowBackSharp } from "react-icons/io5";
import {
    completeProvince,
    getCompletedProvinceIds,
    TOTAL_PROVINCES,
} from '@/lib/readingProgress';

const CONFETTI_PIECES = [
    { x: '8%', color: '#ff6b6b', delay: '0s' },
    { x: '17%', color: '#ffd447', delay: '.12s' },
    { x: '27%', color: '#0abdc6', delay: '.04s' },
    { x: '38%', color: '#8b5cf6', delay: '.18s' },
    { x: '48%', color: '#34d399', delay: '.08s' },
    { x: '58%', color: '#ff8c42', delay: '.22s' },
    { x: '68%', color: '#ef476f', delay: '.02s' },
    { x: '78%', color: '#06d6a0', delay: '.16s' },
    { x: '88%', color: '#3b82f6', delay: '.1s' },
    { x: '95%', color: '#f59e0b', delay: '.2s' },
];

const ProvinceReader = ({ dataProvinceId }) => {
    const id = dataProvinceId.id;
    const [isQuechua, setIsQuechua] = useState(false);
    const [questions, setQuestions] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);
    const [showCelebration, setShowCelebration] = useState(false);
    const [completedCount, setCompletedCount] = useState(0);
    const celebrationCloseButtonRef = useRef(null);

    useEffect(() => {
        setQuestions(false);
        setShowCelebration(false);
        const completedIds = getCompletedProvinceIds();
        setIsCompleted(completedIds.includes(Number(id)));
        setCompletedCount(completedIds.length);
    }, [id]);

    useEffect(() => {
        if (!showCelebration) return undefined;

        const previouslyFocusedElement = document.activeElement;
        const handleEscape = (event) => {
            if (event.key === 'Escape') setShowCelebration(false);
        };

        document.addEventListener('keydown', handleEscape);
        celebrationCloseButtonRef.current?.focus();

        return () => {
            document.removeEventListener('keydown', handleEscape);
            previouslyFocusedElement?.focus?.();
        };
    }, [showCelebration]);

    const toggleLanguage = () => {
        setIsQuechua((currentLanguage) => !currentLanguage);
    }

    const handleQuestion = () => {
        setQuestions((areQuestionsVisible) => !areQuestionsVisible);
    }

    const handleCompleteActivity = () => {
        const completedIds = completeProvince(Number(id));
        setIsCompleted(true);
        setCompletedCount(completedIds.length);
        setShowCelebration(true);
    };

    const completedPercentage = Math.round((completedCount / TOTAL_PROVINCES) * 100);
    const completedAllProvinces = completedCount === TOTAL_PROVINCES;

    return (
        <div className="province-page" style={styles.mainContainer}>
            <div className="province-shell" style={styles.contentContainer}>
                <div className="province-layout" style={styles.flexContainer}>
                    {/* Content Wrapper */}
                    <div className="province-copy" style={styles.contentWrapper}>
                        {/* Language Switch */}
                        <div className="province-toolbar" style={styles.languageSwitch}>
                            <Link
                                href="/mapaProvincia/mitoLeyenda"
                                className="reader-back-button"
                                style={styles.buttonGoBack}
                            >
                                <IoArrowBackSharp size={24} style={styles.buttonIcon} />
                                Regresar
                            </Link>
                            <button 
                                onClick={toggleLanguage}
                                className="reader-language-button"
                                style={styles.languageButton}
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
                                    className="reader-question-button reader-question-button--quechua"
                                    style={styles.questionButton}
                                >
                                    {questions ? '🙈 Tapuykunata pakay' : '🤔 Tapuykunata qhaway'}
                                </button>
                                {questions && dataProvinceId?.questionsQuechua && (
                                    <div style={styles.questionsContainer}>
                                        <h3 style={styles.questionsTitle}>Tapuyquna:</h3>
                                        {dataProvinceId.questionsQuechua.map((question, index) => (
                                            <div 
                                                key={index} 
                                                className="reader-question-card"
                                                style={styles.questionItem}
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
                                    className="reader-question-button reader-question-button--spanish"
                                    style={styles.questionButtonSpanish}
                                >
                                    {questions ? '🙈 Ocultar preguntas' : '📚 Ver preguntas de comprensión'}
                                </button>
                                {questions && dataProvinceId?.questions && (
                                    <div style={styles.questionsContainer}>
                                        <h3 style={styles.questionsTitleSpanish}>Preguntas de comprensión:</h3>
                                        {dataProvinceId.questions.map((question, index) => (
                                            <div 
                                                key={index} 
                                                className="reader-question-card"
                                                style={styles.questionItemSpanish}
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
                                    className="reader-province-image"
                                    style={styles.provinceImage}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {showCelebration && (
                <div
                    className="celebration-backdrop"
                    onClick={() => setShowCelebration(false)}
                >
                    <section
                        className="celebration-dialog"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="celebration-title"
                        aria-describedby="celebration-message"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="celebration-confetti" aria-hidden="true">
                            {CONFETTI_PIECES.map((piece, index) => (
                                <span
                                    key={index}
                                    style={{
                                        '--confetti-x': piece.x,
                                        '--confetti-color': piece.color,
                                        '--confetti-delay': piece.delay,
                                    }}
                                />
                            ))}
                        </div>
                        <button
                            ref={celebrationCloseButtonRef}
                            type="button"
                            className="celebration-close"
                            aria-label="Cerrar felicitación"
                            onClick={() => setShowCelebration(false)}
                        >
                            ×
                        </button>

                        <div className="celebration-trophy" aria-hidden="true">
                            {completedAllProvinces ? '🏆' : '⭐'}
                        </div>
                        <p className="celebration-kicker">
                            {completedAllProvinces ? '¡Recorrido completado!' : 'Allin ruwasqa · ¡Muy bien hecho!'}
                        </p>
                        <h2 id="celebration-title">
                            {completedAllProvinces ? '¡Eres Guardián de los cuentos!' : '¡Excelente trabajo!'}
                        </h2>
                        <p id="celebration-message" className="celebration-message">
                            {completedAllProvinces
                                ? 'Conociste las 16 provincias y ayudaste a conservar sus historias. ¡Cochabamba está orgullosa de ti!'
                                : `Ganaste la estrella de ${dataProvinceId.province}. Cada cuento que lees mantiene viva nuestra cultura.`}
                        </p>

                        <div className="celebration-progress" aria-label={`${completedCount} de ${TOTAL_PROVINCES} provincias completadas`}>
                            <div className="celebration-progress__heading">
                                <span>Mi recorrido por Cochabamba</span>
                                <strong>{completedCount}/{TOTAL_PROVINCES} ⭐</strong>
                            </div>
                            <div className="celebration-progress__track" aria-hidden="true">
                                <span style={{ width: `${completedPercentage}%` }} />
                            </div>
                        </div>

                        <div className="celebration-actions">
                            <Link href="/mapaProvincia/mitoLeyenda" className="celebration-primary-action">
                                🗺️ {completedAllProvinces ? 'Ver mi mapa completo' : 'Explorar otra provincia'}
                            </Link>
                            <button
                                type="button"
                                className="celebration-secondary-action"
                                onClick={() => setShowCelebration(false)}
                            >
                                Seguir leyendo
                            </button>
                        </div>
                    </section>
                </div>
            )}
        </div>
    );
};

const styles = {
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
        transition: 'transform 0.18s ease, background-color 0.18s ease, box-shadow 0.18s ease',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        textDecoration: 'none',
    },
    buttonIcon: {
        marginRight: '8px',
        transition: 'transform 0.3s ease',
    },
    languageButton: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        color: 'white',
        fontWeight: 'bold',
        padding: '12px 16px',
        border: '1px solid rgba(255,255,255,0.3)',
        borderRadius: '12px',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'background-color 0.18s ease, box-shadow 0.18s ease',
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
        transition: 'transform 0.18s ease, background-color 0.18s ease, box-shadow 0.18s ease',
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
        transition: 'transform 0.18s ease, background-color 0.18s ease, box-shadow 0.18s ease',
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
        backgroundColor: '#fffdf7',
        padding: '16px',
        borderRadius: '12px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        border: '1px solid #f59e0b',
        transition: 'transform 0.18s ease, box-shadow 0.18s ease',
        animation: 'fadeIn 0.5s ease-out',
    },
    questionItemSpanish: {
        backgroundColor: '#f8fafc',
        padding: '16px',
        borderRadius: '12px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        border: '1px solid #e2e8f0',
        transition: 'transform 0.18s ease, box-shadow 0.18s ease',
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
