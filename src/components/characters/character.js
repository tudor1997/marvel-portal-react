import React from 'react'

const Character = ({name, image, extension}) => {
    const characterImg = `${image}.${extension}`
   
    return (
        <article className="character">
            <div className="image">
            <img src={characterImg} alt={name} />
            </div>
          
            <div className="info">
            <div className="bar"></div>
            <h1 className="name">{name}</h1>
            </div>
     
        </article>
    )
}

export default Character
