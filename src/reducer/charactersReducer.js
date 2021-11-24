const initialState = {
    characters:[],
    searchedCharacter:[],

};

const charactersReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'FETCH_CHARACTERS':
            return {
                ...state,
                characters:action.payload.characters
            }
            case 'SEARCHED_CHARACTER':
                return {
                    ...state,
                    searchedCharacter:action.payload.searchedCharacter
                }
        default:
            return state;
    }
}

export default charactersReducer;