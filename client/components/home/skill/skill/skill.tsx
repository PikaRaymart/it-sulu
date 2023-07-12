import { SkillData } from "../data"
import { 
  Heading, 
  Percentage, 
  SkillWrapper } from "./styled"


type SkillProps = {
  data: SkillData
}

const Skill = ({ data }: SkillProps) => {

  return (
    <SkillWrapper>
      <Heading>{ data.title }</Heading>
      <Percentage $percent={ data.percentage }>
        { data.percentage }%
        <span></span>
      </Percentage>
    </SkillWrapper>
  )
}


export default Skill