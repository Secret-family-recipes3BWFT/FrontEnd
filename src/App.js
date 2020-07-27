import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from 'styled-components'
import PrivateRoute from './components/PrivateRoute'
import Recipes from './components/Recipes'
import './App.css';



const ApplicationBox = styled.div`

  margin: 20px;
  text-align: center;
  width: 70%;
  background-color: #EBCD20;
  border: 5px solid #F26D00;
  border-radius: 15px;
  font-family: 'Roboto', sans-serif;
  margin: 0 auto;
`

function App() {
  return (
    
      <Router>
      <ApplicationBox>
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


            <PrivateRoute path='/protected' component={Recipes}></PrivateRoute>


      </ApplicationBox>
      </Router>
  );
}

export default App;
