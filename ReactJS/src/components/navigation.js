import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import classes from './navigation.module.css';
function Navigation(){
    return (
        <nav>
            <Link to="/">Home</Link>
            <hr/>
        </nav> 
    )
}
export default Navigation;