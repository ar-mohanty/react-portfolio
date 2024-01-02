import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import TimeLineComponent from "../components/Timeline/TimeLine";
import TechStackScroll from "../components/TechStacks/TechStackScroll";
import Testimonials from "../components/Testimonials/Testimonials";

const items = [
  {
    id: 1,
    content: "<Apps/>",
  },
  {
    id: 2,
    content: "<Components/>",
  },
  {
    id: 3,
    content: "<Elements/>",
  },
];

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((state) => {
        if (state >= items.length - 1) return 0;
        return state + 1;
      });
    }, 2000);
    return () => clearInterval(id);
  }, []);
  return (
    <>
      <div className="home-wrapper lg:m-0 lg:p-0 w-screen lg:w-[calc(100vw-8rem)] overflow-hidden border-x border-b border-[#ffffff0a]">
        {/* hero section starts */}
        <div className="hero-section">
          <motion.div
            className="eclipse-top w-full"
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3 }}
          />
          <div className="mx-auto max-w-6xl flex flex-col gap-y-10 justify-center items-center">
            <motion.div
              className="px-5 lg:px-2 font-extrabold text-3xl md:text-4xl lg:text-6xl [text-wrap:balance] bg-clip-text text-transparent text-center bg-gradient-to-r from-slate-200/60 to-50% to-slate-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              I build web{" "}
              <span className="text-fuchsia-500 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] lg:h-[calc(theme(fontSize.6xl)*theme(lineHeight.tight))] overflow-hidden">
                <ul className="block animate-text-slide-3 text-center lg:text-left leading-snug [&_li]:block">
                  <li>{"<Apps/>"}</li>
                  <li>{"<Elements/>"}</li>
                  <li>{"<Component/>"}</li>
                  <li aria-hidden="true">{"<Apps/>"}</li>
                </ul>
              </span>
              <br />
              for tech companies
            </motion.div>
            <motion.p
              className="px-10 lg:px-36 font-satoshi text-center text-md text-[#929199] font-normal lg:text-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              Hello 👋, I'm Anurag Mohanty, a Web App Developer specializing in
              creating and optimizing web apps, components, and elements for IT
              industries. My mission is to empower tech companies with
              innovative digital solutions that drive success and elevate user
              experiences.
            </motion.p>
            <motion.button
              id="resume-button"
              className="gradient-background py-3 px-8 text-white font-medium font-satoshi rounded-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0, scale: 1.05 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <a
                href="https://drive.google.com/file/d/1ogiU8ilwiFfi3qx4O7vJt_-pqQORUeJq/view?usp=drive_link"
                download
                target="_blank"
              >
                Download CV
              </a>
            </motion.button>
          </div>
        </div>
        {/* hero section ends */}
        <ImageSlider />
        <TechStackScroll />
        <div className="timeline-wrapper w-[calc(100vw - 3.5rem)] pb-[20rem] overflow-hidden border-b border-[#ffffff0a]">
          <TimeLineComponent />
        </div>
        <Testimonials />
      </div>
    </>
  );
};

const centerStyle = {
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
};

export default Home;
