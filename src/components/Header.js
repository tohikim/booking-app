import Nav from './Nav';
import logo from '../assets/Logo.svg';
import useIsMobile from '../useIsMobile';

const Header = () => {
    const isMobile = useIsMobile(); // Using the hook from before

    return (
        <header style={{ padding: '0 20px' }}> {/* Small "safety" padding for mobile */}
            <div style={{
                maxWidth: '1200px', // The "Safety Box"
                margin: '0 auto',   // Centers the box
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem 0'
            }}>
                <img alt="Little Lemon Logo" src={logo} style={{ width: '150px' }} />
                <Nav />
            </div>
        </header>
    );
};

export default Header;