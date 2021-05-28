import AsyncStorage from '@react-native-async-storage/async-storage';
import {applyMiddleware, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';

import thunk from 'redux-thunk';
import Reducers from './index';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
  whitelist: [
    'UserReducer',
    'MountainReducer',
  ],
};
const persistedReducer = persistReducer(persistConfig, Reducers);

const Store = createStore(persistedReducer, applyMiddleware(thunk));
const Persistor = persistStore(Store);

export {Store, Persistor};
