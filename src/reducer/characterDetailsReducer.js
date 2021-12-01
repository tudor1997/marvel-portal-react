const initialState = {
      characterDetails: {characterDetails:[]},
}

const CharacterDetailsReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'GET_DETAILS':
                return {
                    ...state,
                    characterDetails: action.payload.characterDetails
                };
            default: 
            return {...state};
    }
}

export default CharacterDetailsReducer;