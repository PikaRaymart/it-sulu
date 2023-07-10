import Link from "next/link"
import { 
  HeroDescription,
  HeroWrapper, 
  HeroBlock, 
  MainHeading,
  Tag,
  PopupsContainer} from "./styled"
import { BorderedButton } from "@/client/styled/collection/button"
import { 
  Container, 
  RowDesktop, 
  RowTablet } from "@/client/styled/collection/containers"
import { popupsData } from "./data"
import { HomePopup } from "./popup"


const Hero = () => {

  return (
    <HeroWrapper>
      <Container>
        <RowDesktop $alignItems="flex-end">
          <HeroBlock>
            <MainHeading>
              <span>
                We provide services
                <br />
                and solutions
              </span>
              <span className="cursive"> To Enterprise</span>
            </MainHeading>
            <Tag>
              The Next
              <span> Gen</span>
            </Tag>
            <RowTablet>
              <Link
                legacyBehavior
                passHref
                href="/">
                <BorderedButton 
                  as="a"
                  color="white">Let's Talk</BorderedButton>
              </Link>
              <HeroDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</HeroDescription>
            </RowTablet>
          </HeroBlock>
          <PopupsContainer>
            { popupsData.map(popup => (
              <HomePopup
                key={ popup.label } 
                data={ popup } />
            )) }
          </PopupsContainer>
        </RowDesktop>
      </Container>
    </HeroWrapper>
  )
}


export default Hero