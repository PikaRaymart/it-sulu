import { Container } from "@/client/styled/collection/containers"
import { HeadingTwo } from "@/client/styled/collection/text"
import { projectsData } from "./data"
import Project from "./project/project"
import { 
  Splide, 
  SplideTrack } from "@splidejs/react-splide"
import '@splidejs/react-splide/css/core';
import { 
  Header, 
  ProjectsWrapper } from "./styled"


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
      </Container>
    </ProjectsWrapper>
    </Splide>
  )
}


export default Projects