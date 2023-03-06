import styled from "styled-components"

const Container = styled.div`
  width: 320px;
  padding: 0 15px;
  margin: 0 auto;
  font-family: sans-serif;

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1170px) {
    width: 1170px;
  }
`

// const Section = styled.div`
//   @media screen and (max-width: 1199px) {
//     padding-top: 60px;
//     padding-bottom: 60px;
//   }
//   @media screen and (min-width: 1200px) {
//     padding-top: 94px;
//     padding-bottom: 94px;
//   }
// `

export default Container
