import { themeReducer } from './reducers/themeReducer';
import { loadingReducer } from './reducers/loadingReducer';
import { calendarReducer } from './reducers/calendarReducer';
import { loginReducer } from './reducers/loginReducer';
import { todoReducer } from './reducers/todoReducers';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducers from 'app/store/reducers'; // where reducers is a object of reducers
import sagas from 'app/store/sagas';
import { configureStore } from '@reduxjs/toolkit';

const config = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['loadingReducer'],
  debug: true, //to get useful logging
};

const middleware = [];
const sagaMiddleware = createSagaMiddleware();

middleware.push(sagaMiddleware);

if (__DEV__) {
  middleware.push(createLogger());
}

const reducers = persistCombineReducers(config, rootReducers);
const rootReducer = combineReducers({
  todos: todoReducer,
  login: loginReducer,
  calendar: calendarReducer,
  loading: loadingReducer,
  theme: themeReducer
});
const enhancers = [applyMiddleware(...middleware)];
// const initialState = {};
const persistConfig: any = { enhancers };
/* const store = createStore(reducers, undefined, compose(...enhancers));
const persistor = persistStore(store, persistConfig, () => {
  //   console.log('Test', store.getState());
}); */

// const configureStore = () => {
//   return { persistor, store };
// };
/* 
const configureStore = () => {
  return createStore(rootReducer);
}

sagaMiddleware.run(sagas); */

export default configureStore({
  reducer: rootReducer
})
