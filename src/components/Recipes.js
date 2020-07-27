import React, {useEffect, useState} from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'

import Recipe from './Recipe'
import RecipeForm from './RecipeForm'

import {RecipeContext} from '../contexts/RecipeContext'


export const Recipes = props => {

    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        axiosWithAuth()
        .get('https://lambdaschool-cookbook2.herokuapp.com/recipes')
        .then(res => {
            console.log(res)
            setRecipes(res.data.recipes)       
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    
 
    return (
        <div>
            <h1>Welcome</h1>
          
            {/* <RecipeForm /> */}
            {recipes.map(recipe => {                
                    return(
                        <Recipe recipe={recipe} />
                    )                
            })}
            <h1>No Recipes?</h1>
          
            <RecipeForm   />
        </div>
    )
}


export default Recipes