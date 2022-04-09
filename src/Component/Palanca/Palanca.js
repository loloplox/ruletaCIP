import React from 'react';
import './Palanca.css';

function Palanca({animationActive, setAnimationActive}) {
    return (
        <div className="containerPalanca">
            <button
                className="palanca"
                onClick={() => setAnimationActive(!animationActive)}
                // disabled={animationActive}
            >
                Girar
            </button>
        </div>
    );
}

export default Palanca;