import React from 'react';

function ItemCard({ item, onBack }) {
  const effectParagraphs = item.effect.split('\n').map((paragraph, index) => (
    <li key={index}>{paragraph}</li>
  ));

  return (
    <div className="item__card">
        <div className='card__header'>
            <img src={"src/img/" + item.id + ".webp"} alt="" className="item__pic" />
            <h1 className="card__title">{item.title}</h1>
            <p className="card__pickup">{item.pickup}</p>
        </div>
        <ul className="card__effect">
            {effectParagraphs}
        </ul>
        <button className="back__button" onClick={onBack}>Back</button>
    </div>
  );
}

export default ItemCard;
