import React from "react"

import Header from "./header"
import Sidebar from "./sidebar"

const Layout = () => (
  <>
    <Header />
    <div
      style={{ margin: `0 auto`, maxWidth: 650, backgroundColor: `#eeeeee` }}
    >
      {/* {children} */}
      <Sidebar />
    </div>
  </>
)

export default Layout
