import Tagline from "./Tagline";

const Heading = ({ className, title, text, tag }) => {
  return (
    <div
      className={`${
        className || ""
      } max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}
    >
      {tag && <Tagline className="mb-4 md:justify-center">{tag}</Tagline>}
      {title && <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6 text-white uppercase dm-sans">{title}</h2>}
      {text && <p className="body-2 mt-4 text-gray-300 dm-sans">{text}</p>}
    </div>
  );
};

export default Heading;
