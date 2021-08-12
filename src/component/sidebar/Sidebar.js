import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import img1 from "../../assets/img/img1.png"
import speechBubble from "../../assets/img/speech-bubble.png"
import votingBox from "../../assets/img/voting-box.png"
import CreateNewIdeas from "../ideas/CreateNewIdeas"
const Sidebar = ({ pageId, setPageId }) => {
  const dispatch = useDispatch()
  const { pages } = useSelector((state) => state.topicsPagesreducer)
  console.log("Pagess", pages)
  return (
    <div class="main-wrapper">
      <div class="header">
        <div class="container-fluid">
          <div class="header-left">
            <img src={img1} />
            <p>Brainstorming</p>
          </div>
          <span class="icon">
            <a href="#">
              <i class="fa fa-times" aria-hidden="true"></i>
            </a>
          </span>
        </div>
      </div>
      <div class="content">
        <div class="content-main">
          <div
            class="content-1"
            onClick={() => dispatch({ type: "BRAINSTORM_MODE", payload: true })}
          >
            <div class="icons">
              <img class="img-fluid" src={speechBubble} />
            </div>
            <div class="icon-heading">
              <a href="#">Brainstorm mode</a>
            </div>
          </div>
          <div
            class="content-1"
            onClick={() => dispatch({ type: "VOTE_MODE", payload: true })}
          >
            <div class="icons">
              <img class="img-fluid" src={votingBox} />
            </div>
            <div class="icon-heading">
              <a href="#">Vote mode</a>
            </div>
          </div>
          <div
            class="content-1"
            onClick={() => dispatch({ type: "RESULT_MODE", payload: true })}
          >
            <div class="icons">
              <p>5</p>
            </div>
            <div class="icon-heading">
              <a href="#">Results mode</a>
            </div>
          </div>
          <div class="content-1">
            <div class="icons">
              <i class="fa fa-undo" aria-hidden="true"></i>
            </div>
            <div class="icon-heading">
              <a href="#">Undo</a>
            </div>
          </div>
          <div class="content-1">
            <div class="icons">
              <i class="fa fa-repeat" aria-hidden="true"></i>
            </div>
            <div class="icon-heading">
              <a href="#">Redo</a>
            </div>
          </div>
          <div class="content-1">
            <div class="icons">
              <i class="fa fa-trash" aria-hidden="true"></i>
            </div>
            <div class="icon-heading">
              <a href="#">Clear</a>
            </div>
          </div>
          <div class="content-1">
            <div class="icons">
              <i class="fa fa-external-link" aria-hidden="true"></i>
            </div>
            <div class="icon-heading">
              <a href="#">Export</a>
            </div>
          </div>
          <div class="content-1">
            <div class="icons">
              <i class="fa fa-folder-open-o" aria-hidden="true"></i>
            </div>
            <div class="icon-heading">
              <a href="#">Projects</a>
            </div>
          </div>
          <div class="content-1">
            <div class="icons">
              <i class="fa fa-print" aria-hidden="true"></i>
            </div>
            <div class="icon-heading">
              <a href="#">Print</a>
            </div>
          </div>
        </div>
        <div class="select-type">
          <div class="select-left">
            <p>A</p>
            <span class="capital-a">
              <p>A</p>
            </span>
          </div>
          <div className="select-right">
            <ul class="list-unstyled">
              {pages.map((page, index) => (
                <a href="#">
                  {" "}
                  <li key={index} onClick={() => setPageId(page._id)}>
                    {index + 1}
                  </li>
                </a>
              ))}
            </ul>
          </div>
        </div>
        <CreateNewIdeas pageId={pageId} />
      </div>
      <div class="footer">
        <div class="button">
          <a href="#">
            <button>Hide Brainstorm Board</button>
          </a>
        </div>
        <div class="instructions">
          <a href="#">Instructions</a>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
