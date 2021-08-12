import React from "react"
import { useSelector, useDispatch } from "react-redux"
import uuid from "uuid"
const Content = ({ pageId }) => {
  const { pages } = useSelector((state) => state.topicsPagesreducer)
  const filterIdeas = pages.filter((page) => page._id === pageId)
  console.log("Filtereasdfsd ", filterIdeas)
  const dispatch = useDispatch()
  const payload = () => {
    return { _id: uuid(), ideas: [], topics: "KSDjfksd" }
  }
  return (
    <div class="main-wrapper-project">
      <div class="project-title">
        <div class="container-fluid">
          <p>
            Project Title Goes Here
            <span class="icon1">
              Saving<i class="fa fa-spinner" aria-hidden="true"></i>
            </span>
          </p>
        </div>
      </div>
      <div class="topic-title">
        <div class="container-fluid">
          <p>
            Topic Goes Here
            <a href="#">
              <span class="icon">
                <i class="fa fa-pencil" aria-hidden="true"></i>
              </span>
            </a>
          </p>
        </div>
      </div>
      <div class="border-bottom-title"></div>
      <div class="topics">
        <div class="container-fluid">
          <div class="topic-inner">
            {filterIdeas &&
              filterIdeas.map((item, i) => {
                return item.ideas.map((idea) => {
                  return (
                    <div class="topic-1" key={i}>
                      <div class="icon-bar">
                        <a href="#">
                          <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                        </a>
                        <span>
                          <i
                            class="fa fa-share"
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
                          <i class="fa fa-times" aria-hidden="true"></i>
                        </a>
                      </div>
                      <p>{idea.idea}</p>
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
