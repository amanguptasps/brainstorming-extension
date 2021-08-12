import { applyMiddleware, createStore } from "redux"
import thunkMiddleware from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

import monitorReducerEnhancer from "./enhancers/monitorReducerEnhancer"
import loggerMiddleware from "./middleWare/logger"
import rootReducer from "./reducers"

export default function configureStore(preloadedState) {
  const middleWare = [loggerMiddleware, thunkMiddleware]
  const middleWareEnhancer = applyMiddleware(...middleWare)
  const enhancers = [middleWareEnhancer, monitorReducerEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)
  const store = createStore(rootReducer, preloadedState, composedEnhancers)
  return store
}
