import { styled } from "styled-components";
import { rem } from "../../functions";


const Button = styled.button`
  border-radius: ${ rem(40) };
  display: grid;
  font-family: Sora,sans-serif;
  font-weight: 500;
  height: ${ rem(70) };
  padding: 0 ${ rem(60) };
  place-content: center;
  transition: .2s cubic-bezier(0, 0, .3642, 1);
`

type BorderedButtonProps = {
  color: "white" | "orange"
}

export const BorderedButton = styled(Button)<BorderedButtonProps>`
  color: ${ ({ color }) => color };
  border: 2px solid #f57c00;
  max-width: max-content;
`