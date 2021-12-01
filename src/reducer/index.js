import  {combineReducers} from 'redux';
import charactersReducer from './charactersReducer'
import comicsReducer from './comicsReducer';
import detailsReducer from './characterDetailsReducer'
import seriesReducer from './seriesReducer';
import getComicDetails from './comicDetailsReducer';
const rootReducer = combineReducers({
    characters:charactersReducer,
    comics:comicsReducer,
    series:seriesReducer,
    characterDetails:detailsReducer,
   comicDetails:getComicDetails,
})

export default rootReducer;