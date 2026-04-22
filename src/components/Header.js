import { useState } from "react";
import Nav from "./Nav";
import logo from "../assets/Logo.svg";
import useIsMobile from "../useIsMobile";

const Header = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header style={{ padding: "0 20px", position: "relative" }}>
      <div
        style={{
          margin: "0",
          display: "flex",
          flexDirection: "row", // Keep logo and icon on same line
          justifyContent: "space-between",
          padding: "1rem",
          width: "100%",
        }}
      >
        <img
          alt="Little Lemon Logo"
          src={logo}
          style={{ width: "150px", padding: 0, margin: 0 }}
        />

        {isMobile ? (
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            style={{
              background: "none",
              border: "none",
              fontSize: "2rem",
              cursor: "pointer",
              color: "#495E57",
              alignSelf: "right",
              alignItems:'right',
              padding: 0,
              margin:0,
              zIndex: 101,
            }}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        ) : null}

        <Nav isMobile={isMobile} isOpen={isOpen} />
      </div>
    </header>
  );
};

export default Header;
