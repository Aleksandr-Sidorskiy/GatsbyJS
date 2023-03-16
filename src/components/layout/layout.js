import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import style from "./layout-style"
import Container from "../wrapper/wrapper-style"
// import Header from "./header/header"
// import Sidebar from "./sidebar"

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { List, Heading, NavLinkItem, NavLinkText, HeaderNameSite } = style
  return (
    <Container>
      <HeaderNameSite>{data.site.siteMetadata.title}</HeaderNameSite>
      <nav>
        <List>
          <NavLinkItem>
            <Link to="/">
              <NavLinkText> Home</NavLinkText>
            </Link>
          </NavLinkItem>
          <NavLinkItem>
            <Link to="/about">
              <NavLinkText>About</NavLinkText>
            </Link>
          </NavLinkItem>
        </List>
      </nav>
      <main>
        <Heading>{pageTitle}</Heading>
        {children}
      </main>
    </Container>
  )
}

export default Layout
