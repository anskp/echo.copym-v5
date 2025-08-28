import Section from "./Section";
import Heading from "./Heading";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Chief Investment Officer",
    company: "Global Asset Management",
    content: "COPYM-AI has revolutionized our RWA tokenization process. The AI-driven insights have increased our portfolio performance by 23%.",
    avatar: "/path-to-avatar-1.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Blockchain Director",
    company: "TechVentures Capital",
    content: "The seamless integration with multiple blockchains and AI compliance features make COPYM-AI our go-to platform for tokenization.",
    avatar: "/path-to-avatar-2.jpg"
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    role: "Head of DeFi Strategy",
    company: "CryptoBridge Fund",
    content: "COPYM-AI's cross-chain intelligence and real-time analytics have given us a competitive edge in the DeFi space.",
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
          text="See what leading financial institutions say about COPYM-AI"
        />
        
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-color-1 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 flex-shrink-0">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-lg font-black tracking-tight leading-tight text-black uppercase anton-regular break-words">{testimonial.name}</h4>
                  <p className="text-sm text-black break-words">{testimonial.role}</p>
                  <p className="text-xs text-color-1 break-words">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-black italic text-sm leading-relaxed break-words">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
