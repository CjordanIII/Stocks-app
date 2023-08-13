




export default function StockInfoPage({ data }) {
    const { name, symbol, lastPrice, change, high, low, open } = data;
  return (
    <div>
      <h1>The stocks</h1>
      <div>
        <h1>{name}</h1>
        <h1>Symbol: {symbol}</h1>
        <h1>lastPrice: {lastPrice}</h1>
        <h1>Change: {change}</h1>
        <h1>High: {high}</h1>
        <h1>Low: {low}</h1>
        <h1>Open{open}</h1>
      </div>
    </div>
  );
}