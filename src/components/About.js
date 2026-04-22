import useIsMobile from "../useIsMobile";
import photoA from "../assets/Mario and Adrian A.jpg";

const About = () => {
  const isMobile = useIsMobile();

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: isMobile ? "4rem 2rem" : "6rem 2rem",
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "4rem",
  };

  const textSectionStyle = {
    flex: 1,
    textAlign: isMobile ? "center" : "left",
  };

  const imageSectionStyle = {
    display: "flex",
    flexDirection: "column",
    width: isMobile ? "100%" : "40%",
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
  };

  const imgStyle = {
    borderRadius: "15px",
    width: isMobile ? "100%" : "350px",
    maxWidth: "350px",
    height: "350px",
    objectFit: "cover",
    display: "block",
    padding: 0,
    margin: 0,
  };

  return (
    <div style={{ backgroundColor: "white" }}>
      <div style={containerStyle}>
        <div style={textSectionStyle}>
          <h1
            style={{
              fontSize: "3.5rem",
              fontFamily: `"Markazi Text", serif`,
              color: "#495E57",
              margin: 0,
            }}
          >
            Little Lemon
          </h1>
          <h2
            style={{
              fontSize: "2rem",
              fontFamily: `"Markazi Text", serif`,
              color: "#333333",
              margin: 0,
              padding: 0,
              marginBottom: "1.5rem",
            }}
          >
            Chicago
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              fontFamily: ` "Karla", sans-serif`,
              lineHeight: "1.5",
              color: "#495E57",
              maxWidth: isMobile ? "100%" : "450px",
            }}
          >
            Little Lemon is owned by two Italian brothers, Adrian and Mario, who moved to Chicago to pursue their shared dream of owning a restaurant. To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian handles the marketing and expansion, ensuring that every guest feels like part of the family the moment they walk through the door.
          </p>
        </div>

        <div style={imageSectionStyle}>
          <img src={photoA} alt="Hero" style={imgStyle} />
        </div>
      </div>
    </div>
  );
};

// const About = () => {
//   const isMobile = useIsMobile();

//   const containerStyle = {
//     maxWidth: "1200px",
//     margin: "0 auto",
//     padding: isMobile ? "4rem 2rem" : "6rem 2rem",
//     display: "flex",
//     flexDirection: isMobile ? "column" : "row",
//     justifyContent: "space-between",
//     alignItems: "flex-start", // Align to top so text and images start together
//     gap: "4rem",
//   };

//   const imageSectionStyle = {
//     flex: 1.5, // Increased from 1 for larger laptop view
//     position: "relative",
//     height: isMobile ? "320px" : "550px", // Reduced mobile height, increased desktop
//     width: "100%",
//     marginTop: isMobile ? "0.5rem" : "0", // Reduced mobile gap
//   };

//   const baseImageStyle = {
//     width: isMobile ? "80%" : "380px", // Increased sizes for both
//     height: isMobile ? "220px" : "420px", // Increased height
//     objectFit: "cover",
//     borderRadius: "16px",
//     position: "absolute",
//     boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
//   };

//   return (
//     <section id="about" style={{ backgroundColor: "#FFFFFF" }}>
//       <div style={containerStyle}>
//         <div style={{ flex: 1, textAlign: isMobile ? "center" : "left" }}>
//           <h1
//             style={{
//               fontSize: "3.5rem",
//               fontFamily: "Markazi Text",
//               color: "#495E57",
//               margin: 0,
//             }}
//           >
//             Little Lemon
//           </h1>
//           <h2
//             style={{
//               fontSize: "2rem",
//               fontFamily: "Markazi Text",
//               color: "#333333",
//               marginTop: "-10px",
//               marginBottom: "1.5rem",
//             }}
//           >
//             Chicago
//           </h2>
//           <p
//             style={{
//               fontSize: "1.1rem",
//               lineHeight: "1.6",
//               color: "#495E57",
//               maxWidth: "450px",
//             }}
//           >
//             Little Lemon is owned by two Italian brothers, Adrian and Mario, who
//             moved to Chicago to pursue their shared dream of owning a
//             restaurant. To craft the menu, Mario relies on family recipes and
//             his experience as a chef in Italy. Adrian handles the marketing and
//             expansion, ensuring that every guest feels like part of the family
//             the moment they walk through the door.
//           </p>
//         </div>

//         <div style={imageSectionStyle}>
//           {/* This image is relative: it creates the actual height for the container */}
//           <img
//             src={photoA}
//             alt="Adrian and Mario A"
//             style={{
//               ...baseImageStyle,
//               position: "relative",
//               zIndex: 1,
//               display: "block",
//             }}
//           />
//           {/* This image is absolute: it overlaps without breaking the flow */}
//           <img
//             src={photoB}
//             alt="Adrian and Mario B"
//             style={{
//               ...baseImageStyle,
//               position: "absolute",
//               zIndex: 2,
//               top: isMobile ? "40px" : "80px",
//               left: isMobile ? "25%" : "120px",
//             }}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

export default About;
