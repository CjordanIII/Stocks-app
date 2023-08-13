import { Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './Pages/Main';
import Nav from './Components/Nav';
import NotFound from './Components/NotFound';
import Stocks from './Pages/Stocks';
import stocks from './Data/stocksData';
import StockItem from './Components/StockItem';


function App() {
  const symbolDirection = stocks.map((data) => data.symbol)
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/stocks"
          element={<Stocks symbolDirection={symbolDirection} />}
        />
        {stocks.map((data, index) => (
          <Route
            key={index}
            path={`/stocks/${data.symbol}`}
            element={<StockItem />}
          />
        ))}

        <Route path="*" element={<NotFound />} />
      </Routes>
      <br />
      <Nav />
    </div>
  );
}

export default App;
