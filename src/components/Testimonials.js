import useIsMobile from "../useIsMobile";
import TestimonialCard from "./TestimonialCard";
import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";
import person4 from "../assets/person4.png";

const Testimonials = () => {
  const isMobile = useIsMobile();
  const testimonialsData = [
    {
      id: 1,
      rating: 5,
      name: "Sarah J.",
      review:
        "The best Greek salad in the city. The feta is incredibly creamy!",
      photo: person1,
    },
    {
      id: 2,
      rating: 5,
      name: "Marcus K.",
      review:
        "I love the atmosphere here. The Bruschetta is a must-try every time.",
      photo: person2,
    },
    {
      id: 3,
      rating: 4,
      name: "Tilly T.",
      review:
        "Fast service and authentic flavors. Perfect for a quick business lunch.",
      photo: person3,
    },
    {
      id: 4,
      rating: 5,
      name: "Elena R.",
      review: "The lemon dessert actually tastes like home. Five stars!",
      photo: person4,
    },
  ];

  return (
    <section style={{ backgroundColor: "#FBDABB", padding: "4rem 0" }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 2rem",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            fontFamily: "Markazi Text",
            marginBottom: "3rem",
            color: "#333333",
          }}
        >
          Testimonials
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: "1.5rem",
            justifyContent: "center",
            alignItems: "stretch",
          }}
        >
          {testimonialsData.map((item) => (
            <TestimonialCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
