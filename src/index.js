import "@babel/polyfill"

import "core-js/stable"
import "regenerator-runtime/runtime"

import React from "react"
import ReactDom from "react-dom"

import App from "./App"

const title = "this is react"

ReactDom.render(<div><App /> {title}</div>, document.querySelector("#app"))

module.hot.accept()
