import React from 'react'
import {useParams} from 'react-router-dom'


const SeriesDetails = () => {
    const {id} = useParams()
    
    return (
        <div>
             hello {id}
        </div>
    )
}

export default SeriesDetails
