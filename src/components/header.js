import React from "react"
import { Link } from "gatsby"

import logoSrc from "../images/icon.png"

const Header = () => (
  <header>
    <Link to="/">
      <img src={logoSrc} alt="logo" width="60px" height="60px" />
    </Link>
    That is header
  </header>
)
export default Header
