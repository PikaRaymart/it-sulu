import { customBreakpoint, rem } from "@/client/styled/functions";
import { styled } from "styled-components";


export const Navlist = styled.ul`
  line-height: 1.7;
  text-align: center;
`

export const Navbar = styled.nav`
  background-color: #FFFFFF;
  box-shadow: 0 0 40px 0 rgba(18,24,32,.1);
  color: #121820;
  font-size: ${ rem(15) };
  inset: 100% auto auto 0;
  opacity: 0;
  padding: ${ rem(30) } 0;
  transform: translateY(10px);
  transition: .4s cubic-bezier(0, 0, .3642, 1);
  position: absolute;
  visibility: hidden;
  width: 100%;
`

export const NavbarTrigger = styled.button`
  display: grid;
  height: ${ rem(24) };
  place-content: center;
  transition: .4s cubic-bezier(0, 0, .3642, 1);
  width: ${ rem(24) };

  span {
    background-color: #121820;
    height: ${ rem(2) };
    position: relative;
    transition: inherit;
    width: inherit;

    &::before,
    &::after {
      content: "";
      background-color: inherit;
      height: ${ rem(2) };
      left: 0;
      position: absolute;
      transition: inherit;
      width: 100%;
    }

    &::before {
      top: -${ rem(8) };
    }

    &::after {
      top: ${ rem(8) };
    }
  }

  &[aria-expanded=true] {

    span {
      transform: rotate(45deg);

      &::before {
        transform: translate(0,8px) rotate(-90deg);
      }

      &::after {
        transform: translate(0,-8px) rotate(-90deg);
      }
    }

    + ${ Navbar } {
      opacity: 1;
      transform: translateY(0);
      visibility: visible;
    }
  }

  ${ customBreakpoint(1200, `
    display: none;
  `) }
`

export const HeaderWrapper = styled.header`
  align-items: center;
  background-color: #FFFFFF;
  border-bottom: 1px solid rgba(18,24,32,.1);
  display: flex;
  height: ${ rem(100) };
  justify-content: space-between;
  padding: 0 ${ rem(30) };
  position: relative;

  ${ customBreakpoint(1200, `
    background-color: transparent;
    border-bottom: 0;
    max-width: ${ rem(1200) };
    margin: 0 auto;
  `) }
`