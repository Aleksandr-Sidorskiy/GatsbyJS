import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout/layout"
import Container from "../components/wrapper/wrapper-style"
import Seo from "../components/seo"

const HomePage = () => {
  return (
    <Container>
      <Layout pageTitle="Home Page">
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="../images/coffee-cup.jpg"
        />
      </Layout>
    </Container>
  )
}

export const Head = () => <Seo title="Home page" />

export default HomePage
