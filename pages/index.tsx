import { Divider } from "@/client/components/collections/divider";
import { HomeCollaborationSection } from "@/client/components/home/collaboration";
import { HomeHeroSection } from "@/client/components/home/hero";
import { HomeNewsSection } from "@/client/components/home/news";
import { HomePartnersSection } from "@/client/components/home/partners";
import { HomeProjectsSection } from "@/client/components/home/projects";
import { HomeServicesSection } from "@/client/components/home/services";
import { HomeSkillsSection } from "@/client/components/home/skill";
import { MainHomeWrapper } from "@/client/components/home/styled";
import { HomeTestimonialsSection } from "@/client/components/home/testimonials";
import { NextPage } from "next";


const Homepage: NextPage = () =>{

  return(
    <MainHomeWrapper>
      <HomeHeroSection />
      <HomePartnersSection />
      <Divider />
      <HomeServicesSection />
      <HomeProjectsSection />
      <HomeCollaborationSection />
      <HomeSkillsSection />
      <HomeNewsSection />
      <HomeTestimonialsSection />
    </MainHomeWrapper>
  )
}


export default Homepage