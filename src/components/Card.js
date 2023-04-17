import React from "react";

const Card = ( {name, email, id} ) => {
    return (
        <div className='tc bw3 shadow-5 grow dib ma2 br3 bg-light-green'>
            <img alt='robots' src={`https://robohash.org/${id}`}></img>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
        
    );
}

export default Card;