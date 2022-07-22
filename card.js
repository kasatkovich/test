import React from "react";

const Cards = ({ item, handleClick }) => {
  const { title, rate, price, img } = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <div className="first">
        <p className="det-title">{title}</p>
        <p className="det-price">{price} ₽</p>
        </div>
        <div className="second">
        <p className="star">★</p>
        <p className="det-rate">{rate}</p>
        <button  className="buy" onClick={() => handleClick(item)}>Купить</button>
        </div>
        </div>
      </div>
  );
};

export default Cards;