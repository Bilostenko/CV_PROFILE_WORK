import { combineReducers } from 'redux';
import { projectReducer } from './projectReducer'; 
import languageReducer from './languageReducer';

const rootReducer = combineReducers({
  project: projectReducer,
  language: languageReducer,
});

export default rootReducer;
