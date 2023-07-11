import { 
  breakpoint,
  fluid, 
  rem } from "@/client/styled/functions";
import { styled } from "styled-components";
import { DividerWrapper } from "../../collections/divider/styled";


export const ServiceHeading = styled.h4`
  font-size: ${ fluid(19, 3, 22) };
  margin-bottom: ${ rem(30) };

  span {
    color: #f57c00;
    margin-right: ${ rem(15) };
  }

  ${ breakpoint("desktop", `
    font-size: ${ rem(18) };
  `) }
`

export const Icon = styled.div`
  max-width: max-content;
  position: relative;

  &::before {
    content: "";
    background-color: #f57c00;
    border-radius: 50%;
    height: 20px;
    inset: auto -${ rem(2) } -${ rem(6) } auto;
    position: absolute;
    width: 20px;
  }

  img {
    margin-bottom: ${ rem(30) };
    position: relative;
  }

  ${ breakpoint("tablet", `
    min-width: ${ rem(45) };
    margin: 0 ${ rem(30) };

    img {
      margin-bottom: 0;
    }
  `) }
`

export const ServiceListItem = styled.div`
  padding: ${ rem(30) } 0;

  ${ breakpoint("tablet", `
    align-items: flex-start;
    display: flex;
  `) }

  ${ breakpoint("desktop", `
    flex: 0 0 40%;
  `) }
`

export const ServiceList = styled.div`

  ${ breakpoint("desktop", `
  
    &:first-of-type {
      padding-right: ${ rem(30) };
    }
  `) }
`

export const ServicesHeading = styled.h3`
  font-size: ${ fluid(21, 2.4, 24) };
  margin-bottom: ${ rem(60) };
  padding-top: ${ rem(30) };

  ${ breakpoint("desktop", `
    font-size: ${ rem(22) };
  `) }
`

export const ServiceBlock = styled.div`

  ${ DividerWrapper } {

    &::after {
      display: none;
    }
  }
`

export const ServicesWrapper = styled.div`

  ${ breakpoint("desktop", `
    display: flex;
    position: relative;

    &::after {
      content: "";
      background: url("/images/services-bg.svg") no-repeat center center/ 100% 100%;
      height: ${ rem(140) };
      inset: -${ rem(208) } ${ rem(160) } auto auto;
      position: absolute;
      width: ${ rem(220) };
    }
  `) }
`