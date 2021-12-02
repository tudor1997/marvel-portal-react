import {getSeriesDetails} from '../api';


export const fetchSeriesDetails = (id) => async (dispatch) => {

    const result = await fetch(getSeriesDetails(id));
    const data = await result.json();

    const seriesDetails = data.data.results;

    dispatch({
        type:"SERIES_DETAILS",
        payload:{
            seriesDetails:seriesDetails
        }
    })
    

}