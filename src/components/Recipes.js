import React, {useEffect, useState} from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import {useHistory} from "react-router-dom";
import Recipe from './Recipe'
import SearchBar from './SearchBar'

import styled from 'styled-components'




export const Recipes = props => {
    const {push} = useHistory()
    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState('')
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
    
    const changeSearch = e => {
        
        setSearch(e.target.value)
        
    }
    const searchedRecipes = recipes.filter(recipe => {
        return recipe.title.indexOf(search) !== -1            
     }          
     )
     console.log(searchedRecipes)
     console.log(search)
 
    return (
        <div>
            <h1>Welcome</h1>

            <h2>Recipes</h2>

            <SearchBar changeSearch={changeSearch} />
            {/* <RecipeForm /> */}
            {searchedRecipes.map(recipe => {                
                    return(
                        <Recipe recipe={recipe} searchValue={search} key={recipe.id} />
                    )                
            })}
            <br></br><br></br>
            <h2>No Recipes?</h2>
            <button onClick={()=> {push('/newrecipe')}}>Add New Recipe</button>
            <br></br><br></br>
          
            {/* <RecipeForm   /> */}
        </div>
    )
}


export default Recipes