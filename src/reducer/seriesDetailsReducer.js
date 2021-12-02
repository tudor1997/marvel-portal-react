const initialState = {
    seriesDetails: []
}

const getSeriesDetails = (state=initialState, action ) => {
    switch (action.type){
        case "SERIES_DETAILS":
            return {
                ...state,
                seriesDetails:action.payload.seriesDetails
            };
        default:
            return {...state};
    }
}

export default getSeriesDetails;