import { 
  Container, 
  RowTablet } from "@/client/styled/collection/containers"
import { 
  CustomedLink,
  DefaultText,
  HeadingTwo, 
  SectionTag } from "@/client/styled/collection/text"
import { 
  CollabHeader,
  CollabHeading,
  CollabIcon,
  CollabItem, 
  CollaborationWrapper } from "./styled"
import { LinksContainer } from "../projects/styled"
import Link from "next/link"
import { BorderedButton } from "@/client/styled/collection/button"


const Collaboration = () =>{

  return (
    <CollaborationWrapper>
      <Container>
        <SectionTag>Discover Our Company</SectionTag>
        <HeadingTwo>How We <span>Collaborate</span> With You</HeadingTwo>
        <RowTablet as="ul">
          <CollabItem>
            <CollabHeader>
              <CollabIcon>
                <img 
                  src="/icons/collab-1.svg" 
                  alt="" />
              </CollabIcon>
              <CollabHeading>Thinking Big</CollabHeading>
            </CollabHeader>
            <DefaultText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</DefaultText>
          </CollabItem>
          <CollabItem>
            <CollabHeader>
              <CollabIcon>
                <img 
                  src="/icons/collab-2.svg" 
                  alt="" />
              </CollabIcon>
              <CollabHeading>Starting Small</CollabHeading>
            </CollabHeader>
            <DefaultText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</DefaultText>
          </CollabItem>
          <CollabItem>
            <CollabHeader>
              <CollabIcon>
                <img 
                  src="/icons/collab-3.svg" 
                  alt="" />
              </CollabIcon>
              <CollabHeading>Creating Fast</CollabHeading>
            </CollabHeader>
            <DefaultText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</DefaultText>
          </CollabItem>
          <CollabItem>
            <CollabHeader>
              <CollabIcon>
                <img 
                  src="/icons/collab-4.svg" 
                  alt="" />
              </CollabIcon>
              <CollabHeading>Innovating Scale</CollabHeading>
            </CollabHeader>
            <DefaultText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</DefaultText>
          </CollabItem>
        </RowTablet>
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
    </CollaborationWrapper>
  )
}


export default Collaboration