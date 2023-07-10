import { HomeHeroSection } from "@/client/components/home/hero";
import { MainHomeWrapper } from "@/client/components/home/styled";
import { NextPage } from "next";


const Homepage: NextPage = () =>{

  return(
    <MainHomeWrapper>
      <HomeHeroSection />
    </MainHomeWrapper>
  )
}


export default Homepage