import { combineReducers } from 'redux';

import CollectionsReducer from './reducer_collections';

const rootReducer = combineReducers({
  collections: CollectionsReducer
});

export default rootReducer;
