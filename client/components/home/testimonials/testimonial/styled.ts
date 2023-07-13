import { customBreakpoint, rem } from "@/client/styled/functions";
import styled from "styled-components";


export const Position = styled.p`
  font-size: ${ rem(13) };
  opacity: .7;
`

export const Author = styled.h3`
  font-size: ${ rem(16) };
  margin-bottom: ${ rem(8) };
`

export const Avatar = styled.img`
  border-radius: 50%;
  height: ${ rem(55) };
  margin-right: ${ rem(20) };
  width: ${ rem(55) };
`

export const AuthorContainer = styled.div`
  color: #121820;
  display: flex;
  margin-top: ${ rem(30) };
`

export const Rating = styled.div`
  align-items: center;
  color: #f57c00;
  display: flex;
  margin-bottom: ${ rem(30) };

  img {
    margin-right: ${ rem(20) };
  }
`

export const TestimonialWrapper = styled.div`
  max-width: ${ rem(680) };

  ${ customBreakpoint(1200, `
    max-width: ${ rem(360) };
  `) }
`