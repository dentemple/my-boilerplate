import React from "react"
import { shallow } from "enzyme"
import MyComponent from "../Exclamation"

it("renders without crashing", () => {
  shallow(<MyComponent />)
})
