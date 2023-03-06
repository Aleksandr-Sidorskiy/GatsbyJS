import * as React from "react"
import Layout from "../components/layout/layout"
import Container from "../components/wrapper/wrapper-style"
const HomePage = () => {
  return (
    <Container>
      <Layout pageTitle="Home Page">
        <p>I'm making this by following the Gatsby Tutorial.</p>
      </Layout>
    </Container>
  )
}

export const Head = () => <title>Home Page</title>

export default HomePage
