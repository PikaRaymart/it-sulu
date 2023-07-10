import { rem } from "@/client/styled/functions";
import { styled } from "styled-components";


export const Title = styled.p`
  border-bottom: ${ rem(2) } solid rgba(18, 24, 32, 0.1);
  color: rgb(18, 24, 32);
  font-size: ${ rem(18) };
  font-weight: 600;
  margin-bottom: ${ rem(15) };
  padding-bottom: ${ rem(15) };
  position: relative;

  &::before {
    content: "";
    background-color: rgb(245, 124, 0);
    border-right: 5px solid rgb(255, 255, 255);
    height: ${ rem(2) };
    inset: auto auto -${ rem(2) } 0;
    position: absolute;
    width: 25px;
  }
`

export const Dropdown = styled.div`
  background-color: #FFFFFF;
  border-radius: ${ rem(8) };
  box-shadow: rgba(18, 24, 32, 0.1) 0px 0px 40px 0px;
  inset: auto auto ${ rem(75) } -${ rem(105) };
  padding: ${ rem(30) };
  opacity: 0;
  position: absolute;
  transition: all 0.4s cubic-bezier(0, 0, 0.3642, 1) 0s;
  transform: translateY(-10px) scale(0.98);
  visibility: hidden;
  width: 260px;

  &::before {
    content: "";
    width: 30px;
    height: 30px;
    background-color: rgb(255, 255, 255);
    position: absolute;
    bottom: -8px;
    left: calc(50% - 15px);
    transform: rotate(45deg);
    border-radius: 0px 0px 5px;
  }
`

export const Trigger = styled.button`
  align-items: center;
  color: #FFFFFF;
  display: flex;
  font-weight: 500;
  opacity: .8;
  position: relative;

  span {
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 50%;
    display: grid;
    color: #FFFFFF;
    font-size: ${ rem(32) };
    font-weight: 200;
    height: ${ rem(50) };
    margin-right: ${ rem(15) };
    place-content: center;
    width: ${ rem(50) };
  }

  &[aria-expanded=true] {

    + ${ Dropdown } {
      opacity: 1;
      transform: translateY(0px) scale(1);
      visibility: visible;
    }
  }
`

export const PopupWrapper = styled.div`
  position: relative;

  &:not(:last-of-type) {
    margin-bottom: ${ rem(48) };
  }

  &:nth-of-type(2) {
    margin-left: ${ rem(160) };
  }

  &:last-of-type {
    margin-left: ${ rem(48) };
  }
`