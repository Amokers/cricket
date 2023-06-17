import React from 'react';

function ItemCard({ item, onBack }) {
  const effectParagraphs = item.effect.split('\n').map((paragraph, index) => (
    <li key={index}>
      <span className="item__effect-bullet">&#8226;</span> {paragraph}
    </li>
  ));

  return (
    <div className="item__card">
      <img src={"src/img/" + item.id + ".webp"} alt="" className="item__pic" />
      <h1 className="card__title">{item.title}</h1>
      <p className="card__pickup">{item.pickup}</p>
      <ul className="card__effect">
        {effectParagraphs}
      </ul>
      <button className="back__button" onClick={onBack}>Back</button>
    </div>
  );
}

export default ItemCard;
