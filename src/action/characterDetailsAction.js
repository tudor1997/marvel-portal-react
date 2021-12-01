import {getCharacterDetails} from '../api';


export const getCharacter = (id) => async (dispatch) => {
    const result = await fetch(getCharacterDetails(id));
    const data = await result.json();
   const characterDetails = data.data;

  
   dispatch({
       type:"GET_DETAILS",
       payload:{
           details: characterDetails.results,
         
       }
   })
}