import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux';
import {fetchSeriesDetails} from '../../action/seriesDetailsAction'
const SeriesDetails = () => {
    const {id} = useParams()
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchSeriesDetails(id));

    },[dispatch])

    const {seriesDetails} = useSelector(state => state.seriesDetails);
    const details = Array.from(seriesDetails);
    return (
        <section className="series-details-section">
            {details && details.map((item) => {
                const {title, description, thumbnail, urls, characters} = item;
                const {path, extension} = thumbnail;
                const image = `${path}.${extension}`;
                const {items} = characters;


                return (
                    <div key={item.id} className="details-container">
                        <h1>{title}</h1>

                        <div className="info">
                            <div className="container-image">
                                <img src={image} alt={title}  />
                            </div>
                            <div className="description">
                             {description ? <p>{description}</p>
                             : 
                             <p>Sorry, no description was provided at this time.</p>}   
                            </div>
                        </div>
                        <div className={items.length >= 1 ? `characters` : 'none'}>
                           {items.length >= 1 && <h4>Characters:</h4>} 
                            <div className="characters-list">
                            {items && items.map((item,index) => {
                                return <p key={index}>{item.name}</p>;
                            })}
                            </div>
                           
                        </div>
                        <div className="urls">
                            {urls && urls.map((url,index) => {
                               return <a  key={index} href={url.url} className="url-link">{url.type}</a>
                            })}
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default SeriesDetails
