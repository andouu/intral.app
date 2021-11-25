import React from 'react';

export default function VerticalLine(props) {
    return (
        <div 
            style={{ 
                width: props.width, 
                height: props.height, 
                backgroundColor: props.color,
                ...style
            }} 
        />
    );
}