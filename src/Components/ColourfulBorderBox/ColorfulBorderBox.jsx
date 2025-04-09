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



/* Useage:
<ColorfulBorderBox
    content=
    {                    
        <div">
            <h1>This is Content</h1>
        </div>
    }>
</ColorfulBorderBox>
*/
function ColorfulBorderBox_1({ content }) {
    const [isHovered, setIsHovered] = useState(false);

    //conic-gradient(from 180deg at 50% 50%, #e92a67 0deg, #a853ba 112.5deg, #2a8af6 228.75deg, rgba(42, 138, 246, 0) 360deg) //original
    const spinnerStyle = {
        background: isHovered
            ? "conic-gradient(from 180deg at 50% 50%, #b3e5fc 0deg, #4fc3f7 112.5deg, #0288d1 228.75deg, rgba(2, 136, 209, 0) 360deg)"
            : "rgba(128,128,128,0.1)"
    };

    return (
        <div className="colorful-border-box-wrapper">
            <div className="colorful-border-box">
                <div
                    className="colorful-border-box-content"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {Array.isArray(content)
                        ? content.map((item, index) => (
                            <React.Fragment key={index}>{item}</React.Fragment>
                        ))
                        : content
                    }
                </div>
                <div
                    className="colorful-border-box-spinner"
                    style={spinnerStyle}
                />
            </div>
        </div>
    );
}

/*
Conic Gradients:
Deep Sea Variant:
conic-gradient(from 180deg at 50% 50%, #006d77 0deg, #003f5c 112.5deg, #001f3f 228.75deg, rgba(0, 31, 63, 0) 360deg)
Colors: Dark cyan, slate blue, midnight blue, fading to transparent. (Darker and moodier tones.)

Tropical Lagoon Variant:
conic-gradient(from 180deg at 50% 50%, #1abc9c 0deg, #3498db 112.5deg, #2980b9 228.75deg, rgba(41, 128, 185, 0) 360deg)
Colors: Turquoise, sky blue, cobalt, fading to transparent. (Brighter and more vibrant.)

Icy Wave Variant:
conic-gradient(from 180deg at 50% 50%, #b3e5fc 0deg, #4fc3f7 112.5deg, #0288d1 228.75deg, rgba(2, 136, 209, 0) 360deg)
Colors: Light icy blue, bright blue, deep blue, fading to transparent. (Cooler and lighter with an icy feel.)

Stormy Ocean Variant:
conic-gradient(from 180deg at 50% 50%, #468c8f 0deg, #2c6975 112.5deg, #1a4047 228.75deg, rgba(26, 64, 71, 0) 360deg)
Colors: Teal-gray, muted blue, dark slate, fading to transparent. (A stormy, overcast vibe.)

Aqua Mist Variant:
conic-gradient(from 180deg at 50% 50%, #76d7c4 0deg, #5dade2 112.5deg, #2874a6 228.75deg, rgba(40, 116, 166, 0) 360deg)
Colors: Aqua green, soft blue, deep azure, fading to transparent. (A misty, serene take.)


Warm Sunset Profile:
conic-gradient(from 180deg at 50% 50%, #ff5733 0deg, #ff8d1a 112.5deg, #ffd700 228.75deg, rgba(255, 215, 0, 0) 360deg)
Colors: Red-orange, bright orange, golden yellow, fading to transparent.

Cool Ocean Profile:
conic-gradient(from 180deg at 50% 50%, #00c4cc 0deg, #0077b6 112.5deg, #023e8a 228.75deg, rgba(2, 62, 138, 0) 360deg)
Colors: Cyan, deep blue, navy, fading to transparent.

Earthy Forest Profile:
conic-gradient(from 180deg at 50% 50%, #4a7043 0deg, #8a9a5b 112.5deg, #d4a017 228.75deg, rgba(212, 160, 23, 0) 360deg)
Colors: Dark green, olive, mustard yellow, fading to transparent.

Pastel Dream Profile:
conic-gradient(from 180deg at 50% 50%, #ffb3de 0deg, #c1a7e6 112.5deg, #a3d8f4 228.75deg, rgba(163, 216, 244, 0) 360deg)
Colors: Soft pink, lavender, light blue, fading to transparent.

Vivid Neon Profile:
conic-gradient(from 180deg at 50% 50%, #ff00ff 0deg, #00ffcc 112.5deg, #ffff00 228.75deg, rgba(255, 255, 0, 0) 360deg)
Colors: Magenta, cyan, bright yellow, fading to transparent.

*/