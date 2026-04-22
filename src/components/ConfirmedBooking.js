import React from 'react';
import { Link } from 'react-router-dom';

const ConfirmedBooking = () => {
    return (
        <div style={{ 
            textAlign: 'center', 
            backgroundColor: '#495E57', 
            color: '#EDEFEE', 
            height: '60vh',
            display: 'flex',           // Use Flexbox for vertical centering
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0 1rem'          // Horizontal padding for mobile
        }}>
            <h1 style={{ 
                fontFamily: 'Markazi Text', 
                fontSize: '3.5rem',     // Slightly reduced for better proportion
                marginBottom: '0.5rem' 
            }}>
                Booking Confirmed!
            </h1>
            
            <p style={{ 
                fontFamily: 'Karla', 
                fontSize: '1.25rem',
                marginBottom:'1rem',   
                maxWidth: '800px'      
            }}>
                Thank you for choosing Little Lemon. We look forward to seeing you!
            </p>
            
            <p style={{ 
                fontFamily: 'Karla', 
                fontSize: '1.25rem', 
                opacity: '0.9',
                marginBottom: '2.5rem'  
            }}>
                A confirmation email has been sent to your inbox.
            </p>

            <Link to="/" style={{ textDecoration: 'none' }}>
                <button style={{
                    backgroundColor: '#F4CE14', // Little Lemon Yellow
                    color: '#333333',
                    border: 'none',
                    padding: '0.8rem 2.5rem',
                    borderRadius: '12px',
                    fontFamily: 'Karla',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: '0.3s'
                }}>
                    Go to Home
                </button>
            </Link>
        </div>
    );
};

export default ConfirmedBooking;