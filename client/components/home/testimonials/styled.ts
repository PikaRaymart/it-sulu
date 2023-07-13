import { styled } from "styled-components";
import { CollaborationWrapper } from "../collaboration/styled";
import { 
  breakpoint, 
  rem } from "@/client/styled/functions";


export const TestimonialsWrapper = styled(CollaborationWrapper)`
  padding: ${ rem(60) } 0;

  &::before,
  &::after {
    display: none;
  }

  ${ breakpoint("desktop", `
    padding: ${ rem(120) } 0;
  `) }

  .splide {

    &__slide {
      max-width: 100%;
    }

    &__track {
      overflow: visible;
    }
  }
`