import logo from '../logo.png';
import './home.pages.css';
import {Link} from 'react-router-dom';
function Home(){
    return (
        <div className="App">
            <header className="App-header">
                <Link to='/top-charts' className="scale">
                    <img src={logo} className="App-logo" alt="logo" />
                </Link>
                <p className="primary">
                    Testa le API <strong>musixmatch</strong> in ReactJS
                </p>
            </header>
        </div>
    );
}

export default Home;