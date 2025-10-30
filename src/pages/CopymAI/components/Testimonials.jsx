import Section from "./Section";
import Heading from "./Heading";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Chief Investment Officer",
    company: "Global Asset Management",
    content: "Cora AI has transformed our daily market analysis. The intelligent insights and predictive alerts have increased our trading accuracy by 23% while saving us hours of research time.",
    avatar: "/path-to-avatar-1.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Blockchain Director",
    company: "TechVentures Capital",
    content: "Cora AI's smart price alerts and portfolio insights are game-changing. The AI-powered recommendations help us make data-driven decisions across multiple blockchain networks seamlessly.",
    avatar: "/path-to-avatar-2.jpg"
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    role: "Head of DeFi Strategy",
    company: "CryptoBridge Fund",
    content: "Cora AI's real-time market intelligence and crypto analytics give us a significant competitive advantage. The daily market recaps and trend predictions are incredibly accurate.",
    avatar: "/path-to-avatar-3.jpg"
  }
];

const Testimonials = () => {
  return (
    <Section id="testimonials">
      <div className="container">
        <Heading
          title={
            <>
              <span className="text-gray-900">Trusted by </span>
              <span className="text-emerald-600">Industry Leaders</span>
            </>
          }
          text="See what leading financial institutions say about Cora AI"
        />
        
        <div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-stretch gap-5 px-5 py-10 box-border">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="w-full md:w-[350px] rounded-[10px] bg-white shadow-[0px_4px_8px_rgba(0,0,0,0.1)] overflow-hidden relative p-[30px] box-border flex flex-col justify-start"
            >
              {/* Quote Mark + Name Row */}
              <div className="flex items-start gap-2 mb-[5px]">
                <p className="text-[48px] font-bold text-[#15a36e] leading-none m-0 flex-shrink-0">
                  "
                </p>
                <div className="flex flex-col items-start">
                  <p className="text-[24px] font-bold text-black m-0 leading-[1.2] text-left">
                    {testimonial.name}
                  </p>
                  <p className="text-[14px] text-black mt-[2px] text-left">
                    {testimonial.role}
                  </p>
                  <p className="text-[14px] text-[#15a36e] mb-5 text-left">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Quote Text */}
              <p className="text-[16px] text-black leading-[1.5] m-0 text-left flex-1">
                "{testimonial.content}"
              </p>

              {/* Gradient Bottom Right */}
              <div 
                className="absolute bottom-0 right-0 w-[100px] h-[100px] pointer-events-none"
                style={{
                  background: 'linear-gradient(to top left, rgba(229,255,245,0.6), transparent)',
                  borderRadius: '0 0 5px 0'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
