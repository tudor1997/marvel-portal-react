const initialState = {comics:[]}


const comicsReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'FETCH_COMICS':
            return {
                ...state,
                comics:action.payload.comics
            };
        default:
            return {...state};
    }
    

};

export default comicsReducer;