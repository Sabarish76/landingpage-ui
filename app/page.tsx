import Image from "next/image";
import Navbar from "./components/Navbar/page";
import Main from "./components/Home/page";
import Tech from "./components/Tech/page";
import About from "./components/About/page";
import Service from "./components/Service/page";
import Tesimonials from "./components/Testimonials/page";
import Footer from "./components/Footer/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Tech />
      <About />
      <Service />
      <Tesimonials />
      <Footer />
    </>
  );
}
