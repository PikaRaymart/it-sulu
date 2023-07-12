import { SplideSlide } from "@splidejs/react-splide"
import { ThinkingData } from "../data"
import { 
  Author,
  Image, 
  ProjectWrapper, 
  TextContainer,
  Title,
  TitleContainer} from "./styled"
import { DefaultText } from "@/client/styled/collection/text"


type ProjectProps = {
  data: ThinkingData
}

const Thinking = ({ data }: ProjectProps) =>{

  return (
    <SplideSlide>
      <ProjectWrapper
        $isVertical={ data.isVertical }
        $isReversed={ data.isReversed }>
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


export default Thinking