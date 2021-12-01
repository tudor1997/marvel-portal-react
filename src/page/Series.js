import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { loadSeries } from '../action/seriesAction';

// Components
import SeriesList from '../components/series/seriesList'

const Series = () => {

    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(loadSeries());
    },[dispatch])

    return (
        <section className="series-section">
            <h1>Series</h1>

            <SeriesList></SeriesList>
        </section>
    )
}

export default Series
