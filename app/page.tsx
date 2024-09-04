import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import Expertise from "@/pages/Service/service";
import About from "@/pages/About/About";
import Skills from "@/pages/Skills/skills";
import ContactMe from "@/pages/Contact Me/ContactMe";
import Portfolio from "@/pages/Portfolio/Portfolio";
import Blog from "@/pages/Blogs/Blog";
import Entrance from "@/pages/Home/Home";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Navbar /> 
      {/* <main> */}
        {/* <Entrance /> */}
        <About />
        <Expertise />
        <Blog />
        <Skills />
        <Portfolio />
        {/* <ContactMe /> */}
      {/* </main> */}
      <Footer />
    </div>
  );
}
