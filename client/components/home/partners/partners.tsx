import { Container } from "@/client/styled/collection/containers"
import { 
  Link,
  PartnersItem,
  PartnersList, 
  PartnersWrapper } from "./styled"
import Image from "next/image"
import partners1 from "@/public/images/partners-1.png"
import partners2 from "@/public/images/partners-2.png"
import partners3 from "@/public/images/partners-3.png"
import partners4 from "@/public/images/partners-4.png"
import partners5 from "@/public/images/partners-5.png"
import partners6 from "@/public/images/partners-6.png"


const Partners = () =>{

  return (
    <PartnersWrapper>
      <Container>
        <PartnersList>
          <PartnersItem>
            <Link href="#">
              <Image
                src={ partners1 }
                alt="Audio jungle"
                width={ 150 } />
            </Link>
          </PartnersItem>
          <PartnersItem>
            <Link href="#">
              <Image
                src={ partners2 }
                alt="Codecanyon"
                width={ 150 } />
            </Link>
          </PartnersItem>
          <PartnersItem>
            <Link href="#">
              <Image
                src={ partners3 }
                alt="Graphicriver"
                width={ 150 } />
            </Link>
          </PartnersItem>
          <PartnersItem>
            <Link href="#">
              <Image
                src={ partners4 }
                alt="Photodune"
                width={ 150 } />
            </Link>
          </PartnersItem>
          <PartnersItem>
            <Link href="#">
              <Image
                src={ partners5 }
                alt="Themeforest"
                width={ 150 } />
            </Link>
          </PartnersItem>
          <PartnersItem>
            <Link href="#">
              <Image
                src={ partners6 }
                alt="Video hive"
                width={ 150 } />
            </Link>
          </PartnersItem>
        </PartnersList>
      </Container>
    </PartnersWrapper>
  )
}


export default Partners