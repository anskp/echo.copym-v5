import Section from "./Section";
import coralayoutSVG from "../../../components/SVG/coralayout.svg";

const Benefits = () => {
  return (
    // Move section further down to avoid overlap
    <section className="relative mt-72 sm:mt-80 lg:mt-[28rem]">
      {/* Main Content */}
      <div className="relative z-10 rounded-t-[2rem] sm:rounded-t-[3rem] lg:rounded-t-[4rem] rounded-b-[2rem] sm:rounded-b-[3rem] lg:rounded-b-[4rem] pt-32 sm:pt-36 lg:pt-44 pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Title */}
          <div className="text-center mb-16 sm:mb-20 lg:mb-24 relative z-20 backdrop-blur-sm rounded-xl py-2">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight dm-sans mb-3 mt-[-180px] sm:mt-[-160px] lg:mt-[-140px]">
              <span style={{ color: "#15A36E" }}>CORA AI </span>
              <span className="text-black ml-3">POWERS YOUR TRADING</span>
            </h2>
            <p className="text-black text-base sm:text-lg lg:text-xl max-w-3xl mx-auto px-4 mt-2 dm-sans">
              Master the markets with AI-driven insights, predictive alerts, and
              real-time intelligence that give you the edge in crypto trading
            </p>
          </div>

          {/* SVG Layout */}
          <div className="flex justify-center items-center -mt-4 sm:-mt-6 lg:-mt-8">
            <img
              src={coralayoutSVG}
              alt="Cora AI Layout"
              className="w-full max-w-6xl h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
