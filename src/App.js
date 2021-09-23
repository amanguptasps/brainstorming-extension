import React, { useEffect } from "react"
import { Extension } from "./component/Extension"
import { getAuth, signInWithCustomToken } from "firebase/auth"
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

const App = () => {
  return <Extension />
}
export default App
