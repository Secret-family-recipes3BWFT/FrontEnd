import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import styled, { StyleSheetManager } from 'styled-components'
import {useHistory} from 'react-router-dom'

const RecipeCard = styled.div`
    background-color: #BFD7D2;
    margin: 20px;
    border-radius: 18px;
    padding: 15px;
    display: flex;
    justify-content: center;
`
const LinkButton = styled.button`
  border: 0px solid white;
  margin: 10px;
  border-radius: 5px;
  background-color: #F26D00;
  width: 200px;
  height: 40px; 
  color: white;
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
`

const initialState =   {
    title: "",
    source: "",
    notes: "",
    ingredients: [
        ""
    ],
    instructions: [
        "",
        ""
    ],
    tags: [
        "",
        ""
    ]
}

export const UpdateRecipe = props => {
    const {id} = useParams()
    console.log('id', id)
    const [formValues, setFormValues] = useState(initialState)
    const ingredients = formValues.ingredients.slice()
    const instructions = formValues.instructions.slice()
    const tags = formValues.tags.slice()
    // const [recipe, setRecipe] = useState({})
    // const [instructions, setInstructions] = useState([])
    // const [tags, setTags] = useState([])
    const {push} = useHistory()
    useEffect(() => {
        axiosWithAuth()
        .get(`https://lambdaschool-cookbook2.herokuapp.com/recipes/${id}`)
        .then(res => {
            console.log(res)
            setFormValues(res.data.recipe)
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    const updateRecipe = e => {
        e.preventDefault()
        axiosWithAuth()
        .put(`https://lambdaschool-cookbook2.herokuapp.com/recipes/${id}`, formValues)
        .then(res => {
            console.log(res)
            
        })
        .catch(err => {
            console.log(err)
        })
        push('/recipes')
    }

    const ingredientChangeHandler = (e, index) => {
        ingredients[index] = e.target.value        
        setFormValues({
            ...formValues,
            ingredients: ingredients
        })
      }

      const instructionChangeHandler = (e, index) => {
        instructions[index] = e.target.value        
        setFormValues({
            ...formValues,
            instructions: instructions
        })
      }

      const tagChangeHandler = (e, index) => {
        tags[index] = e.target.value        
        setFormValues({
            ...formValues,
            tags: tags
        })
      }

      const changeHandler = e => {
        const {name, value} = e.target
        setFormValues({
            ...formValues,
              [name]: value,
             
        })
        console.log(formValues)
    }

    console.log(formValues)
    return (
        <div>
            <RecipeCard>
            <form onSubmit={updateRecipe} className='recipeForm'>                
                <label>
                   <b>Title: </b> 
                <input
                type='text'
                name='title'
                value={formValues.title}
                onChange={changeHandler}
                />
                </label>
                <label>
                   <b>Source: </b> 
                <input
                type='text'
                name='source'
                value={formValues.source}
                onChange={changeHandler}
                />
                </label>
                
                <label>
                    <b>Notes: </b> 
                    <input
                type='text'
                name='notes'
                value={formValues.notes}
                onChange={changeHandler}
                />
                </label>
               
                 <label >
                        <h4>Ingredients</h4>
                        {formValues.ingredients.map((ingredient, index) => {
                        return(
                        <input
                        type='text'
                        value={ingredient}
                        onChange={(e) => {ingredientChangeHandler(e, index)} }
                        />
                        )
                        
                    })}
                    </label>
                    <label >
                        <h4>Instructions</h4>
                        {formValues.instructions.map((instruction, index) => {
                        return(
                        <input
                        type='text'
                        value={instruction}
                        onChange={(e) => {instructionChangeHandler(e, index)} }
                        />
                        )
                        
                    })}
                    </label>
                    <label >
                        <h4>Tags</h4>
                        {formValues.tags.map((tag, index) => {
                        return(
                        <input
                        type='text'
                        value={tag}
                        onChange={(e) => {tagChangeHandler(e, index)} }
                        />
                        )
                        
                    })}
                    </label>
                    <LinkButton>Update</LinkButton>
                    <LinkButton onClick={() => {push(`/recipes`)}}>Cancel</LinkButton>
                    
            </form>
            </RecipeCard>
        </div>
    )
}

export default UpdateRecipe