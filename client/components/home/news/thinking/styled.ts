import { 
  breakpoint,
  customBreakpoint,
  fluid, 
  rem } from "@/client/styled/functions";
import { css, styled } from "styled-components";


export const Author = styled.p`
  font-family: 'Syne', sans-serif;

  a {
    color: #f57c00;
    font-weight: 600;
  }
`

export const Title = styled.h3`
  font-size: ${ fluid(21, 2.5, 24) };
  margin-bottom: ${ rem(20) };

  ${ breakpoint("desktop", `
    font-size: ${ rem(22) };
  `) }
`

export const TitleContainer = styled.div`
  margin-bottom: ${ rem(20) };

  ${ customBreakpoint(1200, `
    flex: 0 0 50%;
    margin-bottom: 0;
    padding-right: ${ rem(30) };
  `) }
`

export const TextContainer = styled.div`

  ${ customBreakpoint(1200, `
    align-items: flex-start;
    display: flex;
  `) }
`

export const Image = styled.img`
  border-radius: ${ rem(12) };
  filter: grayscale(100%);
  height: 65%;
  margin-bottom: ${ rem(30) };
  object-fit: cover;
  transition: .4s cubic-bezier(0, 0, .3642, 1);
  width: 100%;

  ${ breakpoint("tablet", `
    max-height: ${ fluid(260, 26, 333) };
  `) }
`

type ProjectWrapperProps = {
  $isVertical?: boolean,
  $isReversed?: boolean
}

export const ProjectWrapper = styled.div<ProjectWrapperProps>`

  ${ breakpoint("tablet", `
    max-width: ${ rem(555) };
  `) }

  ${ ({ $isVertical, $isReversed }) => $isVertical && css`

    ${ customBreakpoint(1200, `
        ${ $isReversed ? `
          display: flex;
          flex-direction: column-reverse;
        `: "" }
        max-width: ${ rem(315) };

        ${ TextContainer } {
          display: block;
        }

        ${ Author } {
          display: none;
        }
    `) }
  ` }
`