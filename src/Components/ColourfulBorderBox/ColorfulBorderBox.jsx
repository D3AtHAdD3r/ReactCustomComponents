import React, { useState } from "react";
import './ColorfulBorderBox.scss'; // Ensure you have this CSS file

function ColorfulBorderBox() {
    const [isHovered, setIsHovered] = useState(false);

    const spinnerStyle = {
        background: isHovered ? "conic-gradient(from 180deg at 50% 50%, #e92a67 0deg, #a853ba 112.5deg, #2a8af6 228.75deg, rgba(42, 138, 246, 0) 360deg)" : "grey"
    }

    return (
        <div className="colorful-border-box-wrapper">
            <div className="colorful-border-box">
                <div className="colorful-border-box-content"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <h3>Hover here</h3>
                </div>
                <div className="colorful-border-box-spinner" style={spinnerStyle}>
                </div>
            </div>
        </div>

    );
}

export default ColorfulBorderBox;
