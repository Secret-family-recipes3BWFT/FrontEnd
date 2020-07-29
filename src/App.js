import React from 'react';
import { BrowserRouter as Router, Route, Link, useHistory } from "react-router-dom";
import styled from 'styled-components'
import PrivateRoute from './components/PrivateRoute'
import Recipes from './components/Recipes'
import RecipePage from './components/RecipePage'
import UpdateRecipe from './components/UpdateRecipe'
import RecipeForm from './components/RecipeForm'

import './App.css';
import Register from './components/Register'
import Login from './components/Login'


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

const PageHeader = styled.div`
  height: auto;
  background-color: #BFD7D2;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const AppTitle = styled.h1`
  font-size: 3rem;
  font-family: 'Cantata One', serif;
  color: #111111;
  margin-top: 0px;
  margin-bottom: 0px;
`

const AppSubTitle = styled.h1`
  font-size: 1.2rem;
  font-family: 'Cantata One', serif;
  color: #390701;
  margin-top: 0px;
  margin-bottom: 0px;
  font-style: italic;
`

const LinkButton = styled.button`
  border: 0px solid white;
  margin: 10px;
  border-radius: 5px;
  background-color: #F26D00;
  width: 100px;
  height: 40px; 
  color: white;
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  transition: 0.5s;

  &:hover {
    background-color: #390701;
    transition: 0.5s;

  }
`


// Initial Form Values -----------------------------//






// THE APP ----------------------------------------------- //


function App() {
  

    
  return (
    
      <Router>
      <ApplicationBox>
          <PageHeader>
            <AppTitle>Traditionize</AppTitle>
            <AppSubTitle>Preserving Food Traditions For Your Family</AppSubTitle>
            <div>
            <a href='http://selahcreativeservices.com/traditionize/Front_page.html'><LinkButton>About</LinkButton></a>
            <Link to={'/register'}><LinkButton>Register</LinkButton></Link>
            <Link to={'/login'}><LinkButton>Login</LinkButton></Link>
            </div>
          </PageHeader>

          <Route exact path='/register'>
            <Register />
          </Route>
          

          <Route path='/login'>
            <Login />
          </Route>

         <PrivateRoute path='/recipes' component={Recipes} />
         <PrivateRoute path='/newrecipe' component={RecipeForm} />
         <PrivateRoute path='/recipe/:id' component={RecipePage} />
         <PrivateRoute path='/updaterecipe/:id' component={UpdateRecipe} />
         {/* <PrivateRoute path='/protected/newrecipe' component={RecipeForm} /> */}
  

            {/* <PrivateRoute path='/protected' component={Recipes}></PrivateRoute> */}


      </ApplicationBox>
      </Router>
  );
}

export default App;
