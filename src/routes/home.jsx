import React from 'react';
import '../styles/home.css';

export default function Home() {
    return (
        <div>
            <div id="banner">
                <div id="banner-text">
                    <h1 id="product-header"><b>Intral.</b></h1>
                    <p id="product-desc">
                        Smart. Sleek. Scintillating.
                        <br />
                        Your <b>must-have</b> gradebook companion to uplift your academic career.
                    </p>
                </div>
                <div id="banner-splash"></div>
            </div> 
        </div>
    );
}

const VerticalLine = ({ width, height, color, style }) => {
    return (
        <span
            style={{
                borderLeft: width,
                height: height,
                backgroundColor: color,
            }}
        />
    );
}