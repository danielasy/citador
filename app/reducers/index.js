
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'

import citations from './citations';

const reducers = {
  citations: citations,
  form: formReducer,
  routing: routerReducer,
}

const rootReducer = combineReducers(reducers);

export default rootReducer
