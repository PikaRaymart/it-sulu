import { 
  breakpoint, 
  customBreakpoint, 
  rem } from "@/client/styled/functions";
import { styled } from "styled-components";


export const Link = styled.a`
  display: flex;
  filter: grayscale(100%);
  justify-content: center;
  margin: 0 auto ${ rem(30) } auto;
  position: relative;
  width: ${ rem(150) };

  &::before {
    content: "";
    border-radius: 50%;
    background-color: rgb(245, 124, 0);
    height: 30px;
    inset: 0 auto auto calc(50% - ${ rem(15) });
    position: absolute;
    top: 0px;
    transform: scale(0);
    transition: all 0.4s cubic-bezier(0, 0, 0.3642, 1) 0s;
    width: 30px;
  }

  img {
    position: relative;
  }

  ${ breakpoint("desktop", `
 
    &:hover {
      filter: grayscale(0);

      &::before {
        transform: scale(1);
      }
    }
  `) }
`

export const PartnersItem = styled.li`
  flex: 0 0 33.33%;

  ${ customBreakpoint(1200, `
    flex: 0 0 ${ rem(150) };
  `) }
`

export const PartnersList = styled.ul`
  align-items: center;
  display: flex;
  flex-wrap: wrap;

  ${ customBreakpoint(1200, `
    justify-content: space-between;
  `) }
`

export const PartnersWrapper = styled.div`
  padding: ${ rem(60) } 0 ${ rem(30) };

  ${ breakpoint("desktop", `
    padding: ${ rem(90) } 0 ${ rem(60) };
  `) }
`