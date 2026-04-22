import { useState } from "react";
import Nav from "./Nav";
import logo from "../assets/Logo.svg";
import useIsMobile from "../useIsMobile";

const Header = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header style={{ position: "relative" }}>
      <div
        style={{
          margin: 0,
          marginLeft: 0,
          marginRight: 0,
          paddingRight: 0,
          width: "100vw",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          paddingLeft: "1rem",
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
              padding: 0,
              textAlign: "right",
              margin: 0,
              paddingRight: 20,
            }}
          >
            {isOpen ? (
              <p
                style={{
                  margin: 0,
                  padding: 0,
                  alignSelf: "right",
                  display: "flex",
                  justifyContent: "right",
                }}
              >
                ✕
              </p>
            ) : (
              <p
                style={{
                  margin: 0,
                  padding: 0,
                  alignSelf: "right",
                  display: "flex",
                  justifyContent: "right",
                }}
              >
                ☰
              </p>
            )}
            <Nav isMobile={isMobile} isOpen={isOpen} />
          </button>
        ) : (
          <Nav isMobile={isMobile} isOpen={isOpen} />
        )}
      </div>
    </header>
  );
};

export default Header;
