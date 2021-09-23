import React from "react"
import {} from "../../firebase"
const NewProject = () => {
  return (
    <>
      <div className="content">
        <div className="main-content">
          <div className="container-fluid">
            <div className="heading-project">
              <p>Projects</p>
            </div>
            <div className="content-area">
              <div className="inputs-existing">
                <div className="input-1">
                  <form>
                    <div className="form-group">
                      <label for="exampleFormControlSelect1">
                        Who can brainstorm?
                      </label>
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                      >
                        <option>Everyone</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </form>
                </div>
                <div className="input-2">
                  <p>Create New Project</p>
                </div>
                <div className="input-3">
                  <form>
                    <div className="form-group">
                      <label for="exampleFormControlInput1">Name:</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                      />
                    </div>
                  </form>
                </div>
                <div className="input-button-1">
                  <button>Create</button>
                </div>
              </div>
              <div className="existing-input">
                <p>Open Existing Project</p>
                <div className="existing-input-inner">
                  <a href="#">Existing Project will appear here</a>
                </div>
              </div>
            </div>
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
    </>
  )
}

export default NewProject
