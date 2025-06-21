
import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

// Animaciones
const fadeIn = keyframes`
from { opacity: 0; transform: translateY(20px); }
to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
0% { transform: scale(1); }
50% { transform: scale(1.05); }
100% { transform: scale(1); }
`;

// Componentes estilizados
const MainContainer = styled.div`
font-family: 'Poppins', sans-serif;
max-width: 1200px;
margin: 0 auto;
padding: 20px;
display: flex;
flex-direction: column;
align-items: center;
min-height: 100vh;
`;

const HeroSection = styled.section`
background: linear-gradient(135deg, #1e7a8c 0%, #155d6d 100%);
color: white;
padding: 80px 40px;
border-radius: 16px;
text-align: center;
width: 100%;
margin-bottom: 60px;
box-shadow: 0 10px 30px rgba(30, 122, 140, 0.3);
animation: ${fadeIn} 0.8s ease-out;
position: relative;
overflow: hidden;

&::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
    animation: ${pulse} 8s infinite alternate;
}
`;

const MainTitle = styled.h1`
font-size: 3.2rem;
margin-bottom: 20px;
font-weight: 700;
position: relative;
z-index: 2;
text-shadow: 0 2px 4px rgba(0,0,0,0.1);

@media (max-width: 768px) {
    font-size: 2.5rem;
}
`;

const SubTitle = styled.p`
font-size: 1.4rem;
margin-bottom: 40px;
opacity: 0.9;
max-width: 700px;
margin-left: auto;
margin-right: auto;
position: relative;
z-index: 2;
line-height: 1.6;

@media (max-width: 768px) {
    font-size: 1.1rem;
}
`;

const ButtonGroup = styled.div`
display: flex;
gap: 20px;
justify-content: center;
flex-wrap: wrap;
position: relative;
z-index: 2;
`;

const PrimaryButton = styled(Link)`
background-color: #a31621;
color: white;
padding: 16px 40px;
border-radius: 50px;
border: none;
font-size: 1.1rem;
font-weight: 600;
cursor: pointer;
text-decoration: none;
transition: all 0.3s ease;
box-shadow: 0 4px 15px rgba(163, 22, 33, 0.4);

&:hover {
    background-color: #c21827;
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(163, 22, 33, 0.6);
}
`;

const SecondaryButton = styled(Link)`
background-color: transparent;
color: white;
padding: 16px 40px;
border-radius: 50px;
border: 2px solid white;
font-size: 1.1rem;
font-weight: 600;
cursor: pointer;
text-decoration: none;
transition: all 0.3s ease;

&:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-3px);
}
`;

const FeaturesSection = styled.section`
width: 100%;
margin-bottom: 60px;
text-align: center;
`;

const SectionTitle = styled.h2`
color: #1e7a8c;
font-size: 2.2rem;
margin-bottom: 50px;
font-weight: 600;
position: relative;
display: inline-block;

&::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background-color: #a31621;
    border-radius: 2px;
}
`;

const FeaturesGrid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
gap: 30px;
`;

const FeatureCard = styled.div`
background: white;
padding: 40px 30px;
border-radius: 12px;
box-shadow: 0 5px 25px rgba(0, 0, 0, 0.08);
transition: all 0.3s ease;
animation: ${fadeIn} 0.8s ease-out;
animation-fill-mode: both;

&:nth-child(1) { animation-delay: 0.2s; }
&:nth-child(2) { animation-delay: 0.4s; }
&:nth-child(3) { animation-delay: 0.6s; }

&:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.12);
}
`;

const FeatureIcon = styled.div`
font-size: 3.5rem;
margin-bottom: 25px;
color: #1e7a8c;
`;

const FeatureTitle = styled.h3`
color: #a31621;
font-size: 1.5rem;
margin-bottom: 15px;
font-weight: 600;
`;

const FeatureDescription = styled.p`
color: #555;
line-height: 1.6;
`;

const CtaSection = styled.section`
background: linear-gradient(135deg, #1e7a8c 0%, #155d6d 100%);
color: white;
padding: 60px;
border-radius: 16px;
width: 100%;
text-align: center;
margin-top: 40px;
box-shadow: 0 10px 30px rgba(30, 122, 140, 0.3);
position: relative;
overflow: hidden;
`;

const Home = () => {
    return (
    <MainContainer>
        <HeroSection>
        <MainTitle>Controla Tu Salud con MAD</MainTitle>
        <SubTitle>
            La aplicación definitiva para nunca olvidar tus medicamentos. 
            Recibe recordatorios inteligentes y lleva un control completo de tu tratamiento.
        </SubTitle>
        <ButtonGroup>
            <PrimaryButton to="/login">Iniciar Sesión</PrimaryButton>
            <SecondaryButton to="/crearusu">Registrarse</SecondaryButton>
        </ButtonGroup>
        </HeroSection>

    <FeaturesSection>
        <SectionTitle>Nuestras Características</SectionTitle>
        <FeaturesGrid>
        <FeatureCard>
            <FeatureIcon>⏰</FeatureIcon>
            <FeatureTitle>Recordatorios Inteligentes</FeatureTitle>
            <FeatureDescription>
            Configura alarmas personalizadas para cada medicamento y recibe notificaciones cuando sea hora de tomarlos.
            </FeatureDescription>
        </FeatureCard>
        <FeatureCard>
            <FeatureIcon>📊</FeatureIcon>
            <FeatureTitle>Seguimiento Detallado</FeatureTitle>
            <FeatureDescription>
            Visualiza tu historial de medicación y lleva un registro preciso de cada dosis tomada.
            </FeatureDescription>
        </FeatureCard>
        <FeatureCard>
            <FeatureIcon>📱</FeatureIcon>
            <FeatureTitle>Acceso Multiplataforma</FeatureTitle>
            <FeatureDescription>
            Sincroniza tus datos entre todos tus dispositivos y accede desde cualquier lugar.
            </FeatureDescription>
        </FeatureCard>
        </FeaturesGrid>
    </FeaturesSection>

    <CtaSection>
        <MainTitle style={{ fontSize: '2.5rem', marginBottom: '20px' }}>¿Listo para comenzar?</MainTitle>
        <SubTitle style={{ marginBottom: '30px' }}>
        Únete a miles de usuarios que ya controlan su medicación con MAD
        </SubTitle>
        <PrimaryButton to="/crearusu" style={{ 
        backgroundColor: 'white', 
        color: '#a31621',
        fontSize: '1.2rem',
        padding: '18px 50px'
        }}>
        Comenzar Ahora
        </PrimaryButton>
    </CtaSection>
    </MainContainer>
);
};

export default Home;