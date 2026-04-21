import { useState, useEffect } from 'react';
import heroImage from '../assets/restauranfood.jpg';

const Hero = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const containerStyle = {
        paddingRight: isMobile ? '5vw' : '20vw',
        paddingLeft: isMobile ? '5vw' : '20vw',
        paddingTop: '4vh',
        paddingBottom: '4vh',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row', // Toggles to one column
        justifyContent: 'space-between',
        alignItems: isMobile ? 'center' : 'flex-start',
        color: 'white',
        gap: isMobile ? '2rem' : 'auto'
    };

    const textSectionStyle = {
        display: 'flex',
        flexDirection: 'column',
        width: isMobile ? '100%' : '40%',
        padding: isMobile ? '0' : '1rem',
        textAlign: isMobile ? 'center' : 'left',
    };

    const imageSectionStyle = {
        display: 'flex',
        flexDirection: 'column',
        width: isMobile ? '100%' : '40%',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
    };

    const imgStyle = {
        borderRadius: '15px',
        width: isMobile ? '100%' : '350px', // Stretches on mobile
        maxWidth: '350px',
        height: '350px',
        objectFit: 'cover',
        display: 'block',
        padding:0,
        margin:0
    };

    return (
        <div style={{ backgroundColor: '#495E57' }}>
            <div style={containerStyle}>
                <div style={textSectionStyle}>
                    <h1 style={{
                        padding: 0,
                        margin: 0,
                        fontSize: '2.5rem',
                        color: "#F4CE14",
                        marginBottom: '0.2rem',
                        fontFamily: 'Markazi Text',
                        fontWeight: '800',
                    }}>Little Lemon</h1>
                    <h5 style={{
                        padding: 0,
                        margin: 0,
                        fontSize: '1.4rem',
                        marginBottom: '1.5rem',
                        fontFamily: 'Markazi Text',
                        fontWeight: '800',
                    }}>Chicago</h5>
                    <p style={{
                        padding: 0,
                        margin: 0,
                        marginBottom: '1.5rem',
                        fontSize: '1rem',
                        fontWeight: '600',
                        lineHeight: '1.4rem'
                    }}>
                        We are a family-owned Mediterranean restaurant, focused on traditional 
                        recipes served with a modern twist. From our sun-soaked flavors to 
                        our artisan ingredients, we bring the heart of Greece to the streets of Chicago.
                    </p>
                    <button type="submit" style={{
                        padding: '0.5rem 1rem',
                        width: isMobile ? '100%' : '50%',
                        margin: isMobile ? '0 auto' : '0',
                        backgroundColor: '#F4CE14',
                        border: 0,
                        borderRadius: '8px',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                    }}>Reserve a Table</button>
                </div>

                <div style={imageSectionStyle}>
                    <img src={heroImage} alt="Hero" style={imgStyle} />
                </div>
            </div>
        </div>
    );
};

export default Hero;