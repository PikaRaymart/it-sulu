import { WhiteText } from "@/client/styled/collection/text";
import { 
  breakpoint,
  customBreakpoint,
  rem } from "@/client/styled/functions";
import { styled } from "styled-components";


export const Tag = styled.p`
  color: #FFFFFF;
  font-size: ${ rem(18) };
  font-family: 'Syne', sans-serif;
  font-weight: 500;
  grid-row: 1;

  span {
    color: #f57c00;
  }
`

export const HeroDescription = styled(WhiteText)`
  margin-top: ${ rem(60) };

  ${ breakpoint("tablet", `
    margin-top: 0;
    max-width: ${ rem(450) };
    padding-left: ${ rem(60) };
  `) }
`

export const MainHeading = styled.h1`
  color: #FFFFFF;
  font-size: ${ rem(38) };
  font-weight: 600;
  line-height: 1.4;
  text-transform: uppercase;

  .cursive {
    color: #f57c00;
    font-family: 'Satisfy', cursive;
    text-transform: none;
    white-space: nowrap;
  }

  ${ breakpoint("desktop", `
    font-size: ${ rem(60) };
  `) }
`

export const PopupsContainer = styled.div`
  display: none;

  ${ customBreakpoint(1200, `
    display: block;
    margin-bottom: ${ rem(128) };
    padding: 0 ${ rem(15) } 0 ${ rem(48) };
    width: ${ rem(390) };
  `) }
`

export const HeroBlock = styled.div`
  display: grid;
  gap: ${ rem(60) } 0;

  ${ breakpoint("tablet", `
    padding-top: ${ rem(60) };
  `) }

  ${ customBreakpoint(1200, `
    max-width: ${ rem(750) };
  `) }
`

export const HeroWrapper = styled.div`
  background: #3d404d url("/images/hero-1.jpg") no-repeat center/cover;
  background-blend-mode: multiply;
  min-height: calc(100vh - ${rem(100)});
  padding: ${ rem(60) } 0;

  ${ breakpoint("tablet", `
    padding: ${ rem(100) } 0 0;
  `) }

  ${ customBreakpoint(1200, `
    min-height: 100vh;
  `) }
`