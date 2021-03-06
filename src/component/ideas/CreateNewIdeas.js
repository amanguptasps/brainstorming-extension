import React, { useState, useReducer } from "react"
import uuid from "uuid"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
function CreateNewIdeas({ pageId, voteMode }) {
  const dispatch = useDispatch()
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      idea: "",
    }
  )
  const [ideas, setIdeas] = useState([])

  const create = (newIdea) => {
    setIdeas([...ideas, newIdea])
  }
  const handleChange = (evt) => {
    setUserInput({ [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    const newIdea = { _id: uuid(), idea: userInput.idea, _pageId: pageId }
    create(newIdea)
    dispatch({ type: "CREATE_IDEAS", payload: newIdea })
    setUserInput({ idea: "" })
  }

  return (
    <form className="NewTodoForm" onSubmit={handleSubmit}>
      <div className="text">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Type an idea to add here"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={userInput.idea}
            name="idea"
            id="idea"
            onChange={handleChange}
            disabled={voteMode}
          />
          <Link to="/content">
            <div className="input-group-append">
              <span className="input-group-text" id="basic-addon2">
                <i className="far fa-paper-plane" aria-hidden="true"></i>
              </span>
            </div>
          </Link>
        </div>
      </div>
    </form>
  )
}

export default CreateNewIdeas
