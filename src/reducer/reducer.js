import {
    FETCH_RECIPES_START,
    FETCH_RECIPES_SUCCESS,
    FETCH_RECIPES_FAILURE,
    POST_RECIPES_START,
    POST_RECIPES_SUCCESS,
    POST_RECIPES_FAILURE
} from '../actions/actions'

const initialState = {
    recipes: [],
    error: '',
    isFetching: false
}

export function reducer(state = initialState, action) {
    switch(action.type){
        case FETCH_RECIPES_START:
        // console.log('start')
        return {
            ...state,
            recipes: [],
            error: '',
            isFetching: true
        }
    case FETCH_RECIPES_SUCCESS:
        // console.log(action.payload)
        return {
            ...state,
            recipes: action.payload,
            error: '',
            isFetching: false
        }
    case FETCH_RECIPES_FAILURE:
        return {
            ...state,
            error: action.payload.status,
            isFetching: false
        }

        case POST_RECIPES_START:
        // console.log('start')
        return {
            ...state,
            recipes: [],
            error: '',
            isFetching: true
        }
    case POST_RECIPES_SUCCESS:
        // console.log(action.payload)
        return {
            ...state,
            recipes: action.payload,
            error: '',
            isFetching: false
        }
    case POST_RECIPES_FAILURE:
        return {
            ...state,
            error: action.payload.status,
            isFetching: false
        }

        default:
            return state
    }
}