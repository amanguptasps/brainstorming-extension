import * as actionTypes from "../actionType"
const initialState = {
  pages: [
    {
      _id: "22",
      ideas: [
        {
          _id: "s",
          idea:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia" +
            +" molestiae quas vel sint commodi repudiandae consequuntur",
        },
      ],
      topics: "sdfds",
    },
  ],
}

const topicsPagesreducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.CREATE_TOPICS_PAGE:
      return {
        ...state,
        pages: state.pages.concat(payload),
      }

    case actionTypes.CREATE_IDEAS:
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
