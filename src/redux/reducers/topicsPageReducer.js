const initialState = {
  pages: [
    {
      _id: "22",
      ideas: [{ _id: "s", idea: "dsgsdds" }],
      topics: "sdfds",
    },
  ],
}

const topicsPagesreducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "CREATE_TOPICS_PAGE":
      return {
        ...state,
        pages: state.pages.concat(payload),
      }

    case "CREATE_IDEAS":
      return {
        ...state,
        pages: state.pages.map((page) =>
          page._id === payload._pageId
            ? { ...page, ideas: page.ideas.concat(payload) }
            : page
        ),
      }
    default:
      return state
  }
}
export default topicsPagesreducer
