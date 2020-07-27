import React, {useEffect, useState} from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import {getRecipes, postRecipe} from '../actions/actions'
import {connect} from 'react-redux'
import Recipe from './Recipe'
import RecipeForm from './RecipeForm'
import {useHistory} from 'react-router-dom'


export const Recipes = props => {

    useEffect(() => {
        props.getRecipes()
    },[])


 
    return (
        <div>
            <h1>Welcome</h1>
          
            {/* <RecipeForm /> */}
            {props.recipes.map(recipe => {                
                    return(
                        <Recipe recipe={recipe} />
                    )                
            })}
            <h1>No Recipes?</h1>
          
            <RecipeForm   />
        </div>
    )
}

const mapStateToProps = state => ({
    recipes: state.recipes,
    error: state.error
})
export default connect(mapStateToProps,
    {getRecipes, postRecipe}
    )(Recipes)