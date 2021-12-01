import React, { useEffect } from "react";
import { loadComicDetails } from "../../action/comicsDetailsAction";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ComicDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(loadComicDetails(id));
  }, [dispatch]);

  const { comicDetails } = useSelector((state) => state.comicDetails);

  const details = Array.from(comicDetails);
  return (
    <section className="comic-details-container">

      {details &&
        details.map((item) => {
          const { title, thumbnail, characters, prices, urls, textObjects } =
            item;
          const { path, extension } = thumbnail;
          const image = `${path}.${extension}`;
          const { items } = characters;

          return (
            <div key={item.id} className="details-container">
              <h1> {title} </h1>
              <div className="info">
                <div className="container-image">
                  <img src={image} alt="" />
                  <div className="price">
                    {prices.map((price, index) => {
                      return <p key={index}> Price: {price.price}$ </p>;
                    })}
                  </div>
                </div>
               
       
                  {textObjects.map((item, index) => {
                    const text = item.text;
                    
                    return (
                        <div key={index} className="text">
   
                            {textObjects ? <p>{text}</p> : <p>Sorry, no description was given at this time.</p>}
                
                      </div>
                    );
                  })}
            
              </div>
               <div className="characters">
                    <h3>Characters:</h3>
                 <div className="characters-list">
                 {items &&
                  items.map((item, index) => {
                      
                    return (
                   
                        <p key={index}> {item.length > 0 ? item.name : ("No character has been found")} </p>
                  
                    );
                  })}
                 </div>
            
              </div> 
              <div className="urls">
                  
                {urls &&
                  urls.map((url, index) => {
                    return (
                      <a className="url" key={index} href={url.url} target="_blank" rel="noreferrer">
                        {url.type}
                      </a>
                    );
                  })}
              </div>
            </div>
          );
        })}
    </section>
  );
};

export default ComicDetails;
