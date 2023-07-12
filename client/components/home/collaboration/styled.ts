import { Container, SectionWrapper } from "@/client/styled/collection/containers";
import { HeadingTwo } from "@/client/styled/collection/text";
import { 
  breakpoint, 
  customBreakpoint, 
  fluid, 
  rem } from "@/client/styled/functions";
import { styled } from "styled-components";


export const CollabHeading = styled.h3`
  font-size: ${ fluid(19, 2.5, 22) };

  ${ breakpoint("desktop", `
    font-size: ${ rem(20) };
  `) }
`

export const CollabIcon = styled.div`
  height: ${ rem(25) };
  margin-right: ${ rem(15) };
  position: relative;
  width: ${ rem(25) };

  &::before{
    content: "";
    background-color: #f57c00;
    border-radius: 50%;
    height: 13px;
    inset: auto -${ rem(1) } -${ rem(1) } auto;
    position: absolute;
    width: 13px;
  }
`

export const CollabHeader = styled.div`
  display: flex;
  margin-bottom: ${ rem(30) };
`

export const CollabItem = styled.li`
  margin-bottom: ${ rem(60) };

  ${ breakpoint("tablet", `
    flex: 0 0 50%;

    &:nth-of-type(odd) {
      padding-right: ${ rem(15) };
    }
  `) }

  ${ customBreakpoint(1200, `
    flex: 0 0 25%;

    &:not(:last-of-type) {
      padding-right: ${ rem(15) };
    }
  `) }
`

export const CollaborationWrapper = styled(SectionWrapper)`
  background-color: rgba(18,24,32,.05);

  ${ breakpoint("tablet", `
    position: relative;

    &::before,
    &::after {
      content: "";
      background: url("/images/services-bg.svg") no-repeat center center/ 100% 100%;
      height: ${ rem(140) };
      
      position: absolute;
      width: ${ rem(220) };
    }

    &::before {
      inset: 0 25% auto auto;
    }

    &::after {
      inset: auto auto 0 25%;
      transform: rotate(180deg);
    }
  `) }

  ${ Container } {
    position: relative;
    z-index: 1;
  }

  ${ HeadingTwo } {
    margin-bottom: ${ rem(60) };

    ${ breakpoint("desktop", `
      margin-bottom: ${ rem(90) };
    `) }
  }
`