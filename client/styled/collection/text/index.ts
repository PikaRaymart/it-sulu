import { styled } from "styled-components";
import { rem } from "../../functions";


export const DefaultText = styled.p`
  color: rgba(18,24,32,.4);
  font-size: ${ rem(15) };
  line-height: 1.7;
`

export const WhiteText = styled(DefaultText)`
  color: rgba(255,255,255,.5);
`