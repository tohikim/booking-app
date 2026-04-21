import navItems from './navData';

const Nav = () => {
    return (
        <nav style={{
            padding:'1rem',
        }}>
            <ul style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '3vw',
                listStyle:'none'
            }}>
                {navItems.map((item) => (<li key={item}>{item}</li>))}
            </ul>
        </nav>
    )
}

export default Nav;