import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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

const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-family: 'Cantata One', serif;
  color: #111111;
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
`

const TextInput = styled.input`
  height: 20px;
  width: 150px;
  border-radius: 5px;
  background-color: #BFD7D2;
`

const SubmitButton = styled.button`
  border: 3px solid #390701;
  margin: 10px;
  border-radius: 5px;
  background-color: #F26D00;
  width: 200px;
  height: 40px; 
  color: #390701;
  font-family: 'Cantata One', serif;
  font-size: 1.5rem;


  &:hover {
  background-color: #390701;
  color: white; 
}

`

function App() {
  return (
    
      <Router>
      <ApplicationBox>
          <PageHeader>
            <AppTitle>Traditionize</AppTitle>
            <div>
            <Link to={'#'}><LinkButton>About</LinkButton></Link>
            <Link to={'/'}><LinkButton>Register</LinkButton></Link>
            <Link to={'/login'}><LinkButton>Login</LinkButton></Link>
            </div>
          </PageHeader>
          <Route exact path='/'>
          <PageTitle>Register</PageTitle>
          <div className='form'>
          <form>
            <p><TextInput
                name='name'
                id='name'
                placeholder='Full Name Here'
                type='text'
            /></p>

            <p>
            <TextInput
                name='email'
                id='email'
                placeholder='Email Address Here'
                type='email'
            /></p>

            <p>
            <TextInput
                name='passsword'
                id='password'
                placeholder='Password Here'
                type='password'
             /></p>
             <SubmitButton type='submit'>Register!</SubmitButton>
          </form>
          </div>
          </Route>
          

          <Route path='/login'>
          <PageTitle>Login</PageTitle>

            <p><TextInput
                name='email'
                id='email'
                placeholder='Email Address Here'
                type='email'
              /></p>

            <p><TextInput
                name='passsword'
                id='password'
                placeholder='Password Here'
                type='password'
            /></p>

            <SubmitButton type='submit'>Login!</SubmitButton>

          </Route>


            <PrivateRoute path='/protected' component={Recipes}></PrivateRoute>


      </ApplicationBox>
      </Router>
  );
}

export default App;
