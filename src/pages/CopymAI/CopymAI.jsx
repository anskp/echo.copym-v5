import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
// import CTA from "./components/CTA";
// import Footer from "./components/Footer";
import Hero from "./components/Hero";
//import Pricing from "./components/Pricing";
import ScrollToTop from "../../components/ScrollToTop";
import Services from "./components/Services";

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
          
          {/* Flowing Video and Lottie Animation */}
          <div className="w-full bg-black py-9 sm:py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 gap-0 sm:gap-4 items-center">
                {/* Left Side - Video */}
                <div className="flex justify-start -translate-x-2 sm:-translate-x-4 md:-translate-x-6 lg:-translate-x-10 items-center overflow-visible">
                  <div style={{ transform: 'scale(1.2) sm:scale(1.15) md:scale(1.1) lg:scale(1)', transformOrigin: 'left center' }}>
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full max-w-full sm:max-w-2xl lg:max-w-3xl object-contain"
                    >
                      <source src="/assets/videos/Flowing-green.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
                {/* Right Side - Lottie Animation */}
                <div className="flex justify-end -translate-x-2 sm:-translate-x-4 md:-translate-x-6 lg:-translate-x-14 items-center overflow-visible">
                  <div style={{ transform: 'scale(1.3) sm:scale(1.25) md:scale(1.2) lg:scale(1)', transformOrigin: 'right center' }}>
                    <Player
                      autoplay
                      loop
                      src={FlowingB}
                      style={{ height: '100%', width: '100%', maxWidth: '100%' }}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <Collaboration />
          <Services />
          
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
