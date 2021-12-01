const initialState = {
      characterDetails: {details:[]},
}

const CharacterDetailsReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'GET_DETAILS':
                return {
                    ...state,
                    characterDetails: action.payload.details
                };
            default: 
            return {...state};
    }
}

export default CharacterDetailsReducer;