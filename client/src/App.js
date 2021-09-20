import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route component={Homepage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
