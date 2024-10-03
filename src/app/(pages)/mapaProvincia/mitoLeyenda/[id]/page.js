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

    const handleClickGoBack = (id) => {
        router.push('/mapaProvincia/mitoLeyenda');
    };
    useEffect(() => {
        if (id) {
            const fetchDataId = async () => {
                const response = await fetch(`/api/data?id=${id}`);
                const data = await response.json();
                setDataProvinceId(data);
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


    return (
        <div style={styles.container}>
          <div style={styles.contentWrapper}>
            <div style={styles.languageSwitch}>
              <button style={styles.buttonGoBack} onClick={handleClickGoBack}>
                <IoArrowBackSharp size={24} style={styles.buttonGoBackIcon} />
                Regresar
              </button>
              <button style={styles.button} onClick={toggleLanguage}>
                Cambiar idioma
              </button>
            </div>
            {isQuechua ? (
              <div style={styles.quechuaContent}>
                <h1 style={styles.titleQuechua}>{dataProvinceId?.titleQuechua}</h1>
                <p style={styles.descriptionQuechua}>{dataProvinceId?.descriptionQuechua}</p>
                <button style={styles.buttonWarning} onClick={handleQuestion}>
                  Tapuyquna
                </button>
                {questions && (
                  <div style={styles.questionsQuechua}>
                    {dataProvinceId?.questionsQuechua?.map((question, index) => (
                      <div key={index} style={styles.questionItem}>
                        <p style={styles.questionTextQuechua}>{question}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div style={styles.spanishContent}>
                <h1 style={styles.title}>{dataProvinceId?.title}</h1>
                <p style={styles.description}>{dataProvinceId?.description}</p>
                <button style={styles.buttonWarning} onClick={handleQuestion}>
                  Preguntas de compresión lectora
                </button>
                {questions && (
                  <div style={styles.questions}>
                    {dataProvinceId?.questions?.map((question, index) => (
                      <div key={index} style={styles.questionItem}>
                        <p style={styles.questionText}>{question}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
          {dataProvinceId?.images && (
            <div style={styles.imageContainer}>
              <img src={dataProvinceId.images[0]} alt="Imagen de la provincia" style={styles.provinceImage} />
            </div>
          )}
        </div>
      );
    
}
const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem 0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    contentWrapper: {
      flex: '1',
      marginRight: '2rem',
    },
    languageSwitch: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '1rem',
    },
    buttonGoBack: {
      display: 'flex',
      alignItems: 'center',
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
    },
    buttonGoBackIcon: {
      marginRight: '0.5rem',
    },
    button: {
      backgroundColor: '#e5e7eb',
      color: '#4b5563',
      fontWeight: 'bold',
      padding: '0.5rem 1rem',
      borderRadius: '0.25rem',
      transition: 'background-color 0.3s',
    },
    quechuaContent: {
      backgroundColor: '#fffff0',
      padding: '1.5rem',
      borderRadius: '0.5rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    },
    titleQuechua: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#b45309',
      marginBottom: '1rem',
    },
    descriptionQuechua: {
      color: '#b37700',
      marginBottom: '1.5rem',
    },
    buttonWarning: {
      backgroundColor: '#b37700',
      color: '#ffffff',
      fontWeight: 'bold',
      padding: '0.5rem 1rem',
      borderRadius: '0.25rem',
      marginBottom: '1.5rem',
      transition: 'background-color 0.3s',
    },
    questionsQuechua: {
      display: 'grid',
      gridTemplateColumns: 'repeat(1, 1fr)',
      gap: '1rem',
    },
    questionItem: {
      backgroundColor: '#ffffff',
      padding: '1rem',
      borderRadius: '0.5rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    },
    questionTextQuechua: {
      color: '#b45309',
    },
    spanishContent: {
      backgroundColor: '#f3f4f6',
      padding: '1.5rem',
      borderRadius: '0.5rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    },
    title: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#4b5563',
      marginBottom: '1rem',
    },
    description: {
      color: '#6b7280',
      marginBottom: '1.5rem',
    },
    questions: {
      display: 'grid',
      gridTemplateColumns: 'repeat(1, 1fr)',
      gap: '1rem',
    },
    questionText: {
      color: '#4b5563',
    },
    imageContainer: {
      flex: '1',
      display: 'flex',
      justifyContent: 'center',
    },
    provinceImage: {
      maxWidth: '600px',
      borderRadius: '0.5rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    },
  
};

export default Province;