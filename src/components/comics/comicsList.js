import React from 'react'
import Comic from './comic.js'
import { useSelector } from "react-redux";
const ComicsList = () => {

    const {comics} = useSelector(state => state.comics);

    return (

        <>
                <h1 className="title">Comics</h1>
             <div className="comics-list">
             { comics.map((comic) => {
                    return  <Comic key={comic.id}  
                    title={comic.title} 
                    path={comic.thumbnail.path} 
                    extension={comic.thumbnail.extension}></Comic>
                })}

             </div>
        </>
    )
}

export default ComicsList
