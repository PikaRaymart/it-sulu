import { CustomedLink, DefaultText } from "@/client/styled/collection/text";
import { breakpoint, rem } from "@/client/styled/functions";
import { 
  css, 
  styled } from "styled-components";


type PercentageProps = {
  $percent: number
}

export const Percentage = styled(DefaultText)<PercentageProps>`
  display: flex;
  font-size: ${ rem(13) };
  justify-content: flex-end;
  position: relative;

  span {
    ${ ({ $percent }) => css`
      background-image: linear-gradient(to right, #f57c00 ${$percent}%, rgba(18,24,32,.2) ${ $percent }%, rgba(18,24,32,.2));
    ` }
    height: ${ rem(2) };
    inset: 50% auto auto 0;
    position: absolute;
    width: 80%;

    &::after {
      content: "";
      border-radius: 50%;
      border: 2px solid #fff;
      background-color: #f57c00;
      height: 14px;
      inset: -${ rem(6) } auto auto ${ ({ $percent }) => $percent }%;
      position: absolute;
      width: 14px;
    }
  }
`

export const Heading = styled.h3`
  font-size: ${ rem(16) };
  margin-bottom: ${ rem(30) };
`

export const SkillWrapper = styled.div`
  list-style: none;
  margin-bottom: ${ rem(60) };

  ${ CustomedLink } {
    display: flex;
    justify-content: center;
    margin-bottom: 0;
  }

  ${ breakpoint("tablet", `
    flex: 0 0 50%;

    &:nth-of-type(odd) {
      padding-right: ${ rem(15) };
    }

    &:nth-of-type(even) {
      padding-left: ${ rem(15) };
    }
  `) }

  ${ breakpoint("desktop", `
    flex: 0 0 25%;

    padding: 0 ${ rem(15) } 0 0;
  `) }
`