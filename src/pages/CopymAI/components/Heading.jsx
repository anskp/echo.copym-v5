import Tagline from "./Tagline";

const Heading = ({ className, title, text, tag }) => {
  return (
    <div
      className={`${
        className || ""
      } max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}
    >
      {tag && <Tagline className="mb-4 md:justify-center">{tag}</Tagline>}
      {title && <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6 text-black uppercase dm-sans whitespace-nowrap">{title}</h2>}
      {text && <p className="body-2 mt-4 text-black dm-sans">{text}</p>}
    </div>
  );
};

export default Heading;
