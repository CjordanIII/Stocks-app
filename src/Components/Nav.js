import {Link} from 'react-router-dom'


export default function Nav(){
    return (
      <div>
        <Link to="/stocks">
          <h1> Stocks </h1>
        </Link>
        <Link to="/sighnup">
          <h1>sign up</h1>
        </Link>
      </div>
    );
}