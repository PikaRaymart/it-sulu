import { rem } from "@/client/styled/functions";
import { styled } from "styled-components";


export const DividerWrapper = styled.div`
  background-color: rgba(18,24,32,.1);
  height: ${ rem(2) };
  position: relative;
  width: 100%;

  &::before,
  &::after {
    content: "";
    background-color: #f57c00;
    border-right: 5px solid #fff;
    height: 100%;
    inset: 0 auto auto 0;
    position: absolute;
    width: 25px;
  }

  &::after {
    inset: 0 0 auto auto;
    border-right: none;
    border-left: 5px solid #fff;
  }
`