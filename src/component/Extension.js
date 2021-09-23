import React, { useState } from "react"
import Sidebar from "./sidebar/Sidebar"
import Content from "./Content"
import "./style.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
export const Extension = () => {
  const [pageId, setPageId] = useState()
  console.log("pageId")
  return (
    <Router>
      <Switch>
        <div className="main">
          <Route path="/controlpanel">
            <Sidebar pageId={pageId} setPageId={setPageId} />
          </Route>
          <Route path="/stage" component={Content}>
            <Content pageId={pageId} />
          </Route>
        </div>
      </Switch>
    </Router>
  )
}
