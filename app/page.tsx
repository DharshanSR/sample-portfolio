import FooterDown from "@/components/Footer/Footer down/footer_down";
import FooterUp from "@/components/Footer/Footer up/footer_up";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import Expertise from "@/pages/Service/service";
import About from "@/pages/About/About";
import Skills from "@/pages/Skills/skills";
import ContactMe from "@/pages/Contact Me/ContactMe";
import Portfolio from "@/pages/Portfolio/Portfolio";
import Blog from "@/pages/Blogs/Blog";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> 
      <About /> */}
      <Expertise />
      < Blog />
      {/* <Skills /> */}
      <Portfolio />
      {/* <ContactMe />
      <FooterUp />
      <FooterDown /> */}
    </div>
  );
}
