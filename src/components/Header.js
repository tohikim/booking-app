import Nav from './Nav';
import logo from '../assets/Logo.svg';

const Header = () => {
    return (
        <header style={{
            display:'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
        }}>
        <img alt="Little Lemon Logo" src={logo} style={{
            padding:'1rem',
        }} />
        <Nav />
        </header>
    )
}

export default Header;