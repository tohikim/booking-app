import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Hero from "./Hero";
import Highlights from "./Highlights";
import Testimonials from "./Testimonials";
import About from "./About";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";
import { submitAPI } from "../api";

const Main = () => {
  const navigate = useNavigate();

  const submitForm = (formData) => {
    console.log("Form Data Received:",formData);
    const success = submitAPI(formData);
    if (success) {
      navigate("/confirmed");
    }
  };

  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Highlights />
              <Testimonials />
              <About />
            </>
          }
        />

        <Route
          path="/booking"
          element={<BookingPage submitForm={submitForm} />}
        />

        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
};

export default Main;
