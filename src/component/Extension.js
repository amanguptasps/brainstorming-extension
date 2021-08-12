import React, { useState } from "react"
import Sidebar from "./sidebar/Sidebar"
import Content from "./Content"
import "./style.css"
export const Extension = () => {
  const [pageId, setPageId] = useState()
  return (
    <div className="main">
      <Content pageId={pageId} />
      <Sidebar pageId={pageId} setPageId={setPageId} />
    </div>
  )
}
