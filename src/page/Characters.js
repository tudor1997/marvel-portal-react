import React from 'react'
import { useSelector } from "react-redux";
import Character from '../components/characters/character';
const Characters = () => {


    const {characters} = useSelector(state => state.characters);
    
    return (
        <section className="characters">
          <h1 className="title">Marvel Characters</h1>
          <form>
            <input type="text" />
            <button>Search</button>
          </form>
          <div className="character-list">
          {characters.map((item) => {
                 return  <Character key={item.id}
                  name={item.name} 
                  image={item.thumbnail.path} 
                  extension={item.thumbnail.extension} ></Character>
               })}
          </div>
        
        </section>
    )
}

export default Characters
