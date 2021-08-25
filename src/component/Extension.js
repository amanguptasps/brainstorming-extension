import React, { useState, useEffect } from "react"
import Sidebar from "./sidebar/Sidebar"
import Content from "./Content"
import "./style.css"
export const Extension = () => {
  const getUrlVars = () => {
    var vars = [],
      hash
    var hashes = window.location.href
      .slice(window.location.href.indexOf("?") + 1)
      .split("&")
    for (var i = 0; i < hashes.length; i++) {
      hash = hashes[i].split("=")
      vars.push(hash[0])
      vars[hash[0]] = hash[1]
    }
    return vars
  }

  useEffect(() => {
    let token = getUrlVars()

    fetch("https://beta.meetn.com:8443/api/extension/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: token[token],
        type: "open",
        data: {
          web_desktop_layout: [
            {
              type: "stage",
              height: 100,
              width: 33,
              top: 0,
              left: 0,
              opacity: 1,
            },
            {
              type: "iframe1",
              webpage_url: "brainstorming.softprodigyphp.in",
              height: 100,
              width: 67,
              top: 0,
              left: 33,
              opacity: 1,
            },
          ],
          mobile_portrait_layout: [
            {
              type: "stage",
              height: 100,
              width: 33,
              top: 0,
              left: 0,
              opacity: 1,
            },
            {
              type: "iframe1",
              webpage_url: "brainstorming.softprodigyphp.in",
              height: 100,
              width: 67,
              top: 0,
              left: 33,
              opacity: 1,
            },
            {
              type: "iframe2",
              webpage_url: "brainstorming.softprodigyphp.in",
              height: 100,
              width: 67,
              top: 0,
              left: 33,
              opacity: 1,
            },
            {
              type: "iframe3",
              webpage_url: "brainstorming.softprodigyphp.in",
              height: 100,
              width: 67,
              top: 0,
              left: 33,
              opacity: 1,
            },
          ],
          mobile_landscape_layout: [
            {
              type: "stage",
              height: 100,
              width: 33,
              top: 0,
              left: 0,
              opacity: 1,
            },
            {
              type: "iframe1",
              webpage_url: "brainstorming.softprodigyphp.in",
              height: 100,
              width: 67,
              top: 0,
              left: 33,
              opacity: 1,
            },
            {
              type: "iframe2",
              webpage_url: "brainstorming.softprodigyphp.in",
              height: 100,
              width: 67,
              top: 0,
              left: 33,
              opacity: 1,
            },
            {
              type: "iframe3",
              webpage_url: "brainstorming.softprodigyphp.in",
              height: 100,
              width: 67,
              top: 0,
              left: 33,
              opacity: 1,
            },
          ],

          key: "022e2f60-e333-47c5-8c48-0660561ba575",
        },
      }),
    })
      .then((res) => console.log("res", res))
      .catch((e) => console.log("Error", e))
  }, [])
  const [pageId, setPageId] = useState()
  return (
    <div className="main">
      <Content pageId={pageId} />
      <Sidebar pageId={pageId} setPageId={setPageId} />
    </div>
  )
}
