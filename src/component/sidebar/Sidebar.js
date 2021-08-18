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
  		   	  			<svg xmlns="http://www.w3.org/2000/svg" width="41px" height="41px" viewBox="0 0 24 24">
                    <path d="M20.498 15.5H3.5V20.5H20.498V15.5ZM21.9445 14.4719L21.9661 14.5336L21.9892 14.6345L21.9981 14.7331V21.25C21.9981 21.6297 21.7159 21.9435 21.3499 21.9932L21.2481 22H2.75C2.3703 22 2.05651 21.7178 2.00685 21.3518L2 21.25V14.7506L2.00184 14.6977L2.01271 14.6122C2.02285 14.5584 2.03841 14.5072 2.05894 14.4587L4.81824 8.44003C4.92517 8.2068 5.14245 8.04682 5.39153 8.01047L5.5 8.0026L8.03982 8.00183L7.25089 9.37206L7.18282 9.50183L5.981 9.502L3.918 13.9998H20.07L18.0428 9.65383L18.9052 8.15653C18.9718 8.20739 19.0301 8.26957 19.0771 8.3411L19.1297 8.43553L21.9445 14.4719ZM13.3652 2.05565L13.4566 2.10062L18.6447 5.10375C18.9729 5.29371 19.1033 5.69521 18.9636 6.03728L18.9187 6.1289L16.112 11.001L17.25 11.0016C17.6642 11.0016 18 11.3374 18 11.7516C18 12.1313 17.7178 12.4451 17.3518 12.4948L17.25 12.5016L15.248 12.501L15.2471 12.504H11.1691L11.166 12.501L6.75 12.5016C6.33579 12.5016 6 12.1658 6 11.7516C6 11.3719 6.28215 11.0581 6.64823 11.0085L6.75 11.0016L8.573 11.001L8.39145 10.8963C8.06327 10.7063 7.93285 10.3048 8.0726 9.96272L8.11747 9.8711L12.4341 2.37536C12.6235 2.04633 13.024 1.91557 13.3652 2.05565ZM13.3559 3.77529L9.78781 9.97119L11.566 11.001H14.383L17.248 6.02818L13.3559 3.77529Z"/>
                    </svg>   
  		   	  		</div>
            <div class="icon-heading">
                  <div class="dropdown-icon">
                    <button class="dropbtn"><a href="#">Vote mode</a></button>
                    <div class="dropdown-content">
                      <div class="arrow-up"></div>
                      <a href="#">How many votes does everyone have?</a>
                      <a href="#">1 votes each</a>
                      <a href="#">2 votes each</a>
                      <a href="#">3 votes each</a>
                      <a href="#">4 votes each</a>
                      <a href="#">5 votes each</a>
                    </div>
                  </div>
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
  		   	  			 <div class="dropdown-icon">
                    <button class="dropbtn"><a href="#">Clear</a></button>
                    <div class="dropdown-content">
                      <div class="arrow-up"></div>
                      <a href="#">Clear Votes</a>
                      <a href="#">Clear my ideas</a>
                      <a href="#">Clear all ideas</a>
                      <a href="#">Clear the topic and ideas</a>
                      <a href="#">Delete all pages</a>
                    </div>
                  </div>
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
