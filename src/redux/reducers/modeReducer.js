import * as actionTypes from "../actionType"
const initialState = {
  brainstorm: true,
  vote: false,
  result: false,
}

const modeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.BRAINSTORM_MODE:
      return {
        ...state,
        brainstorm: payload,
        vote: false,
        result: false,
      }
    case actionTypes.VOTE_MODE:
      return {
        ...state,
        vote: payload,
        brainstorm: false,
        result: false,
      }
    case actionTypes.RESULT_MODE:
      return {
        ...state,
        result: payload,
        vote: false,
        brainstorm: false,
      }
    default:
      return state
  }
}
export default modeReducer
