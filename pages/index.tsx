import { Divider } from "@/client/components/collections/divider";
import { HomeHeroSection } from "@/client/components/home/hero";
import { HomePartnersSection } from "@/client/components/home/partners";
import { HomeProjectsSection } from "@/client/components/home/projects";
import { HomeServicesSection } from "@/client/components/home/services";
import { MainHomeWrapper } from "@/client/components/home/styled";
import { NextPage } from "next";


const Homepage: NextPage = () =>{

  return(
    <MainHomeWrapper>
      <HomeHeroSection />
      <HomePartnersSection />
      <Divider />
      <HomeServicesSection />
      <HomeProjectsSection />
    </MainHomeWrapper>
  )
}


export default Homepage