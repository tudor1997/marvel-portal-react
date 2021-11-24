import React,{useEffect,useState} from 'react'
import { useDispatch} from "react-redux";
import { loadComics } from "../action/comicsAction";
import ComicsList from '../components/comics/comicsList';
import Loading from '../components/loading'


const Comics = () => {
    const dispatch = useDispatch();
    const [isLoading,setIsLoading] = useState(true);
    useEffect(()=>{
        dispatch(loadComics());
        setIsLoading(false)

        return () => {
          
        }
  },[dispatch])

    
    
    return (
        <section className="comics-section">
            {isLoading ? <Loading></Loading> : <ComicsList></ComicsList>}
           
        </section>
    )
}

export default Comics
