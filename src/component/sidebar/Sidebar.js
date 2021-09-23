import React from "react"
import BrainstomSidebar from "./BrainstormSidebar"
import NewProject from "./NewProject"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom"
const Sidebar = ({ pageId, setPageId }) => {
  let { path } = useRouteMatch()
  return (
    <div className="main-wrapper ">
      <Route exact path={`${path}/`}>
        <BrainstomSidebar pageId={pageId} setPageId={setPageId} />
      </Route>

      <Route path={`${path}/project`}>
        <NewProject />
      </Route>
    </div>
  )
}

export default Sidebar
