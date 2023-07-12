import { 
  Container, 
  SectionWrapper } from "@/client/styled/collection/containers"
import { 
  Header, 
  SkillsList } from "./styled"
import { 
  CustomedLink,
  DefaultText,
  HeadingTwo, 
  SectionTag } from "@/client/styled/collection/text"
import { Skill } from "./skill"
import { skillsData } from "./data"
import Link from "next/link"
import { SkillWrapper } from "./skill/styled"
import { DividerWrapper } from "../../collections/divider/styled"


const Skills = () =>{

  return (
    <Container>
      <SectionWrapper>
        <Header>
          <div>
            <SectionTag>Our Skill</SectionTag>
            <HeadingTwo>Business <span>Success</span> With Technology</HeadingTwo>
          </div>
          <DefaultText>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using content here.</DefaultText>
        </Header>
        <SkillsList>
          { skillsData.map(skill => (
            <Skill
              key={ skill.title }
              data={ skill }
               />
          )) }
          <SkillWrapper>
            <CustomedLink>
              <Link href="#">
                More <i className="fas fa-arrow-right"></i>
              </Link>
            </CustomedLink>
          </SkillWrapper>
        </SkillsList>
      </SectionWrapper>
      <DividerWrapper />
    </Container>
  )
}


export default Skills