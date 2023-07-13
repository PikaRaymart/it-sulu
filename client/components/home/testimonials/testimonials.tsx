import { Container } from "@/client/styled/collection/containers"
import { 
  HeadingTwo, 
  SectionTag } from "@/client/styled/collection/text"
import { TestimonialsWrapper} from "./styled"
import { 
  Splide, 
  SplideTrack } from "@splidejs/react-splide"
import { Header } from "../news/styled"
import { testimonialsData } from "./data"
import Testimonial from "./testimonial/testimonial"


const Collaboration = () =>{

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
      <TestimonialsWrapper>
        <Container>
          <Header>
            <div>
              <SectionTag>Testimonial</SectionTag>
              <HeadingTwo>What Our <span>Clients</span> Say</HeadingTwo>
            </div>
            <div className="splide__arrows">
              <button className="splide__arrow splide__arrow--prev"><i className="fas fa-arrow-left"></i> Prev</button>
              <button className="splide__arrow splide__arrow--next">Next <i className="fas fa-arrow-right"></i></button>
            </div>
          </Header>
          <SplideTrack>
            { testimonialsData.map((testimonial, index) => (
              <Testimonial
                key={ "testimonial-" + index }
                data={ testimonial } />
            )) }
          </SplideTrack>
        </Container>
      </TestimonialsWrapper>
    </Splide>
  )
}


export default Collaboration