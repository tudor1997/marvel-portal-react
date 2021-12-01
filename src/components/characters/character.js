import React from 'react'
import { Link } from 'react-router-dom'
const Character = ({name, image, extension, id}) => {
    const characterImg = `${image}.${extension}`
   
    return (
        <Link to={`/characters/${id}`} className="character">
            <div className="image">
            <img src={characterImg} alt={name} />
            </div>
          
            <div className="info">
            <div className="bar"></div>
            <h1 className="name">{name}</h1>
            </div>
     
        </Link>
    )
}

export default Character
