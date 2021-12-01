const initialState = {
    comicDetails:[]
}

const getComicDetails = (state=initialState, action) => {

    switch (action.type) {
        case 'GET_COMIC_DETAILS':
            return {
                ...state,
                comicDetails: action.payload.comicDetails
            };
        default: 
        return {...state};
    }

}

export default getComicDetails;