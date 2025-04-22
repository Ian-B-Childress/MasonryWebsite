import React from 'react';
import '../App.css';

export default function pricing(){
    return (
        <>
        <div className='pricing'>
            <div className='intro'>
                <h1>Pricing</h1>
                <p></p>
            </div>
            <div className='pricingCards'>
                <div className='card'>
                    <h2>Brick Work</h2>
                    <ul>
                        <li>Free Consultation</li>
                        <li>Free Quote</li>
                    </ul>
                </div>
                <div className='card'>
                    <h2>Block Work</h2>
                    <ul>
                        <li>Free Consultation</li>
                        <li>Free Estimate</li>
                        <li>Free Design</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}
