import FooterMenu from "./FooterMenu";
import logo from "../assets/Logo.svg";
import navItems from "./navData";
import useIsMobile from "../useIsMobile";

const Footer = () => {
  const isMobile = useIsMobile();

  return (
    <footer style={{ backgroundColor: "#EDEFEE", padding: "2rem 20px" }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: "2rem",
          justifyContent: "space-between",
          alignItems: isMobile ? "center" : "flex-start",
        }}
      >
        <img alt="Logo" src={logo} style={{ height: "60px" }} />
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? "1.5rem" : "4rem",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <FooterMenu title="Navigation" items={navItems} />
          <FooterMenu title="Contact" items={["Address", "Phone", "Email"]} />
          <FooterMenu title="Social" items={["Instagram", "Facebook"]} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
