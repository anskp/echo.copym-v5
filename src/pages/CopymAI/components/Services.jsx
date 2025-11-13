import Floatingbits from "../../../components/SVG/Floatingbits.svg";
import Heading from "./Heading";
import Section from "./Section";

const Services = () => {

  return (
    <Section id="how-to-use" className="bg-black text-white">
      <div className="container">
        <Heading
          title={
            <>
              <span className="text-white">Why Choose </span>
              <span className="text-emerald-400">CORA</span>
            </>
          }
          text="Revolutionizing Real-World Asset Investment with AI and Blockchain Technology"
        />

        {/* Video Section */}
        <div className="flex justify-center items-center my-8 sm:my-12 lg:my-16">
          <div className="w-full max-w-4xl">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto rounded-lg"
            >
              <source src="/assets/videos/Cora-aivideo.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Center logo with left/right info cards */}
        <div className="relative mt-12 md:mt-16">

          {/* Two-column layout: left card | right card */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mt-[200px] z-10">
            {/* Left card - bottom left */}
            <div className="order-2 md:order-1 flex md:justify-start md:items-end md:mt-[250px]">
              <div className="w-full md:w-[90%] bg-[rgba(12,20,18,0.85)] border border-[#13a56e]/40 rounded-2xl px-2 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                <h4 className="text-center uppercase font-extrabold tracking-[0.5px] mb-2 text-[15px] dm-sans text-white">
                  <span className="text-[#13a56e]">Cora </span>
                  <span className="text-white">Predictive Analysis</span>
                </h4>
                <p className="text-left text-[13px] md:text-[13px] text-gray-300 leading-[1.6] m-0 dm-sans">
                  Harness the power of Cora AI's advanced machine learning algorithms for real-time market predictions, portfolio optimization, and intelligent investment recommendations across multiple asset classes.
                </p>
              </div>
            </div>
            
            {/* Right card - top right */}
            <div className="order-1 md:order-2 flex md:justify-end md:items-start md:-mt-20">
              <div className="w-full md:w-[90%] bg-[rgba(12,20,18,0.85)] border border-[#13a56e]/40 rounded-2xl px-2 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                <h4 className="text-center uppercase font-extrabold tracking-[0.5px] mb-2 text-[15px] dm-sans text-white">
                  <span className="text-[#13a56e]">Cora AI </span>
                  <span className="text-white">Real Estate</span>
                </h4>
                <p className="text-left text-[12px] md:text-[13px] text-gray-300 leading-[1.6] m-0 dm-sans">
                  Transform real estate investment with Cora AI's revolutionary predictive analytics. Precise valuations, rental yield forecasts, and trend predictions powered by cutting-edge ML and blockchain technology.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative floating bits SVG - fixed position outside cards container */}
        <div className="relative flex justify-center -mt-[500px] pointer-events-none z-0">
          <img src={Floatingbits} alt="Floating decorative bits" className="w-[710px] max-w-full opacity-60" />
        </div>
      </div>
    </Section>
  );
};

export default Services;
