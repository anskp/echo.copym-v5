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

const CopymAI = () => {
  return (
    <>
      <div className="min-h-screen w-full relative bg-black">
        {/* Arctic Lights Background with Top Glow */}
        <div
          className="absolute top-0 right-0 w-full h-full z-0"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 100% 0%, rgba(34, 197, 94, 0.25), transparent 70%), #000000",
          }}
        />
        
        {/* Your Content/Components */}
        <div className="copym-ai-page pt-[1.75rem] lg:pt-[5.25rem] overflow-hidden relative z-10">
          <Hero />
          
          <Benefits />
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
