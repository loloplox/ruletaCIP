import React, {useEffect} from 'react';
import './Number.css';

function Number({velocidad, winer}) {
    // TODO: Maximo cuarenta numeros o 4 vueltas
    const [numbers, setNumbers] = React.useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
    const distancia = 100
    const vueltas = 3
    const time = (winer * distancia) / velocidad;
    const distanciaTotal = (distancia * winer) - distancia
    document.documentElement.style.setProperty('--distancia', -1 * distancia + 'px');
    document.documentElement.style.setProperty('--vueltas', -1 * vueltas * distancia * 10 + "px");


    return (
        <div className="containerNumber" style={{

        }}>
            <div className="number" style={{
                animation: `number-animation-${winer} ${time}s linear forwards`,
            }}>
                {numbers.map(number =>
                    <div className="numero">
                        {number}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Number;