import React from 'react'

import Series from './SeriesItem';
import {useSelector} from 'react-redux';

const SeriesList = () => {
    const {series} = useSelector(state => state.series)

    return (
        <div className="series-list">
            {series && series.map((item) => {
                return <Series key="item.id"
                 name={item.title} 
                 id={item.id}
                 path={item.thumbnail.path}
                 extension={item.thumbnail.extension}
                 ></Series>
            })}
        </div>
    )
}

export default SeriesList
