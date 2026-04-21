import useIsMobile from '../useIsMobile';

const About = () => {
    const isMobile = useIsMobile();

    const containerStyle = {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: isMobile ? '4rem 2rem' : '6rem 2rem',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '4rem'
    };

    const textSectionStyle = {
        flex: 1,
        textAlign: isMobile ? 'center' : 'left'
    };

    const imageSectionStyle = {
        flex: 1,
        position: 'relative',
        height: isMobile ? '300px' : '450px',
        width: '100%',
        display: 'flex',
        justifyContent: isMobile ? 'center' : 'flex-end',
        marginTop: isMobile ? '2rem' : '0'
    };

    const imageStyle = {
        width: isMobile ? '45%' : '280px',
        height: isMobile ? '200px' : '350px',
        objectFit: 'cover',
        borderRadius: '16px',
        position: 'absolute',
        boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
    };

    return (
        <section id="about" style={{ backgroundColor: '#FFFFFF' }}>
            <div style={containerStyle}>
                {/* Text Content */}
                <div style={textSectionStyle}>
                    <h1 style={{
                        fontSize: '3.5rem',
                        fontFamily: 'Markazi Text',
                        color: '#495E57',
                        margin: 0
                    }}>Little Lemon</h1>
                    <h2 style={{
                        fontSize: '2rem',
                        fontFamily: 'Markazi Text',
                        color: '#333333',
                        marginTop: '-10px',
                        marginBottom: '1.5rem'
                    }}>Chicago</h2>
                    <p style={{
                        fontSize: '1.1rem',
                        lineHeight: '1.6',
                        color: '#495E57',
                        maxWidth: isMobile ? '100%' : '450px'
                    }}>
                        Little Lemon is owned by two Italian brothers, Adrian and Mario, who moved to Chicago 
                        to pursue their shared dream of owning a restaurant. To craft the menu, Mario relies 
                        on family recipes and his experience as a chef in Italy. Adrian handles the marketing 
                        and expansion, ensuring that every guest feels like part of the family the moment 
                        they walk through the door.
                    </p>
                </div>

                {/* Overlapping Image Collage */}
                <div style={imageSectionStyle}>
                    <img
                        src=""
                        alt="Adrian and Mario cooking"
                        style={{
                            ...imageStyle,
                            zIndex: 1,
                            top: '0',
                            right: isMobile ? '10%' : '150px'
                        }}
                    />
                    <img
                        src=""
                        alt="Adrian and Mario laughing"
                        style={{
                            ...imageStyle,
                            zIndex: 2,
                            top: isMobile ? '60px' : '100px',
                            right: isMobile ? '35%' : '0'
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default About;