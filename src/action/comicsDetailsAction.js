import { getComicDetails } from "../api";


 export const loadComicDetails = (id) => async (dispatch) => {

    const result = await fetch(getComicDetails(id));
    const data = await result.json();
    const comicDetails = data.data.results;

    dispatch({
        type:"GET_COMIC_DETAILS",
        payload:{
            comicDetails: comicDetails
        }
    })

}

