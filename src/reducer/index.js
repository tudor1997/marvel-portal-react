import  {combineReducers} from 'redux';
import charactersReducer from './charactersReducer'
import comicsReducer from './comicsReducer';
import detailsReducer from './characterDetailsReducer'
import seriesReducer from './seriesReducer';
const rootReducer = combineReducers({
    characters:charactersReducer,
    comics:comicsReducer,
    characterDetails:detailsReducer,
    series:seriesReducer,
})

export default rootReducer;