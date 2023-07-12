import { styled } from "styled-components";
import { 
  fluid, 
  rem } from "../../functions";


export const SectionTag = styled.p`
  color: #121820;
  margin-bottom: ${ rem(30) };
  padding-left: ${ rem(15) };
  position: relative;

  &::before {
    content: "";
    border-radius: 50%;
    background-color: #f57c00;
    height: 7px;
    inset: ${ rem(9) } auto auto 0;
    position: absolute;
    width: 7px;
  }
`

export const CustomedLink = styled.div`
  margin-bottom: ${ rem(30) };

  a {
    align-items: center;
    color: #121820;
    display: inline-flex;
    font-family: Syne,sans-serif;
    font-weight: 600;

    i {
      align-items: center;
      background-color: #f57c00;
      border-radius: 50%;
      display: flex;
      color: #fff;
      font-size: 12px;
      height: 35px;
      justify-content: center;
      margin-left: 15px;
      transition: .2s cubic-bezier(0, 0, .3642, 1);
      width: 35px;
    }
  }
`

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