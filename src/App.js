import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import PrivateRoute from './components/PrivateRoute'
import Recipes from './components/Recipes'
import RecipeForm from './components/RecipeForm'

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>

         <PrivateRoute path='/protected' component={Recipes} />
         <PrivateRoute path='/protected/newrecipe' component={RecipeForm} />
      </Router>

    </div>
  );
}

export default App;
