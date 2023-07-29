import Aboutskills from "@/components/Aboutskills";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mywork from "@/components/Mywork";
import ProjectBar from "@/components/ProjectBar";
import Footer from "@/components/footer";


export default function Home() {
  return (     
        <div className=" ">
          <Header/>
          <Hero/>
          <Aboutskills/>
          <Mywork/>
          <ProjectBar/>
          <Footer/>
        </div>
  )
}
