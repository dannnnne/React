import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers?limit=100')
      .then((reponse) => reponse.json())
      .then((json) => setCoins(json));
    setLoading(false);
  }, []); //coins에 코인들의 array가 담겨있음
  return (
    <div>
      <h1>The Coins! {loading ? '' : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Lodaing...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option>
              {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
