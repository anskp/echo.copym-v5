import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
// import CTA from "./components/CTA";
// import Footer from "./components/Footer";
import Hero from "./components/Hero";
//import Pricing from "./components/Pricing";
import ScrollToTop from "../../components/ScrollToTop";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
// import GreenCurves from "./components/GreenCurves";
import { Player } from '@lottiefiles/react-lottie-player';
import FlowingB from "./assets/FlowingB.json";

const CopymAI = () => {
  return (
    <>
      <div className="min-h-screen w-full relative bg-black">
        
        {/* Your Content/Components */}
        <div className="copym-ai-page pt-[1.75rem] lg:pt-[5.25rem] overflow-hidden relative z-10">
          <Hero />
          
          <Benefits />
          
          {/* Flowing Lottie Animation */}
          <div className="w-full bg-black py-8 sm:py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-end items-center">
                <Player
                  autoplay
                  loop
                  src={FlowingB}
                  style={{ height: '100%', width: '100%', maxWidth: '800px' }}
                />
              </div>
            </div>
          </div>
          
          <Collaboration />
          <Services />
          <Testimonials />
          {/* <Pricing /> */}
        </div>
      </div>
      <ButtonGradient />
      <ScrollToTop />
      {/* <GreenCurves /> */}
    </>
  );
};

export default CopymAI;
