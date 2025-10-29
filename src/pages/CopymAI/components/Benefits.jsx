import Section from "./Section";
import coralayoutSVG from "../../../components/SVG/coralayout.svg";
const Benefits = () => {
  return (
    <section className="relative">
      {/* Main Content */}
      <div className="relative z-10  rounded-t-[2rem] sm:rounded-t-[3rem] lg:rounded-t-[4rem] rounded-b-[2rem] sm:rounded-b-[3rem] lg:rounded-b-[4rem] pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight anton-regular mb-6">
              <span className="text-green-500">CORA AI</span>
              <br />
              <span className="text-black">POWERS YOUR TRADING</span>
            </h2>
            <p className="text-black text-base sm:text-lg lg:text-xl max-w-3xl mx-auto px-4">
              Master the markets with AI-driven insights, predictive alerts, and real-time intelligence that give you the edge in crypto trading
            </p>
          </div>

          {/* SVG Layout */}
          <div className="flex justify-center items-center">
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