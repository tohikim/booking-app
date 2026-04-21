const FooterMenu = ({ label, items = [] }) => {
    if (items.length===0) return null;
    return(
        <>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            margin: '1rem'
        }}>
        <h4 style={{
            fontSize: '1rem'
        }}>{label}</h4>
        <ul style={{
            listStyleType: 'none',
            padding:0,
            margin:0
        }}>
            {items.map((item,index) => (
                <li key={index} style={{
                    padding:'0.2rem'
                }}>
                    {item}
                </li>
            ))}
        </ul>
        </div>
        </>
    )
}

export default FooterMenu;