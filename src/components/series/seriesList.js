import React,{useState} from 'react'

import Series from './SeriesItem';
import {useSelector, useDispatch} from 'react-redux';
import {loadSearchedSeries,loadSeries} from '../../action/seriesAction'
const SeriesList = () => {
    const {series,searchedSeries} = useSelector(state => state.series)
    const dispatch = useDispatch(); 
    const [text,setText] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loadSearchedSeries(text));
        setText('');
      }
      const handleClear = () => {
        dispatch(loadSeries());
        dispatch(loadSearchedSeries());
      }
    return (
    <>
          
                <div className="form-container">
                <form onSubmit={handleSubmit}>
                <input value={text} onChange={(e) => setText(e.target.value)} type="text" />
                <button type="submit" >Search</button>
                </form>
                {searchedSeries.length > 0 && <button onClick={handleClear} className="clear">Back to series</button>}
                </div>
        <div className="series-list">
            {searchedSeries.length > 0 ? searchedSeries.map((item) => {
                return <Series key={item.id}
                 name={item.title} 
                 id={item.id}
                 path={item.thumbnail.path}
                 extension={item.thumbnail.extension}
                 ></Series>
            }) : series.map((item) => {
                return <Series key={item.id}
                 name={item.title} 
                 id={item.id}
                 path={item.thumbnail.path}
                 extension={item.thumbnail.extension}
                 ></Series>
            })}
        </div>
    </>
    )
}

export default SeriesList
