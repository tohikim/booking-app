import navItems from './navData';

const Nav = ({ isMobile, isOpen }) => {
    const navListStyle = {
        display: isMobile ? (isOpen ? 'flex' : 'none') : 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        position: isMobile ? 'absolute' : 'static',
        top: isMobile ? '100%' : 'auto', // Adjust based on your header height
        left: 0,
        width: isMobile ? '100%' : 'auto',
        backgroundColor: '#FFFFFF',
        padding: isMobile ? '1.5rem 0' : '0',
        gap: isMobile ? '1rem' : '1.5rem',
        listStyle: 'none',
        margin: 0,
        alignItems: 'center',
        zIndex: 100,
    };

    return (
        <nav>
            <ul style={navListStyle}>
                {navItems.map((item) => (
                    <li key={item} style={{ 
                        fontWeight: '600', 
                        fontSize: '0.9rem',
                        fontFamily: '"Karla", sans-serif'
                    }}>
                        {item}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;