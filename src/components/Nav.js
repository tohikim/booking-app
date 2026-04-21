import navItems from './navData';
import useIsMobile from '../useIsMobile';

const Nav = () => {
    return (
        <nav>
            <ul style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap', // Prevents breaking on 800px screens
                justifyContent: 'center',
                gap: '1.5rem',
                listStyle: 'none',
                padding: 0,
                margin: 0
            }}>
                {navItems.map((item) => (
                    <li key={item} style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                        {item}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;