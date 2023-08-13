import stockData from "../Data/stocksData"


import {Link} from "react-router-dom"






export default function Stocks({ symbolDirection }) {

  return (
    <div>
      <Link to="/">
        <h3>Main</h3>
      </Link>
      {stockData.map((stocks, index) => {
        const { name } = stocks;
        return (
          <>
            <Link key={index} to={`/stocks/${symbolDirection[index]}`}>
              <h1>{name}</h1>
            </Link>
          </>
        );
      })}
      <br />
      <br />
    </div>
  );
}
