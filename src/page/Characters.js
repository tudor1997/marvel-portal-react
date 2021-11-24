import React,{useEffect,useState} from 'react'
import { useSelector } from "react-redux";
import { loadCharacters,fetchSearchedCharacter } from "../action/charactersAction";
import { useDispatch} from "react-redux";
import Loading from '../components/loading';
import CharactersList from '../components/characters/charactersList';
const Characters = () => {

  const dispatch = useDispatch();
  const [isLoading,setIsLoading] = useState(true);
  const [text,setText] = useState('');


   useEffect(()=>{
        dispatch(loadCharacters());
        setIsLoading(false);
       
        return () => {

        }
  },[dispatch])

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchSearchedCharacter(text));
    setText('');
  }
  const handleClear = () => {
    dispatch(loadCharacters());
    dispatch(fetchSearchedCharacter());
  }
    const {searchedCharacter} = useSelector(state => state.characters);
    return (
        <section className="characters">
          <h1 className="title">Marvel Characters</h1>
         <div className="usage"> 
         <form onSubmit={handleSubmit}>
            <input value={text} onChange={(e) => setText(e.target.value)} type="text" />
            <button type="submit" >Search</button>
          </form>
          {searchedCharacter.length > 0 && <button onClick={handleClear} className="clear">Back to Characters</button>}
          </div>
          <div className="character-list">
          {isLoading ? <Loading></Loading> : <CharactersList></CharactersList> }
          </div>
        
        </section>
    )
}

export default Characters
