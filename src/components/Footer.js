import FooterMenu from './FooterMenu';
import logo from '../assets/Logo.svg';
import navItems from './navData';

const Footer = () => {
    const contactList = ["Address","Phone number","Email"];
    const socialList= ["Instagram","Facebook","X","LinkedIn"];
    return (
        <footer style={{
            display:'flex',
            flexDirection:'row',
            width:'100vw',
            justifyContent:'space-evenly'
        }}>
            <img alt="Little Lemon Logo" src={logo} style={{
                height: '10vh', 
                margin:"1rem"
                }}/>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
            }}>
                <FooterMenu label="Doormat Navigation" items={navItems}/>
                <FooterMenu label="Contact" items={contactList}/>
                <FooterMenu label="Social Media Links" items={socialList} />
            </div>
        </footer>
    )
}

export default Footer;