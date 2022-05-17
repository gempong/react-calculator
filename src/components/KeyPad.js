import React from "react";

function KeyPad(props) {
    return (
        <div className="keypad">
            <div className="row">
                <button className="secondary" name="(" onClick={e => props.onClick(e.target.name)}>(</button>
                <button className="secondary" name="CE" onClick={e => props.onClick(e.target.name)}>CE</button>
                <button className="secondary" name=")" onClick={e => props.onClick(e.target.name)}>)</button>
                <button className="secondary" name="C" onClick={e => props.onClick(e.target.name)}>C</button>
            </div>
            <div className="row">
                <button name="1" onClick={e => props.onClick(e.target.name)}>1</button>
                <button name="2" onClick={e => props.onClick(e.target.name)}>2</button>
                <button name="3" onClick={e => props.onClick(e.target.name)}>3</button>
                <button className="oprator" name="+" onClick={e => props.onClick(e.target.name)}>+</button>
            </div>
            <div className="row">
                <button name="4" onClick={e => props.onClick(e.target.name)}>4</button>
                <button name="5" onClick={e => props.onClick(e.target.name)}>5</button>
                <button name="6" onClick={e => props.onClick(e.target.name)}>6</button>
                <button className="oprator" name="-" onClick={e => props.onClick(e.target.name)}>-</button>
            </div>
            <div className="row">
                <button name="7" onClick={e => props.onClick(e.target.name)}>7</button>
                <button name="8" onClick={e => props.onClick(e.target.name)}>8</button>
                <button name="9" onClick={e => props.onClick(e.target.name)}>9</button>
                <button className="oprator" name="*" onClick={e => props.onClick(e.target.name)}>x</button>
            </div>
            <div className="row">
                <button name="." onClick={e => props.onClick(e.target.name)}>.</button>
                <button name="0" onClick={e => props.onClick(e.target.name)}>0</button>
                <button className="oprator" name="=" onClick={e => props.onClick(e.target.name)}>=</button>
                <button className="oprator" name="/" onClick={e => props.onClick(e.target.name)}>÷</button>
            </div>
        </div>
    );
}

export default KeyPad;
