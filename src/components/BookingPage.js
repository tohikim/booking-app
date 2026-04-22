import React, { useReducer } from "react";
import BookingForm from "./BookingForm";
import { fetchAPI } from "../api";

const BookingPage = ({ submitForm }) => {
  const initializeTimes = () => {
    const today = new Date();
    return fetchAPI ? fetchAPI(today) : ["17:00", "18:00", "19:00"];
  };

  const updateTimes = (state, action) => {
    switch (action.type) {
      case "UPDATE_TIMES":
        const selectedDate = new Date(action.date);
        return fetchAPI ? fetchAPI(selectedDate) : state;
      default:
        return state;
    }
  };

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes,
  );

  return (
    <div style={{ backgroundColor: "#495E57", padding: "4rem 1rem" }}>
      <h1
        style={{
          textAlign: "center",
          color: "#EDEFEE",
          fontFamily: "Markazi Text",
          fontSize: "3rem",
        }}
      >
        Reserve a Table
      </h1>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </div>
  );
};

export default BookingPage;
