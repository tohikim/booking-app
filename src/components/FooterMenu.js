import useIsMobile from '../useIsMobile';

const FooterMenu = ({ label, items = [] }) => {
    const isMobile = useIsMobile();
    if (items.length === 0) return null;
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            margin: isMobile ? '0.5rem 0' : '1rem',
        }}>
            <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{label}</h4>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                {items.map((item, index) => (
                    <li key={index} style={{ padding: '0.2rem', fontSize: '0.9rem' }}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterMenu;