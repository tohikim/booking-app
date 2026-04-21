import Card from './Card';
import useIsMobile from '../useIsMobile';
import greekSaladImg from '../assets/greek salad.jpg';
import bruchettaImg from '../assets/bruchetta.svg';
import lemonDessertImg from '../assets/lemon dessert.jpg';


const Highlights = () => {
    const isMobile = useIsMobile();
    const containerStyle = {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: isMobile ? '2rem 1rem' : '4rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem'
    };

    const headerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: isMobile ? 'column' : 'row',
        textAlign: isMobile ? 'center' : 'left',
        gap: isMobile ? '1rem' : '0'
    };

    const cardGridStyle = {
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        gap: '2rem',
        alignItems: 'stretch'
    };

    return (
        <section style={containerStyle}>
            <div style={headerStyle}>
                <h1 style={{ fontSize: '2.5rem', fontFamily: 'Markazi Text' }}>
                    This weeks specials!
                </h1>
                <button style={{
                    backgroundColor: '#F4CE14',
                    border: 'none',
                    borderRadius: '16px',
                    padding: '1rem 2rem',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    cursor: 'pointer'
                }}>
                    Online Menu
                </button>
            </div>

            <div style={cardGridStyle}>
                <Card
                    image={greekSaladImg}
                    title="Greek Salad"
                    price="$12.99"
                    description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
                />
                <Card
                    image={bruchettaImg}
                    title="Bruchetta"
                    price="$5.99"
                    description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
                />
                <Card
                    image={lemonDessertImg}
                    title="Lemon Dessert"
                    price="$5.00"
                    description="This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
                />
            </div>
        </section>
    );
};

export default Highlights;