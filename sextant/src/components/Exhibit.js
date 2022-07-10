import React from 'react'
import './Exhibit.css'

function Exhibit(props) {
    return (
        <div className="main-container">
            <div className="cards">
                <div className="card">
                    <h2 className="card__title">{props.name}</h2>
                    <p className="card__apply">
                        {props.children}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Exhibit