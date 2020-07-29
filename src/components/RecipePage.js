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
export const RecipePage = props => {
    const {id} = useParams()
    console.log('id', id)
    const [recipe, setRecipe] = useState({})
    const [instructions, setInstructions] = useState([])
    const [tags, setTags] = useState([])
    const {push} = useHistory()
    useEffect(() => {
        axiosWithAuth()
        .get(`https://lambdaschool-cookbook2.herokuapp.com/recipes/${id}`)
        .then(res => {
            console.log(res)
            setRecipe(res.data.recipe)
            setInstructions(res.data.recipe.instructions)
            setTags(res.data.recipe.tags)
        })
        .catch(err => {
            console.log(err)
        })
    },[])
    console.log('recipe', recipe.instructions)
    return (
        <div>
            <RecipeCard>
                <h2>Title: {recipe.title}</h2>
                <h4>Source: {recipe.source}</h4>
                <h4>Notes: {recipe.notes}</h4>
                <h4>Ingredients: {recipe.ingredients}</h4>
                <b>Instructions: </b>
                {instructions.map((instruction, index) => (
                    <h4 key={index}>{index+1}: <b>{instruction}</b> </h4>
                ))}
                <h3>Tags: </h3>
                {tags.map((tag, index) => {
                    return(
                    <b key={index}> {tag}  </b>
                    )
                })}
                <br></br>
                <LinkButton onClick={() => {push('/protected')}}>Go Back</LinkButton>
            </RecipeCard>
        </div>
    )
}

export default RecipePage