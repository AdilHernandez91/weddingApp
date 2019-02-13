import { combineReducers } from 'redux';

import accommodationReducer from './accommodationReducer';

const rootReducers = combineReducers({
  accommodations: accommodationReducer,
});

export default rootReducers;
