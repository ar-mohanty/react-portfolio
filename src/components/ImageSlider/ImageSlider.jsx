import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import scrollImage1 from "../../assets/pintrest-carousel.webp";
import scrollImage2 from "../../assets/fifthconcept-carousel.webp";
import scrollImage3 from "../../assets/bootstrap-carousel.webp";
import scrollImage4 from "../../assets/sorting-carousel.webp";
import { useInView } from "react-intersection-observer";

const ImageSlider = () => {
  return <HorizontalScrollCarousel />;
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section
      ref={targetRef}
      className="relative h-[120vh] md:h-[120vh] lg:h-[180vh] overflow-hidden w-[calc(100vw)] md:w-screen lg:w-screen 2xl:w-screen flex justify-center items-center"
    >
      <div className="sticky top-0 flex h-[80vh] md:h-[100vh] lg:h-[80vh] items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // This ensures the animation only triggers once
  });
  return (
    <motion.div
      key={card.id}
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
      className="group relative h-[350px] w-[350px] lg:h-[450px] lg:w-[450px] lg:overflow-hidden bg-neutral-200 rounded-xl border border-gray-600"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110 rounded-xl"
      ></div>
    </motion.div>
  );
};

export default ImageSlider;

const cards = [
  {
    url: scrollImage1,
    id: 1,
  },
  {
    url: scrollImage2,
    id: 2,
  },
  {
    url: scrollImage3,
    id: 3,
  },
  {
    url: scrollImage4,
    id: 4,
  },
  {
    url: scrollImage1,
    id: 5,
  },
  {
    url: scrollImage2,
    id: 6,
  },
];
