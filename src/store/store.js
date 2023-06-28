import { configureStore } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import counterReducer from './counter/counterSlice'
import todoReducer from "./todos/todoSlice";
import loggerMiddleware from "./middleware/loggerMiddleware";


const rootReducer = {
  counter: counterReducer,
  todos: todoReducer
}

export default function configureAppStore(preloadedState) {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(loggerMiddleware)
    },
    preloadedState,
    // enhancers: [monitorReducersEnhancer]
  })

  return store
}

// The 'selector' parameter passed is a function that receives the state.
export const useAppSelector = (selector) => {
  const state = useSelector((state) => state);
  return useMemo(() => selector(state), [state, selector]);
};