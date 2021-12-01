import React from 'react'
import { Link } from 'react-router-dom';
const SeriesItem = ({name, id, path, extension}) => {
    const image = `${path}.${extension}`;
    return (
        <Link to={`/series/${id}`}className="series-card">
            <h4 className="series-title">{name}</h4>
            <div className="image">
                <img src={image} alt="" />
            </div>
        </Link>
    )
}

export default SeriesItem
