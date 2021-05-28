import {combineReducers} from 'redux';
import UserReducer from './reducer/UserReducer';
import MountainReducer from './reducer/MountainReducer'

const Reducers = combineReducers({
  UserReducer,
  MountainReducer
});

export default Reducers;
