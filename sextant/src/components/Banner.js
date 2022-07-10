import React from 'react'
import './Banner.css'

function Banner(props) {
    return (
        <div className="Banner">
            <div className='overlay'>
                <h1>{props.bannerText}</h1>
            </div>
            
        </div>
    );
}

export default Banner