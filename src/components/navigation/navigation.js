import React from "react"

import NavStyle from "./navigation-style"
import BurgerMenuBtn from "../burger-menu/burger-btm"
import BurgerMenu from "../burger-menu/burger-menu"
import Logo from "../logo/logo"

const Nav = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <NavStyle>
      <Logo />
      <BurgerMenuBtn open={open} setOpen={setOpen} />
      <BurgerMenu open={open} setOpen={setOpen} />
    </NavStyle>
  )
}

export default Nav
