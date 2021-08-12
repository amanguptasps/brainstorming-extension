const initialState = {
  brainstorm: false,
  vote: false,
  result: false,
}

const modeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "BRAINSTORM_MODE":
      return {
        ...state,
        brainstorm: payload,
        vote: false,
        result: false,
      }
    case "VOTE_MODE":
      return {
        ...state,
        vote: payload,
        brainstorm: false,
        result: false,
      }
    case "RESULT_MODE":
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
