import { DefaultText } from "@/client/styled/collection/text"
import { TestimonialData } from "../data"
import { 
  Author,
  AuthorContainer,
  Avatar,
  Position,
  Rating, 
  TestimonialWrapper } from "./styled"
import { SplideSlide } from "@splidejs/react-splide"


type TestimonialProps = {
  data: TestimonialData
}

const Testimonial = ({ data }: TestimonialProps) =>{

  return (
   <SplideSlide>
     <TestimonialWrapper>
      <Rating>
        <img 
          src="/icons/quote.svg" 
          alt="" />
        { Array(data.rating)
          .fill("")
          .map((_, index) => <i key={ "rating"+index } className="fas fa-star"></i>) }
      </Rating>
      <DefaultText>{ data.content }</DefaultText>
      <AuthorContainer>
        <Avatar
          src={ data.avatar }
          alt={ data.author } />
        <div>
          <Author>{ data.author }</Author>
          <Position>{ data.position }</Position>
        </div>
      </AuthorContainer>
    </TestimonialWrapper>
   </SplideSlide>
  )
}


export default Testimonial