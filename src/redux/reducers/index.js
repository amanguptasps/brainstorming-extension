import { combineReducers } from "redux"
import modeReducer from "./modeReducer"
import topicsPagesreducer from "./topicsPageReducer"
export default combineReducers({
  modeReducer: modeReducer,
  topicsPagesreducer: topicsPagesreducer,
})
