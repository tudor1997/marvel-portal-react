import {seriesListAPI,getSeriesAPI} from '../api';


export const loadSeries = () => async (dispatch) => {

    const result = await fetch(seriesListAPI);
    const data = await result.json();

    const seriesList = data.data.results;

    dispatch({
        type:"FETCH_SERIES",
        payload:{
            series:seriesList
        }

    })

}

export const loadSearchedSeries = (name) => async (dispatch) => {
    const result = await fetch(getSeriesAPI(name));
    const data = await result.json();

    const searchedSeries = data.data.results;

    dispatch({
        type:"SEARCHED_SERIES",
        payload:{
            searchedSeries:searchedSeries
        }
    })
}