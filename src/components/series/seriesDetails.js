import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch} from 'react-redux';

const SeriesDetails = () => {
    const {id} = useParams()
    const dispatch = useDispatch();

    useEffect(() => {
      

    },[dispatch])
    return (
        <div>
             hello {id}
        </div>
    )
}

export default SeriesDetails
