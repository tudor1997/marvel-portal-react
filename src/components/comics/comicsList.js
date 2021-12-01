import React,{useState} from 'react'
import Comic from './comic.js'
import { useSelector } from "react-redux";
import {useDispatch} from 'react-redux';
import {loadSearchedComic, loadComics} from '../../action/comicsAction'
const ComicsList = () => {
    const [text,setText] = useState('');
    const {comics, searchedComic} = useSelector(state => state.comics);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loadSearchedComic(text));
        setText('');
      }
      const handleClear = () => {
        dispatch(loadComics());
        dispatch(loadSearchedComic());
      }
    return (

        <>
                <h1 className="title">Comics</h1>
                <div className="form-container">
                <form onSubmit={handleSubmit}>
                <input value={text} onChange={(e) => setText(e.target.value)} type="text" />
                <button type="submit" >Search</button>
                </form>
                {searchedComic.length > 0 && <button onClick={handleClear} className="clear">Back to comics</button>}
                </div>
             <div className="comics-list">
             { searchedComic.length > 0 ? searchedComic.map((comic) =>{
                 return <Comic key={comic.id}  
                    id={comic.id}
                    title={comic.title} 
                    path={comic.thumbnail.path} 
                    extension={comic.thumbnail.extension}></Comic>
             })
             :
             comics.map((comic) => {
                    return  <Comic key={comic.id}  
                    id={comic.id}
                    title={comic.title} 
                    path={comic.thumbnail.path} 
                    extension={comic.thumbnail.extension}></Comic>
                })}

             </div>
        </>
    )
}

export default ComicsList
