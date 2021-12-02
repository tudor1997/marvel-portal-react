import  {combineReducers} from 'redux';
import charactersReducer from './charactersReducer'
import comicsReducer from './comicsReducer';
import detailsReducer from './characterDetailsReducer'
import seriesReducer from './seriesReducer';
import getComicDetails from './comicDetailsReducer';
import getSeriesDetails from './seriesDetailsReducer'
const rootReducer = combineReducers({
    characters:charactersReducer,
    comics:comicsReducer,
    series:seriesReducer,
    characterDetails:detailsReducer,
   comicDetails:getComicDetails,
   seriesDetails:getSeriesDetails,
})

export default rootReducer;