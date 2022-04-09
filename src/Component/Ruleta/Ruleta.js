import React, {useEffect, useState} from 'react';
import './Ruleta.css';
import Number from "../Number/Number";
import Palanca from "../Palanca/Palanca";
import BlockNumbers from "../BlockNumbers/BlockNumbers";

function Ruleta(props) {

    return (
        <div className="containerRuleta">
            <h1>RULETA</h1>

            <div className="containerNumbers">
                <Number winer="1" velocidad={500}/>
                <Number winer="9" velocidad={500}/>
                <Number winer="9" velocidad={500}/>
                <Number winer="2" velocidad={500}/>
                <Number winer="3" velocidad={500}/>
                <Number winer="7" velocidad={500}/>
            </div>

        </div>
    );
}

export default Ruleta;