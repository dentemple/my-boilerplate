import React from "react"
import FaExclamation from "react-icons/lib/fa/exclamation"
import Icon from "../../common/Icon"

const Exclamation = () => (
  <Icon speak="Warning!">
    <FaExclamation title="Warning!" aria-hidden="true" />
  </Icon>
)

export default Exclamation
