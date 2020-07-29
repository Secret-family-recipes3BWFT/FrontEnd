import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import * as yup from 'yup'


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

//----------------------------------------------------------//

const initialRegisterValues = {

    username: '',
    // email: '',
    password: ''
  
  }

//------------------------------------------------------------//

function Register (props) {
  const {push} = useHistory()


    const [signUpData, setSignUpData] = useState(initialRegisterValues)

    const handleChange = e => {

      inputChange(e)

        setSignUpData({
            ...signUpData,
            [e.target.name]: e.target.value,

        });
    }

    const formSchema = yup.object().shape({
      password: yup
      .string()
      .min(6, "Password must be at least 6 characters long")
      .required("Password is required"),
  
    });
  
  
    const [errors, setErrors] = useState({
      password: ''
    });
  
  
    const inputChange = e => {
  
      e.persist();
  
      yup
      .reach(formSchema, 'password')
      
      .validate(e.target.value)
     
      .then(valid => {
        setErrors({
          ...errors,
          [e.target.name]: ""
        });
      })
     
      .catch(err => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors
        });
      });
  
        setSignUpData({
          ...signUpData,
          [e.target.name]: e.target.value
        });
  
  
    }  
  
  
  
  const [isButtonDisabled, setButtonDisabled] = useState(true)
  
  
  useEffect(() => {
    
    formSchema.isValid(signUpData).then(valid => {
      setButtonDisabled(!valid);
      console.log(valid)
    });
  }, [signUpData]);




    const handleSubmit = e => {

        e.preventDefault();
        axios
            .post('https://lambdaschool-cookbook2.herokuapp.com/auth/register', signUpData)
            .then( (res) => {
                localStorage.setItem('token', res.data.token);
                console.log(res)
              push('/recipes')
                if (res.data.newUser) {
                    props.history.push(`/recipes/${res.data.newUser}`);
                } else {
                    props.history.push('/register')
                }
            })

            .catch( (err) => console.log({err}));

    }

   


    return (
        <div>
        <PageTitle>Register</PageTitle>
          <div className='form'>
          <form onSubmit={handleSubmit}>
            <p><TextInput
                name='username'
                id='username'
                placeholder='Username Here'
                type='text'
                value={signUpData.username}
                onChange={handleChange}
            /></p>
{/* 
            <p>
            <TextInput
                name='email'
                id='email'
                placeholder='Email Address Here'
                type='email'
                value={signUpData.email}
                onChange={handleChange}
            /></p> */}

            <p>
            <TextInput
                name='password'
                id='password'
                placeholder='Password Here'
                type='password'
                value={signUpData.password}
                onChange={handleChange}
             /></p>
             <SubmitButton type='submit' disabled={isButtonDisabled}>Register!</SubmitButton>
             <p>{errors.password}</p>

          </form>
          </div>

          </div>
    )

    }

    export default Register;