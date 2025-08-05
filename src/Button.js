import React, { useState } from 'react';
import './Button.css';

const Button = () => {
    const [clicks, setClicks] = useState(0);
    
    const handleClick = () => {
        setClicks(clicks + 1);
    };
    
    return (
        <div className="button-container">
            <button className="click-button" onClick={handleClick}>
                Click Me
            </button>
            <p className="click-count">Number of Clicks: {clicks}</p>
        </div>
    );
};

export default Button;