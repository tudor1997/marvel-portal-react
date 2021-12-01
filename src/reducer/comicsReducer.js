const initialState = {
    comics:[],
    searchedComic:[]
}


const comicsReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'FETCH_COMICS':
            return {
                ...state,
                comics:action.payload.comics
            };
        case "SEARCHED_COMIC":
            return{
                ...state,
                searchedComic:action.payload.searchedComic
            }
        default:
            return {...state};
    }
    

};

export default comicsReducer;