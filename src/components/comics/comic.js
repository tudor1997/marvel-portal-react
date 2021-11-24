import React from 'react'
import { Link } from 'react-router-dom'

const Comic = ({title,path,extension}) => {

    const image= `${path}.${extension}`

    return (
        <article className="comic-card">
            <div className="img">
                <img src={image} alt="" />
            </div>
            <div className="info">
                <h1>{title}</h1>
                <Link className="details">Details</Link>
            </div>
        </article>
    )
}

export default Comic
