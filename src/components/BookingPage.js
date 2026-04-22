import React, { useReducer } from 'react';
import BookingForm from './BookingForm';

const BookingPage = () => {
    const initializeTimes = () => {
        return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    };

    const updateTimes = (state, action) => {
        switch (action.type) {
            case 'UPDATE_TIMES':
                return initializeTimes();
            default:
                return state;
        }
    };

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    const pageStyle = {
        backgroundColor: '#495E57', // Little Lemon Green
        color: '#EDEFEE',
        padding: '4rem 1rem',
        textAlign: 'center'
    };

    return (
        <div style={pageStyle}>
            <h1 style={{ fontFamily: 'Markazi Text', fontSize: '3.5rem', marginBottom: '0.5rem' }}>
                Table Reservation
            </h1>
            <p style={{ fontFamily: 'Karla', fontSize: '1.2rem', marginBottom: '2rem' }}>
                Experience the authentic taste of the Mediterranean.
            </p>
            <BookingForm 
                availableTimes={availableTimes} 
                dispatch={dispatch} 
            />
        </div>
    );
};

export default BookingPage;