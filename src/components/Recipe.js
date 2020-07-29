import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'


const RecipeCard = styled.div`
    background-color: #BFD7D2;
    margin: 20px;
    border-radius: 18px;
    padding: 15px;
`

export const Recipe = props => {

    const [photos, setPhotos] = useState([])
    const {push} = useHistory()
    


    const RandomPhoto = styled.img`
        width: 50%;
        display: block;
        margin: 0 auto;
    `

    useEffect(() => {

    
        axios
        .get(`https://picsum.photos/v2/list`)
        .then(res => {
            console.log(res)
            setPhotos([res.data[0]])       
        })
        .catch(err => {
            console.log(err)
        })
       
    },[])

console.log(photos)
    
    const {recipe, key} = props
    console.log(recipe.id)
    return (
        <RecipeCard onClick={() => {push(`/recipe/${recipe.id}`)}}>
            <h2>Title: {recipe.title}</h2>
            <b>Source: {recipe.source}</b>
            
            {photos.map(photo => {                
                    return(
                        <RandomPhoto src={photo.download_url} alt="Random Photo"></RandomPhoto>
                    )                
            })}

           
        </RecipeCard>
    )
}

export default Recipe