import React from "react"
// import { graphql, Link, StaticQuery } from "gatsby"

import HeaderStyle from "./header-style"
import Menu from "../burger-menu/burger-menu"
import Burger from "../burger-menu/burger-btm"
import Logo from "../logo/logo"

const Header = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <HeaderStyle>
      <Logo />
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </HeaderStyle>
  )
}

export default Header

// const Header = () => {
//   return (
//     <StaticQuery
//       query={graphql`
//         {
//           allFile(filter: { name: { eq: "camera-man" } }) {
//             edges {
//               node {
//                 publicURL
//               }
//             }
//           }
//         }
//       `}
//       render={({
//         allFile: {
//           edges: [
//             {
//               node: { publicURL },
//             },
//           ],
//         },
//       }) => (
//         <header>
//           <Link to="/">
//             <img src={publicURL} alt="logo" width="60px" height="60px" />
//           </Link>
//           That is header
//         </header>
//       )}
//     />
//   )
// }
// export default Header
