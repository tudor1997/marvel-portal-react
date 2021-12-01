import  {combineReducers} from 'redux';
import charactersReducer from './charactersReducer'
import comicsReducer from './comicsReducer';
import detailsReducer from './characterDetailsReducer'
const rootReducer = combineReducers({
    characters:charactersReducer,
    comics:comicsReducer,
    details:detailsReducer,
})

export default rootReducer;