import { styled } from "styled-components";
import { 
  fluid, 
  rem } from "../../functions";


export const HeadingTwo = styled.h2`
  font-size: ${ fluid(29, 4.2, 42) };
  margin-bottom: ${ rem(30) };

  span {
    color: #f57c00;
  }
`

export const DefaultText = styled.p`
  color: rgba(18,24,32,.4);
  font-size: ${ rem(15) };
  line-height: 1.7;
`

export const WhiteText = styled(DefaultText)`
  color: rgba(255,255,255,.5);
`