const initialState = {
    series:[],
    searchedSeries: [],
}

const seriesReducer = (state=initialState, action) => {
    switch (action.type) {
        case "FETCH_SERIES":
            return {
                ...state,
                series:action.payload.series
            };
        case "SEARCHED_SERIES":
            return {
                ...state,
                searchedSeries:action.payload.searchedSeries
            }
        default:
            return {...state};
    }



}


export default seriesReducer;