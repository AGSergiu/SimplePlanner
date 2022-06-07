import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import calendarSlice from 'app/features/calendar/calendarSlice';
import todosSlice from 'app/features/todo/todosSlice';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';

const reducers = combineReducers({
  // theme,
  todo: todosSlice,
  calendar: calendarSlice,
})

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ['todo'],
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })/* .concat(api.middleware as Middleware) */

    if (__DEV__ && !process.env.JEST_WORKER_ID) {
      const createDebugger = require('redux-flipper').default
      middlewares.push(createDebugger())
    }

    return middlewares
  },
})

const persistor = persistStore(store)

// setupListeners(store.dispatch)

export { store, persistor }

export type RootState = ReturnType<typeof store.getState>
