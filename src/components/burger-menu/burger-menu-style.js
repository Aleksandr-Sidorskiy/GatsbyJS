import styled from "styled-components"

const StyledMenu = styled.nav`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 47px;
  letter-spacing: 0.02em;

  background-color: azure;
  color: #212121;

  transition: transform 0.3s ease-in-out;
  z-index: 1;

  &:hover {
    color: #2196f3;
  }
  /* transform: ${({ open }) =>
    open ? "translateX(0%)" : "translateX(100%)"}; */
  @media screen and(max-width: 767px) {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    display: flex;
  }
`

export default StyledMenu
