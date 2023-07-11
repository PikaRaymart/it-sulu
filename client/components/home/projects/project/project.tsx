import { SplideSlide } from "@splidejs/react-splide"
import { ProjectData } from "../data"
import { 
  Author,
  Image, 
  ProjectWrapper, 
  TextContainer,
  Title,
  TitleContainer} from "./styled"
import { DefaultText } from "@/client/styled/collection/text"


type ProjectProps = {
  data: ProjectData
}

const Project = ({ data }: ProjectProps) =>{

  return (
    <SplideSlide>
      <ProjectWrapper>
        <Image
          src={ data.image }
          alt="" />
        <TextContainer>
          <TitleContainer>
            <Title>{ data.title }</Title>
            <Author>by: <a href={ data.author.link }>{ data.author.name }</a></Author>
          </TitleContainer>
          <DefaultText>{ data.description }</DefaultText>
        </TextContainer>
      </ProjectWrapper>
    </SplideSlide>
  )
}


export default Project