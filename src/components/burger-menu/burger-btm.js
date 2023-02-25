import React from "react"
import Burger from "./burger-btm-style"

const BurgerMenuBtn = ({ open, setOpen }) => {
  return (
    <Burger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </Burger>
  )
}

export default BurgerMenuBtn
