import { NavBar } from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import EditorSection from "./components/EditorSection";
import { BestSeller } from "./components/BestSeller";
import VitaClassic from "./components/VitaClassic";
import Universe from "./components/Universe";
import FeaturedPosts from "./components/FeaturedPosts";
import Footer from "./components/Footer";


export default function Home() {
  return (
   
    <div>
      <NavBar />
      <HeroSection />
      <EditorSection/>
      <BestSeller />
      <VitaClassic />
      <Universe />
      <FeaturedPosts />
      <Footer />
    </div>
  );
}
