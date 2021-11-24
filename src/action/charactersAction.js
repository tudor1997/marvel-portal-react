import { characterListAPI , getCharacterAPI} from "../api";

export const loadCharacters = () => async (dispatch) => {
    
    // Fetch characters
    const result = await fetch(characterListAPI);
    const data = await result.json();
    const characterList = data.data.results
   
    

    dispatch({
        type:"FETCH_CHARACTERS",
        payload:{
            characters:characterList
        }
    })


    

}

export const fetchSearchedCharacter = (name) => async (dispatch) => {
    
    const result = await fetch(getCharacterAPI(name));
    const data = await result.json();   
   
    const searchCharacter = data.data.results
    dispatch({
        type:"SEARCHED_CHARACTER",
        payload:{
            searchedCharacter:searchCharacter,
        }
    })


}