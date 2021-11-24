import { characterListAPI } from "../api";


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