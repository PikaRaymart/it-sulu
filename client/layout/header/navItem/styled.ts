import { customBreakpoint, rem } from "@/client/styled/functions";
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

  ${ customBreakpoint(1200, `
    background-color: #FFFFFF;
    border-radius: ${ rem(8) };
    color: #121820;
    inset: ${ rem(64) } auto auto -${ rem(30) };
    max-height: revert;
    min-width: ${ rem(200) };
    opacity: 0;
    padding: ${ rem(30) };
    position: absolute;
    text-align: left;
    transform: translateY(10px) scale(.98);
    width: auto;

    li {

      &:first-of-type {
        margin-top: 0;
      }

      &:not(:last-of-type) {
        margin-bottom: ${ rem(15) };
        margin-right: 0;
      }
    }
  `) }
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

  ${ customBreakpoint(1200, `
    padding: 0 ${ rem(10) } 0 0;

    &[aria-expanded=true] {
      
      + ${ NavSublist } {
        max-height: auto;
        margin-top: 0;
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }
  `) }
`

export const NavLink = styled.a`
  padding: 0 ${ rem(16) };

  ${ customBreakpoint(1200, `
    padding: 0;
  `) }
`

export const NavItemWrapper = styled.li`
 
  &:not(:last-of-type) {
    margin-bottom: ${ rem(16) };
    
    ${ customBreakpoint(1200, `
      margin-bottom: 0;
    `) }
  }

  ${ customBreakpoint(1200, `
    position: relative;

    &:not(last-of-type) {
      margin-right: ${ rem(40) };
    }
  `) }
`