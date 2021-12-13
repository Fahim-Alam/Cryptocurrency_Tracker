import React from "react";

const Tracker = ({
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketCap,
}) => {
  return (
    <div className="tracker-container">
      <div className="coin-row">
        <div className="coin-info">
          <img src={image} alt="logo" />
          <h1>{name}</h1>
          <p className="symbol">{symbol.toUpperCase()}</p>
        </div>
        <div className="data">
          <p className="price">
            ${parseFloat(price.toFixed(2)).toLocaleString()}
          </p>
          <p className="volume">
            ${parseFloat(volume.toFixed(2)).toLocaleString()}
          </p>
          {priceChange > 0 ? (
            <p className="percent up">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="percent down">{priceChange.toFixed(2)}%</p>
          )}
          <p className="market-cap">${marketCap.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Tracker;
