import { css, styled } from "styled-components";
import { 
  breakpoint,
  rem } from "../../functions";


export const SectionWrapper = styled.div`
  padding: ${ rem(60) } 0 ${ rem(30) };

  ${ breakpoint("desktop", `
    padding: ${ rem(120) } 0 ${ rem(90) };
  `) }
`

type RowTabletProps = {
  justifyContent?: string
}

export const RowTablet = styled.div<RowTabletProps>`

  ${ breakpoint("tablet", `
    align-items: flex-start;
    display: flex;
    flex-wrap: wrap;
  `) }
`

export const Container = styled.div`
  padding: 0 ${ rem(30) };

  ${ breakpoint("tablet", `
    max-width: ${ rem(1200) };
    margin: 0 auto;
  `) }
`

type RowDesktopProps = {
  $alignItems?: "center" | "flex-end"
}

export const RowDesktop = styled.div<RowDesktopProps>`

  ${ ({ $alignItems }) => css`
    
    ${ breakpoint("desktop", `
      align-items: ${ $alignItems?? "flex-start" };
      display: flex;
    `) }
  ` }

`