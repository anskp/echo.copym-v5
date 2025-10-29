import { motion } from "framer-motion";



const Section = ({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  children,
}) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1.5,
      }}
      viewport={{
        once: true,
      }}
      id={id}
      className={`relative ${
        customPaddings ||
        `py-6 lg:py-10 xl:py-16 ${crosses && "lg:py-20 xl:py-24"}`
      } ${className || ""}`}
    >
      {children}




    </motion.section>
  );
};

export default Section;
