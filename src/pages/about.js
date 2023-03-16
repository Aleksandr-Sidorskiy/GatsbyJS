import * as React from "react"
import Layout from "../components/layout/layout"
import Container from "../components/wrapper/wrapper-style"
import Seo from "../components/seo"

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

export const Head = () => <Seo title="About Me" />

export default AboutPage
