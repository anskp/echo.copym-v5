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

        {/* Video Section REMOVED */}
        <div className="flex justify-center items-center my-8 sm:my-12 lg:my-16">
          <div className="w-full max-w-5xl h-64 bg-gray-900 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Video Content Removed</span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
