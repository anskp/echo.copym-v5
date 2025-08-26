import Arrow from "../assets/svg/Arrow";
import ClipPath from "../assets/svg/ClipPath";
import { benefits } from "../constants";
import { GradientLight } from "./design/Benefits";
import Heading from "./Heading";
import Section from "./Section";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title={
            <>
              FEATURES{" "}
              <span className="inline-block relative font-semibold">
            
              </span>
            </>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {benefits.map((benefit) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                backgroundImage: `url(${benefit.backgroundUrl})`,
              }}
              key={benefit.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="text-xl sm:text-2xl font-black tracking-tight leading-tight mb-5 text-black uppercase anton-regular">{benefit.title}</h5>
                <p className="body-2 mb-6 text-black">{benefit.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={benefit.iconUrl}
                    width={48}
                    height={48}
                    alt={benefit.title}
                  />

                  <p className="ml-auto font-code text-xs font-bold text-black uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>

              {benefit.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-gray-50"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10 flex items-center justify-center">
                  {benefit.imageUrl && (
                    <img
                      src={benefit.imageUrl}
                      width={120}
                      height={120}
                      alt={benefit.title}
                      className="object-contain"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
