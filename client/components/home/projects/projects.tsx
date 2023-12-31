import { Container } from "@/client/styled/collection/containers"
import { 
  CustomedLink, 
  HeadingTwo } from "@/client/styled/collection/text"
import { projectsData } from "./data"
import Project from "./project/project"
import { 
  Splide, 
  SplideTrack } from "@splidejs/react-splide"
import '@splidejs/react-splide/css/core';
import { 
  Header, 
  LinksContainer, 
  ProjectsWrapper } from "./styled"
import Link from "next/link"
import { BorderedButton } from "@/client/styled/collection/button"


const Projects = () =>{
  
  return (
    <Splide hasTrack={ false } options={{
      drag: "free",
      gap: "30px",
      arrows: true,
      pagination: false,
      perPage: 2,
      breakpoints: {
        768: {
          perPage: 1
        }
      }
    }}>
    <ProjectsWrapper>
      <Container>
        <Header>
          <HeadingTwo>Latest Projects</HeadingTwo>
          <div className="splide__arrows">
            <button className="splide__arrow splide__arrow--prev"><i className="fas fa-arrow-left"></i> Prev</button>
            <button className="splide__arrow splide__arrow--next">Next <i className="fas fa-arrow-right"></i></button>
          </div>
        </Header>
        <SplideTrack>
          { projectsData.map((project, index) => (
            <Project
              key={ "projects-"+index }
              data={ project } />
          )) }
        </SplideTrack>
        <LinksContainer>
          <CustomedLink>
            <Link href="#">
              View All Cases <i className="fas fa-arrow-right"></i>
            </Link>
          </CustomedLink>
          <BorderedButton 
            as="a"
            color="#121820">Get Started</BorderedButton>
        </LinksContainer>
      </Container>
    </ProjectsWrapper>
  </Splide>
  )
}


export default Projects