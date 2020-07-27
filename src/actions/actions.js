import {axiosWithAuth} from '../utils/axiosWithAuth'

export const FETCH_RECIPES_START = 'FETCH_RECIPES_START'
export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS'
export const FETCH_RECIPES_FAILURE = 'FETCH_RECIPES_FAILURE'

    export const POST_RECIPES_START = 'POST_RECIPES_START'
    export const POST_RECIPES_SUCCESS = 'POST_RECIPES_SUCCESS'
    export const POST_RECIPES_FAILURE = 'POST_RECIPES_FAILURE'



export const getRecipes = () => dispatch => {
    dispatch({ type: FETCH_RECIPES_START })
   
    axiosWithAuth()
        .get('https://lambdaschool-cookbook2.herokuapp.com/recipes')
        .then(res => {
            console.log(res)
            dispatch({ type: FETCH_RECIPES_SUCCESS, payload: res.data.recipes })
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: FETCH_RECIPES_FAILURE, payload: err.response })
        })
}

export const postRecipe = recipe => dispatch => {
    dispatch({ type: POST_RECIPES_START })
   console.log('hii')
    axiosWithAuth()
        .post('https://lambdaschool-cookbook2.herokuapp.com/recipes', recipe)
        .then(res => {
            console.log(res)
            
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: POST_RECIPES_FAILURE, payload: err.response })
        })
}
