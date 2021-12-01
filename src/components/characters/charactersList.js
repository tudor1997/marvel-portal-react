import React from 'react'
import { useSelector } from "react-redux";
import Character from './character';

const CharactersList = () => {

    const {characters,searchedCharacter} = useSelector(state => state.characters);
    return (
        <>
            {searchedCharacter.length > 0 ? searchedCharacter.map((item) =>{
                return  <Character key={item.id}
                name={item.name} 
                image={item.thumbnail.path} 
                extension={item.thumbnail.extension} 
                id={item.id}>
                </Character>
            }) : characters.map((item) => {
                 return  <Character key={item.id}
                  name={item.name} 
                  image={item.thumbnail.path} 
                  extension={item.thumbnail.extension} 
                  id={item.id}>
                  </Character>
               })}
               
               
        </>
    )
}

export default CharactersList
