import { rem } from "@/client/styled/functions";
import { styled } from "styled-components";


export const NavSublist = styled.ul`
  background-color: rgba(18,24,32,.05);
  box-shadow: inset 0 0 0 1px rgba(18,24,32,.1);
  max-height: 0;
  margin-left: -1px;
  overflow: hidden;
  transition: .4s cubic-bezier(0, 0, .3642, 1);
  visibility: hidden;
  width: calc(100% + 2px);

  li {
    &:first-of-type {
      margin-top: ${ rem(16) };
    }

    &:last-of-type {
      margin-bottom: ${ rem(8) };
    }
  }
`

export const NavLinksTrigger = styled.button`
  padding: 0 ${ rem(16) };
  position: relative;

  &::before {
    content: "";
    border-radius: 50%;
    border: 2px solid #f57c00;
    height: 8px;
    inset: 0 0 auto auto;
    position: absolute;
    width: 8px;
  }

  &[aria-expanded=true] {
    
    + ${ NavSublist } {
      max-height: ${ rem(400) };
      margin-top: ${ rem(16) };
      visibility: visible;
    }
  }
`

export const NavLink = styled.a`
`

export const NavItemWrapper = styled.li`
 
  &:not(:last-of-type) {
    margin-bottom: ${ rem(16) };
  }
`