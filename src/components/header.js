import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"

const Header = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allFile(filter: { name: { eq: "camera-man" } }) {
            edges {
              node {
                publicURL
              }
            }
          }
        }
      `}
      render={({
        allFile: {
          edges: [
            {
              node: { publicURL },
            },
          ],
        },
      }) => (
        <header>
          <Link to="/">
            <img src={publicURL} alt="logo" width="60px" height="60px" />
          </Link>
          That is header
        </header>
      )}
    />
  )
}
export default Header
