import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'

export const Recipe = props => {

    const [photos, setPhotos] = useState([])

    


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
    
    const {recipe} = props
    return (
        <div>
            <h2>Title: {recipe.title}</h2>
            <b>Source: {recipe.source}</b>
            
            {photos.map(photo => {                
                    return(
                        <RandomPhoto src={photo.download_url} alt="Random Photo"></RandomPhoto>
                    )                
            })}

           
        </div>
    )
}

export default Recipe