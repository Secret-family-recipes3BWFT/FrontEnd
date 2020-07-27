import React from 'react'
import styled from 'styled-components'


// Styled Components! ------------------------------- //


const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-family: 'Cantata One', serif;
  color: #111111;
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

function Register () {

    return (
        <div>
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

          </div>
    )

    }

    export default Register;