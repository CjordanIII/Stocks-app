import stocksData from '../Data/stocksData'
import StockInfoPage from '../Pages/StockinfoPage';
import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';



export default function StockItem(){

    const [data, setData] = useState(0);

    useEffect(() => {
      const mountPanges = (pathName) => {
        const endPoint = pathName.split("/").reverse()[0];
        const target = endPoint;
        const foundTarget = stocksData.find((data) => data.symbol === target);
        setData(foundTarget);
        
      };

      mountPanges(window.location.pathname);

    }, [data]);

    
    return (
      <>
        <Link to="/">
          <h3>Main</h3>
        </Link>
        <StockInfoPage data={data} />
      </>
    );
}