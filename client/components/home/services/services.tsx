import { 
  Container, 
  SectionWrapper } from "@/client/styled/collection/containers"
import { DefaultText, HeadingTwo } from "@/client/styled/collection/text"
import { 
  ServiceBlock,
  ServicesHeading, 
  ServiceList, 
  ServiceListItem, 
  ServicesWrapper, 
  Icon,
  ServiceHeading} from "./styled"
import { DividerWrapper } from "../../collections/divider/styled"


const Services = () =>{

  return (
    <SectionWrapper>
      <Container>
        <HeadingTwo>How We Can <span>Help You</span></HeadingTwo>
        <ServicesWrapper>
          <ServiceBlock>
            <ServicesHeading>IT Services</ServicesHeading>
            <ServiceList>
              <div>
                <DividerWrapper />
                <ServiceListItem>
                  <Icon>
                    <img
                      src="/icons/service-1.svg"
                      alt="" />
                  </Icon>
                  <div>
                    <ServiceHeading><span>01</span>Dedicated Team</ServiceHeading>
                    <DefaultText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</DefaultText>
                  </div>
                </ServiceListItem>
              </div>
              <div>
                <DividerWrapper />
                <ServiceListItem>
                  <Icon>
                    <img
                      src="/icons/service-2.svg"
                      alt="" />
                  </Icon>
                  <div>
                    <ServiceHeading><span>02</span>QA and Testing</ServiceHeading>
                    <DefaultText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</DefaultText>
                  </div>
                </ServiceListItem>
              </div>
              <div>
                <DividerWrapper />
                <ServiceListItem>
                  <Icon>
                    <img
                      src="/icons/service-3.svg"
                      alt="" />
                  </Icon>
                  <div>
                    <ServiceHeading><span>03</span>Saas</ServiceHeading>
                    <DefaultText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</DefaultText>
                  </div>
                </ServiceListItem>
              </div>
            </ServiceList>
          </ServiceBlock>
          <ServiceBlock>
            <ServicesHeading>IT Solutions</ServicesHeading>
            <ServiceList>
              <div>
                <DividerWrapper />
                <ServiceListItem>
                  <Icon>
                    <img
                      src="/icons/solution-1.svg"
                      alt="" />
                  </Icon>
                  <div>
                    <ServiceHeading><span>01</span>Blockchain</ServiceHeading>
                    <DefaultText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</DefaultText>
                  </div>
                </ServiceListItem>
              </div>
              <div>
                <DividerWrapper />
                <ServiceListItem>
                  <Icon>
                    <img
                      src="/icons/solution-2.svg"
                      alt="" />
                  </Icon>
                  <div>
                    <ServiceHeading><span>02</span>Artificial Intelligence</ServiceHeading>
                    <DefaultText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</DefaultText>
                  </div>
                </ServiceListItem>
              </div>
              <div>
                <DividerWrapper />
                <ServiceListItem>
                  <Icon>
                    <img
                      src="/icons/solution-3.svg"
                      alt="" />
                  </Icon>
                  <div>
                    <ServiceHeading><span>03</span>Internet of Things</ServiceHeading>
                    <DefaultText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</DefaultText>
                  </div>
                </ServiceListItem>
              </div>
            </ServiceList>
          </ServiceBlock>
        </ServicesWrapper>
        <DividerWrapper />
      </Container>
    </SectionWrapper>
  )
}


export default Services