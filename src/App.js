import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import PrivateRoute from './components/PrivateRoute'
import Recipes from './components/Recipes'

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>

      <Route exact path='/'>
      <h1>Register</h1>
      <div className='form'>
      <form>
        <p><input
            name='name'
            id='name'
            placeholder='Full Name Here'
            type='text'
        /></p>

        <p>
        <input
            name='email'
            id='email'
            placeholder='Email Address Here'
            type='email'
        /></p>

        <p>
        <input
            name='passsword'
            id='password'
            placeholder='Password Here'
            type='password'
        /></p>
      </form>
      </div>
      </Route>
      

      <Route path='/login'>
      <h1>Login</h1>

        <input
            name='email'
            id='email'
            placeholder='Email Address Here'
            type='email'
        />
        <input
            name='passsword'
            id='password'
            placeholder='Password Here'
            type='password'
        />

      </Route>


         <PrivateRoute path='/protected' component={Recipes} />

      </Router>

    </div>
  );
}

export default App;
