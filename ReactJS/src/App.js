import logo from './logo.png';
import './App.css';

import Home from './pages/home';
import TopCharts from './pages/top-charts';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/top-charts">
          <TopCharts />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
