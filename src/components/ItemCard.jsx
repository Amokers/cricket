import React from 'react';

function ItemCard({ item, onBack }) {

    const effectParagraphs = item.effect.split('\n').map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
    ));

    return (
        <div className="item__card">
            <img src={"src/img/" + item.id + ".webp"} alt="" className="item__pic" />
            <h1 className='card__title'>{item.title}</h1>
            <p className='card__pickup'>{item.pickup}</p>
            {effectParagraphs}
            <button onClick={onBack}>Back</button>
        </div>
    );
}

export default ItemCard;
