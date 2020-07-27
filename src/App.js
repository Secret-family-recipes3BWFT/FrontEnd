import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import PrivateRoute from './components/PrivateRoute'
import Recipes from './components/Recipes'

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>

         <PrivateRoute path='/protected' component={Recipes} />

      </Router>

    </div>
  );
}

export default App;
