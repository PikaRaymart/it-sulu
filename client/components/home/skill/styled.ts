import { RowDesktop, RowTablet } from "@/client/styled/collection/containers";
import { fluid } from "@/client/styled/functions";
import { styled } from "styled-components";


export const SkillsList = styled(RowTablet)`
  align-items: center
`

export const Header = styled(RowDesktop)`
  align-items: center;
  margin-bottom: ${ fluid(60, 9, 90) };

  > * {
    flex: 0 0 50%;
  }
`