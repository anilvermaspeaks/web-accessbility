import { NavLink } from "react-router-dom";

import logo from './logo.svg';
import classes from './App.module.css';
import AppRouting from './App.routing';

function App() {
  return (
    <div className="App">
      <header className={classes.appHeader}>
        <NavLink to="/About"><img className={classes.logo} src={logo} alt="home page link" /></NavLink>
        <ul>
          <li><NavLink exact to="/about">About</NavLink></li>
          <li><NavLink exact to="/contact">Let's Meet</NavLink></li>
        </ul>
      </header>
      <main>
        <AppRouting />
      </main>
    </div>
  );
}

export default App;
