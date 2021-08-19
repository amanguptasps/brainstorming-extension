import React from "react"
import { useSelector, useDispatch } from "react-redux"
import uuid from "uuid"
const Content = ({ pageId }) => {
  const { pages } = useSelector((state) => state.topicsPagesreducer)
  const { brainstorm } = useSelector((state) => state.modeReducer)
  console.log("pasfasdfsda", brainstorm)
  const filterIdeas = pages.filter((page) => page._id === pageId)
  console.log("Filtereasdfsd ", filterIdeas)
  const dispatch = useDispatch()
  const payload = () => {
    return { _id: uuid(), ideas: [], topics: "KSDjfksd" }
  }
  return (
    <div className="main-wrapper-project">
      <div className="project-title">
        <div className="container-fluid">
          <p>
            Project Title Goes Here
            <span className="icon1">
              Saving<i className="fa fa-spinner" aria-hidden="true"></i>
            </span>
          </p>
        </div>
      </div>
      <div className="topic-title">
        <div className="container-fluid">
          <p>
            Topic Goes Here
            <a href="#">
              <span className="icon">
                <i className="fa fa-pencil" aria-hidden="true"></i>
              </span>
            </a>
          </p>
        </div>
      </div>
      <div className="border-bottom-title"></div>
      <div className="topics">
        <div className="container-fluid">
          <div className="topic-inner">
            {filterIdeas &&
              filterIdeas.map((item, i) => {
                return item.ideas.map((idea) => {
                  return (
                    <div className="topic-1" key={i} id="target">
                      <div className="icon-bar">
                        {brainstorm ? (
                          <i
                            className="fa fa-thumbs-up"
                            aria-hidden="true"
                            data-title="You can only vote for ideas in voting mode"
                          ></i>
                        ) : (
                          <i
                            className="fa fa-thumbs-o-up"
                            aria-hidden="true"
                          ></i>
                        )}

                        <span>
                          <i
                            className="fa fa-share"
                            aria-hidden="true"
                            onClick={() =>
                              dispatch({
                                type: "CREATE_TOPICS_PAGE",
                                payload: payload(),
                              })
                            }
                          ></i>
                        </span>
                        <a href="#">
                          <i className="fa fa-times" aria-hidden="true"></i>
                        </a>
                      </div>
                      <p className="ideas">{idea.idea}</p>
                    </div>
                  )
                })
              })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
