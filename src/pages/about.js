import * as React from "react"
import Layout from "../components/layout/layout"
import Container from "../components/wrapper/wrapper-style"

const AboutPage = () => {
  return (
    <Container>
      <Layout pageTitle="About Me">
        <p>
          Hi there! I'm the proud creator of this site, which I built with
          Gatsby.
        </p>
      </Layout>
    </Container>
  )
}

export const Head = () => {
  return (
    <>
      <title>About Me</title>
      <meta name="description" content="Your description" />
    </>
  )
}

export default AboutPage
