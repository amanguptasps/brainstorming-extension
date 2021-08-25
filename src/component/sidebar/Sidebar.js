import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import img1 from "../../assets/img/img1.png"
import speechBubble from "../../assets/img/speech-bubble.png"
import CreateNewIdeas from "../ideas/CreateNewIdeas"
import FontSizeChanger from "react-font-size-changer"
const Sidebar = ({ pageId, setPageId }) => {
  const dispatch = useDispatch()
  const { pages } = useSelector((state) => state.topicsPagesreducer)
  const { vote } = useSelector((state) => state.modeReducer)
  console.log("Pagess", pages)
  return (
    <div className="main-wrapper mobile-wrapper">
      <div className="header">
        <div className="container-fluid">
          <div className="header-left">
            <img src={img1} />
            <p>Brainstorming</p>
          </div>
          <span className="icon">
            <a href="#">
              <i className="fa fa-times" aria-hidden="true"></i>
            </a>
          </span>
        </div>
      </div>
      <div className="content">
        <div className="content-main">
          <div
            className="content-1"
            onClick={() => dispatch({ type: "BRAINSTORM_MODE", payload: true })}
          >
             <div class="icon-heading active">
               <a href="#">
{/*                  
                 <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
               width="40.127px" height="30.127px" viewBox="0 0 46.127 46.127" xml:space="preserve">
<g>
  <g>
    <path d="M43.202,16.593c1.356-1.627,2.112-3.619,2.112-5.666c0-5.233-4.773-9.491-10.643-9.491c-2.492,0-4.847,0.758-6.744,2.153
      c-1.646-0.879-3.507-1.34-5.445-1.34c-5.868,0-10.643,4.257-10.643,9.491c0,0.328,0.021,0.659,0.062,0.991
      c-3.928,1.449-6.563,4.884-6.563,8.761c0,5.125,4.578,9.313,10.279,9.485c2.042,2.785,5.523,4.482,9.302,4.482
      c3.094,0,5.99-1.125,8.088-3.116c0.815,0.175,1.645,0.264,2.477,0.264c5.867,0,10.643-4.257,10.643-9.49
      C46.127,20.682,45.059,18.342,43.202,16.593z M35.484,29.607c-0.85,0-1.696-0.125-2.52-0.37c-0.561-0.168-1.168,0.006-1.555,0.445
      c-1.557,1.766-3.926,2.909-6.49,2.777c-8.005-0.408-7.938-6.043-7.939-7.258c-0.001-0.972,0.136-1.578,0.136-1.578
      c0.166-0.711-0.909-0.959-1.072-0.25c0.135-0.448-0.681,1.967-0.191,4.604c-4.153-0.059-7.514-2.943-7.514-6.485
      c0-2.919,2.322-5.492,5.647-6.257c0.404-0.093,0.752-0.35,0.96-0.708c0.208-0.358,0.259-0.788,0.14-1.185
      c-0.163-0.544-0.246-1.083-0.246-1.601c0-3.579,3.429-6.491,7.643-6.491c1.731,0,3.37,0.488,4.739,1.412
      c0.573,0.389,1.34,0.333,1.853-0.137c1.469-1.346,3.457-2.088,5.599-2.088c4.215,0,7.643,2.912,7.643,6.491
      c0,1.754-0.823,3.402-2.318,4.642c0,0-2.471-0.394-3.799-0.253c-0.93,0.098-0.82,1.056-0.211,1.133
      c0.002,0,0.574,0.073,1.441,0.322c0.784,0.232,1.785,0.625,2.672,1.181c0.012,0.008,0.02,0.019,0.03,0.026
      c1.904,1.247,2.996,3.12,2.996,5.138C43.127,26.695,39.698,29.607,35.484,29.607z"/>
    <path d="M9.92,31.519c-2.346,0-4.254,1.908-4.254,4.253c0,2.346,1.908,4.253,4.254,4.253c2.345,0,4.253-1.907,4.253-4.253
      C14.173,33.427,12.265,31.519,9.92,31.519z M9.92,38.026c-1.243,0-2.254-1.011-2.254-2.253c0-1.241,1.011-2.254,2.254-2.254
      c1.242,0,2.253,1.011,2.253,2.253S11.162,38.026,9.92,38.026z"/>
    <path d="M2.92,38.853c-1.61,0-2.92,1.31-2.92,2.919s1.31,2.919,2.92,2.919c1.609,0,2.919-1.31,2.919-2.919
      S4.529,38.853,2.92,38.853z M2.92,42.692c-0.507,0-0.92-0.413-0.92-0.919s0.413-0.919,0.92-0.919c0.507,0,0.919,0.413,0.919,0.919
      S3.427,42.692,2.92,42.692z"/>
    <path d="M23.689,6.777c-2.012-0.182-6.038,0.571-6.846,4.722c-0.105,0.542,0.248,1.067,0.79,1.172
      c0.064,0.013,0.129,0.019,0.192,0.019c0.469,0,0.888-0.332,0.98-0.809c0.661-3.397,4.524-3.125,4.705-3.112
      c0.562,0.044,1.034-0.357,1.083-0.906C24.645,7.312,24.239,6.827,23.689,6.777z"/>
  </g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
                */}
                <br/>
               <span class="text-icon">Brainstorming Mode</span><br/></a>
            </div>
          </div>
          <div
            className="content-1"
            onClick={() => dispatch({ type: "VOTE_MODE", payload: true })}
          >
           <div class="icon-heading">
                  <div class="dropdown-icon">
                     <button class="dropbtn"><a href="#"><i class="fas fa-vote-yea" aria-hidden="true"></i>
                      <br/>
                     <span class="text-icon">Vote <br/>Mode</span></a></button>
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
                  <a href="#"><span style={{fontSize:"24px"}}>5</span>
                   <br/>
                   <span class="text-icon">Results<br/> Mode</span></a>
                </div>
          </div>
          <div className="content-1">
           <div class="icon-heading">
                  <a href="#"><i class="fas fa-undo" aria-hidden="true"></i>
                   <br/>
                   <span class="text-icon">Undo Mode</span></a>
                </div>
          </div>
          <div className="content-1">
          <div class="icon-heading">
                  <a href="#"><i class="fas fa-redo" aria-hidden="true"></i>
                   <br/>
                <span class="text-icon">Redo</span></a>
                </div>
          </div>
          <div className="content-1">
          <div class="icon-heading">
                   <div class="dropdown-icon">
                    <button class="dropbtn"><a href="#"><i class="fas fa-trash-alt" aria-hidden="true"></i>
                       <br/>
                    <span class="text-icon">Clear</span></a>
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
                  <a href="#"><i class="fas fa-external-link-alt" aria-hidden="true"></i>
                   <br/>
                  <span class="text-icon">External</span></a>
                </div>
          </div>
          <div className="content-1">
          <div class="icon-heading">
                  <a href="#"><i class="fas fa-folder-open" aria-hidden="true"></i>
                   <br/>
               <span class="text-icon">Projects</span></a>
                </div>
          </div>
          <div className="content-1">
          <div class="icon-heading">
                  <a href="#"><i class="fas fa-print" aria-hidden="true"></i>
                   <br/>
               <span class="text-icon">Print</span></a>
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
               <a href="#"><li><i class="fas fa-angle-double-right" aria-hidden="true"></i></li></a>
               <a href="#"><li class="plus-icon">+</li></a>
           
          </div>
        </div>
        </ul>
        <CreateNewIdeas pageId={pageId} />
      </div>
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
{/* <!-- mobile-view --> */}
  <div class="mobile-wrapper">
    <div class="mobile-heading">
      <p>Brainstorming</p>
    </div>
    <div class="content-mobile">
      <div class="slide-options">
        <i class="fa fa-sliders-h" aria-hidden="true"></i>
        <p>Options</p>
      </div>
      <div class="text">
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Type an idea to add here" aria-label="Recipient's username" aria-describedby="basic-addon2">
         </input> <div class="input-group-append">
            <span class="input-group-text" id="basic-addon2"><i class="far fa-paper-plane" aria-hidden="true"></i></span>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="button">
        <a href="#"><button>Hide Brainstorm Board</button></a>
      </div>
      <div class="instructions">
        <a href="#">Instructions</a>
      </div>
     </div>
  </div>
</div>

export default Sidebar
