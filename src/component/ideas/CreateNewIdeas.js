import React, { useState, useReducer } from "react"
import uuid from "uuid"
import { useDispatch } from "react-redux"

function CreateNewIdeas({ pageId }) {
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
      <div class="text">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Type an idea to add here"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={userInput.idea}
            name="idea"
            id="idea"
            onChange={handleChange}
          />
          <div class="input-group-append">
            <span class="input-group-text" id="basic-addon2">
              <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
            </span>
          </div>
        </div>
      </div>
    </form>
  )
}

export default CreateNewIdeas
