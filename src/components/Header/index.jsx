import React from 'react';
import './style.css';

function Header(props){
    return(
        <div className="header">
                <h1>{props.name}</h1>
                <ul className="menu">
                   {props.itens.map(item => <li>{item}</li>)}
                </ul>

        </div>
    )
}

export default Header;
