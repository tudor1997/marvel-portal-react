import React from 'react'
import { useSelector } from "react-redux";
import Comic from '../components/comics/comic.js'
const Comics = () => {

    const {comics} = useSelector(state => state.comics);
    console.log(comics);
    return (
        <section className="comics-section">
               <h1 className="title">Comics</h1>
             <div className="comics-list">
             {comics.map((comic) => {
                    return  <Comic key={comic.id}  
                    title={comic.title} 
                    path={comic.thumbnail.path} 
                    extension={comic.thumbnail.extension}></Comic>
                })}

             </div>
        </section>
    )
}

export default Comics
