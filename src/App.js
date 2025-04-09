import React, { useState, useRef } from 'react';
import "./styles.scss";

//---------------------//
// import ExpandableVerticalDiv from './Components/Expandable/VerticalExpandable';
import ColorfulBorderBox from './Components/ColourfulBorderBox/ColorfulBorderBox';
import AppMatrixRain from './Components/MatrixRain/App-MatrixRain';

export default function App(){
    return(
        <div>
            {/* <ColorfulBorderBox></ColorfulBorderBox> */}
            <AppMatrixRain></AppMatrixRain>
        </div>
    )
}


