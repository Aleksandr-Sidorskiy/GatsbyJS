import React from "react"
import Style from "./wrapper-style"

const Wrapper = ({ children }) => {
  return <Style.Container>{children}</Style.Container>
}

export default Wrapper
