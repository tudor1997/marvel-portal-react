import {comicListAPI} from '../api'


export const loadComics = () => async (dispatch) =>{

    const result = await fetch(comicListAPI);
    const data = await result.json();

    const comicList = data.data.results
    
    dispatch({
        type:"FETCH_COMICS",
        payload:{ 
            comics:comicList
        }
    })

}