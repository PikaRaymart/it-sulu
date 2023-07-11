import { SectionWrapper } from "@/client/styled/collection/containers";
import { HeadingTwo } from "@/client/styled/collection/text";
import { breakpoint, fluid, rem } from "@/client/styled/functions";
import { styled } from "styled-components";


export const Header = styled.div`
  margin-bottom: ${ rem(60) };

  .splide__arrow {
    color: #121820;
    font-family: 'Syne', sans-serif;
    font-weight: 600;

    &[disabled] {
      cursor: not-allowed;
      opacity: .5;
    }

    &--prev {
      margin-right: ${ rem(30) };
      
      i {
        margin-right: ${ rem(15) };
      }
    }

    &--next {

      i {
        margin-left: ${ rem(15) };
      }
    }

    ${ breakpoint("desktop", `
      transition: .4s cubic-bezier(0, 0, .3642, 1);

      &:not([disabled]):hover {
        color: #f57c00;
      }
    `) }
  }

  ${ breakpoint("tablet", `
    align-items: center;
    display: flex;
    justify-content: space-between;
    position: relative;
    width: 100%;

    &::after {
      content: "";
      background: url("/images/services-bg.svg") no-repeat center center/ 100% 100%;
      height: ${ rem(140) };
      inset: -${ rem(60) } auto auto 50%;
      position: absolute;
      transform: translateX(-50%);
      width: ${ rem(220) };
    }

    ${ HeadingTwo } {
      margin-bottom: 0;
    }
  `) }

  ${ breakpoint("desktop", `

    &::after {
      top: -${ rem(120) };
    }
  `) }
`

export const ProjectsWrapper = styled(SectionWrapper)`

  .splide__track {
    margin-bottom: ${ fluid(60, 10, 90) };
    overflow: visible;
  }
`