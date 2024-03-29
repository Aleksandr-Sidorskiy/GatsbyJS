import styled from "styled-components"

const List = styled.ul`
  display: flex;
  /* justify-content: flex-end; */
  list-style: none;
  padding-left: 0;
`

const Heading = styled.h1`
  color: rebeccapurple;
  font-size: 25px;
`

const NavLinkItem = styled.li`
  padding-right: 2rem;
`
const NavLinkText = styled.p`
  color: black;
`
const HeaderNameSite = styled.header`
  font-size: 3rem;
  color: gray;
  font-weight: 700;
  margin: 3rem 0;
`

export default { List, Heading, NavLinkItem, NavLinkText, HeaderNameSite }
