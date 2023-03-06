import * as React from "react"
import { Link } from "gatsby"
import style from "./layout-style"
import Container from "../wrapper/wrapper-style"
// import Header from "./header/header"
// import Sidebar from "./sidebar"

const Layout = ({ pageTitle, children }) => {
  return (
    <Container>
      <nav>
        <style.List>
          <style.NavLinkItem>
            <Link to="/">
              <style.NavLinkText> Home</style.NavLinkText>
            </Link>
          </style.NavLinkItem>
          <style.NavLinkItem>
            <Link to="/about">
              <style.NavLinkText>About</style.NavLinkText>
            </Link>
          </style.NavLinkItem>
        </style.List>
      </nav>
      <main>
        <style.Heading>{pageTitle}</style.Heading>
        {children}
      </main>
    </Container>
  )
}

export default Layout
