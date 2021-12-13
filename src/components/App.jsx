import React, { useEffect, useState } from "react";
import axios from "axios";
import Tracker from "./Tracker";

const App = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => setCoins(res.data))
      .catch((error) => console.log(error));
  });

  function handleInputChange(e) {
    setSearch(e.target.value);
  }

  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <div className="coin-search">
        <h1>Search a currency</h1>
        <input
          type="text"
          placeholder="Search..."
          className="searchbar"
          onChange={handleInputChange}
        />
      </div>
      <div className="key-row">
        <div className="coin-info">
          <p className="key info">Info</p>
        </div>
        <div className="data">
          <p className="key price">Price</p>
          <p className="key volume">Volume</p>
          <p className="key percent">Price Change</p>
          <p className="key market-cap">Market Cap</p>
        </div>
      </div>
      {filteredCoins.map((coin) => {
        return (
          <Tracker
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            price={coin.current_price}
            volume={coin.total_volume}
            priceChange={coin.price_change_percentage_24h}
            marketCap={coin.market_cap}
          />
        );
      })}
    </div>
  );
};

export default App;
