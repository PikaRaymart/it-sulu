import { Container } from "@/client/styled/collection/containers"
import { 
  CustomedLink, 
  HeadingTwo, 
  SectionTag} from "@/client/styled/collection/text"
import { projectsData } from "./data"
import { Thinking } from "./thinking"
import { 
  Splide, 
  SplideTrack } from "@splidejs/react-splide"
import '@splidejs/react-splide/css/core';
import { 
  Header, 
  LinksContainer, 
  NewsWrapper } from "./styled"
import Link from "next/link"
import { BorderedButton } from "@/client/styled/collection/button"


const Projects = () =>{

  return (
    <Splide hasTrack={ false } options={{
      drag: "free",
      gap: "30px",
      arrows: true,
      pagination: false,
      perPage: 1,
      autoWidth: true,
      breakpoints: {
        768: {
          perPage: 1,
        }
      }
    }}>
    <NewsWrapper>
      <Container>
        <Header>
          <div>
            <SectionTag>Our Latest News</SectionTag>
            <HeadingTwo>Latest Thinking</HeadingTwo>
          </div>
          <div className="splide__arrows">
            <button className="splide__arrow splide__arrow--prev"><i className="fas fa-arrow-left"></i> Prev</button>
            <button className="splide__arrow splide__arrow--next">Next <i className="fas fa-arrow-right"></i></button>
          </div>
        </Header>
        <SplideTrack>
          { projectsData.map((project, index) => (
            <Thinking
              key={ "projects-"+index }
              data={ project } />
          )) }
        </SplideTrack>
        <LinksContainer>
          <CustomedLink>
            <Link href="#">
              View More Insights <i className="fas fa-arrow-right"></i>
            </Link>
          </CustomedLink>
        </LinksContainer>
      </Container>
    </NewsWrapper>
  </Splide>
  )
}


export default Projects