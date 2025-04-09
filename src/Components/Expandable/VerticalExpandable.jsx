import React, { useState, useRef } from 'react';
import "./VerticalExpandable.scss"


/* 
Useage:
    const styleEx = {
            border: '1px solid salmon'
        } 

    <div className='app'>
        <ExpandableVerticalDiv customStyles={styleEx}></ExpandableVerticalDiv>
    </div>  
*/

const ExpandableVerticalDiv = ({ customStyles }) => {
    const [expanded, setExpanded] = useState(false);
    const contentRef = useRef(null);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    const expandableDivDefaultStyles = {
        width: '1000px',
        height: expanded ? `${contentRef.current.scrollHeight}px` : '0px',
        transition: 'height 0.3s ease',
        overflow: 'hidden',
        border: '1px solid black'
    }

    const expandableDivStyle = {
        ...expandableDivDefaultStyles,
        ...customStyles
    }


    return (
        <div>
            <button onClick={toggleExpand}>{expanded ? 'Collapse' : 'Expand'}</button>
            <div
                style={expandableDivStyle}
                className="expandable-div"
            >
                <div ref={contentRef} className="content">
                    <p>Your content goes here. The height will adjust based on the content.</p>
                    <p>Additional content...</p>
                    <p>Even more content...</p>
                </div>
            </div>
        </div>
    );
};

export default ExpandableVerticalDiv;



