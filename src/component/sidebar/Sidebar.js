import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import img1 from "../../assets/img/img1.png"
import { ReactComponent as BrainstormModeIcon } from "../../assets/icon/brainstormModeIcon.svg"
import CreateNewIdeas from "../ideas/CreateNewIdeas"
import FontSizeChanger from "react-font-size-changer"
const Sidebar = ({ pageId, setPageId }) => {
  const dispatch = useDispatch()
  const { pages } = useSelector((state) => state.topicsPagesreducer)
  const { vote } = useSelector((state) => state.modeReducer)
  console.log("Pagess", pages)
  return (
    <div className="main-wrapper ">
      <div className="content">
        <div className="content-main">
          <div
            className="content-1"
            onClick={() => dispatch({ type: "BRAINSTORM_MODE", payload: true })}
          >
            <div className="icon-heading active">
              <a href="#">
                <BrainstormModeIcon />

                <br />
                <span className="text-icon">Brainstorming Mode</span>
                <br />
              </a>
            </div>
          </div>
          <div
            className="content-1"
            onClick={() => dispatch({ type: "VOTE_MODE", payload: true })}
          >
            <div class="icon-heading">
              <div class="dropdown-icon">
                <button class="dropbtn">
                  <a href="#">
                    <i class="fas fa-vote-yea" aria-hidden="true"></i>
                    <br />
                    <span class="text-icon">
                      Vote <br />
                      Mode
                    </span>
                  </a>
                </button>
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
            className="content-1"
            onClick={() => dispatch({ type: "RESULT_MODE", payload: true })}
          >
            <div class="icon-heading">
              <a href="#">
                <span style={{ fontSize: "24px" }}>5</span>
                <br />
                <span class="text-icon">
                  Results
                  <br /> Mode
                </span>
              </a>
            </div>
          </div>
          <div className="content-1">
            <div class="icon-heading">
              <a href="#">
                <i class="fas fa-undo" aria-hidden="true"></i>
                <br />
                <span class="text-icon">Undo Mode</span>
              </a>
            </div>
          </div>
          <div className="content-1">
            <div class="icon-heading">
              <a href="#">
                <i class="fas fa-redo" aria-hidden="true"></i>
                <br />
                <span class="text-icon">Redo</span>
              </a>
            </div>
          </div>
          <div className="content-1">
            <div class="icon-heading">
              <div class="dropdown-icon">
                <button class="dropbtn">
                  <a href="#">
                    <i class="fas fa-trash-alt" aria-hidden="true"></i>
                    <br />
                    <span class="text-icon">Clear</span>
                  </a>
                </button>
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
          <div className="content-1">
            <div class="icon-heading">
              <a href="#">
                <i class="fas fa-external-link-alt" aria-hidden="true"></i>
                <br />
                <span class="text-icon">External</span>
              </a>
            </div>
          </div>
          <div className="content-1">
            <div class="icon-heading">
              <a href="#">
                <i class="fas fa-folder-open" aria-hidden="true"></i>
                <br />
                <span class="text-icon">Projects</span>
              </a>
            </div>
          </div>
          <div className="content-1">
            <div class="icon-heading">
              <a href="#">
                <i class="fas fa-print" aria-hidden="true"></i>
                <br />
                <span class="text-icon">Print</span>
              </a>
            </div>
          </div>
        </div>
        <div className="select-type">
          <FontSizeChanger
            targets={["#target .ideas"]}
            onChange={(element, newValue, oldValue) => {
              console.log(element, newValue, oldValue)
            }}
            options={{
              stepSize: 3,
              range: 4,
            }}
            customButtons={{
              down: (
                <span
                  style={{
                    fontSize: "20px",
                    fontFamily: "Baskervville, serif",
                  }}
                >
                  A
                </span>
              ),
              up: (
                <span
                  style={{
                    fontSize: "36px",
                    marginTop: "10px",
                    fontFamily: "Baskervville, serif",
                  }}
                >
                  A
                </span>
              ),
              style: {
                backgroundColor: "transparent",
                color: "black",

                border: "none",
              },
            }}
          />

          <div className="select-right">
            <ul className="list-unstyled">
              <div class="dropdown-list">
                <div class="dropdown-icon">
                  <button class="dropbtn">
                    {pages.map((page, index) => (
                      <a href="#">
                        {" "}
                        <li key={index} onClick={() => setPageId(page._id)}>
                          {index + 1}
                        </li>
                      </a>
                    ))}
                  </button>
                  <div class="dropdown-content vote-mode">
                    <div class="arrow-down"></div>
                    <a href="#">Lorem ipsum is simply</a>
                  </div>
                </div>
              </div>
              <a href="#">
                <li>
                  <i class="fas fa-angle-double-right" aria-hidden="true"></i>
                </li>
              </a>
              <a href="#">
                <li class="plus-icon">+</li>
              </a>
            </ul>
          </div>
        </div>
        <CreateNewIdeas pageId={pageId} />
        <div className="footer">
          <div className="button">
            <a href="#">
              <button>Hide Brainstorm Board</button>
            </a>
          </div>
          <div className="instructions">
            <a href="#">Instructions</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
