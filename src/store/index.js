import { createStore, compose,applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/es/storage';

import rootReducer from "../reducer";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = persistReducer(
  {
    key: 'pizza',
    storage: storage,
    whitelist: ['order'],
  },
  rootReducer
);

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(createLogger))
);
persistStore(store)


export default store;
