import {Link, Routes, Route, useNavigate} from 'react-router-dom';
function Home({

}){
    return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/register">Registro</Link>
            </li>
          </ul>
        </nav>
        </div>
    </h1>
    );
}
export default Home;