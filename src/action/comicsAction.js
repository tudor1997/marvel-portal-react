import {comicListAPI,getComicAPI} from '../api'


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

export const loadSearchedComic = (name) => async (dispatch) => {
    const result = await fetch(getComicAPI(name));
    const data = await result.json();

   const searchedComic = data.data.results;
   
   dispatch({
       type:"SEARCHED_COMIC",
       payload:{
           searchedComic:searchedComic,
       }
   })


}