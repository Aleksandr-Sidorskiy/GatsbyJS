import React from "react"
import StyledMenu from "./burger-menu-style"

const BurgerMenu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <ul>
        <li>
          <a href="/">Студія</a>
        </li>
        <li>
          <a href="/">Портфоліо</a>
        </li>
        <li>
          <a href="/">Контакти</a>
        </li>
      </ul>
    </StyledMenu>
  )
}

export default BurgerMenu
