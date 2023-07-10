import { HomeHeroSection } from "@/client/components/home/hero";
import { HomePartnersSection } from "@/client/components/home/partners";
import { MainHomeWrapper } from "@/client/components/home/styled";
import { NextPage } from "next";


const Homepage: NextPage = () =>{

  return(
    <MainHomeWrapper>
      <HomeHeroSection />
      <HomePartnersSection />
    </MainHomeWrapper>
  )
}


export default Homepage