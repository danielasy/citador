
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import citations from './citations';

const rootReducer = combineReducers({citations, routing: routerReducer });

export default rootReducer
