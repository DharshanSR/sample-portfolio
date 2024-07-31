import FooterDown from "@/components/Footer/Footer down/footer_down";
import FooterUp from "@/components/Footer/Footer up/footer_up";
import Navbar from "@/components/Navbar/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Expertise from "@/pages/Service/service";
import About from "@/pages/About/About";
import Skills from "@/pages/Skills/skills"; // Ensure the component is imported correctly
import ContactMe from "@/pages/Contact Me/ContactMe";
import Portfolio from "@/pages/Portfolio/Portfolio";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      { /*<About /> */}
      {/* <Expertise /> */}
      <Skills />
      {/* < Portfolio /> */}
      {/* <ContactMe /> */}
      {/* <FooterUp /> */}
      {/* <FooterDown /> */}
    </div>
  );
}
