import React from 'react'
import './Card.css'

const Card = ({ card }) => {
    return (
        <div className="card">
            <div className='card-item'>
                <img src={card.Image} alt="Card Item" />
                <h4>{card.text}</h4>
            </div>
        </div>

    )
}

export default Card
