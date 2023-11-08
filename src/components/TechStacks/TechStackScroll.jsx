import { animate, motion } from "framer-motion";
import React from "react";

const fadeAnimationVariant = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const TechStackScroll = () => {
  return (
    <>
      <div className="techskills-wrapper flex flex-col gap-3 w-full px-5 py-16 bg-[#09070D] border-y border-[#ffffff0a]">
        <motion.h1
          className="font-satoshi pb-5 lg:pb-5 font-extrabold text-2xl md:text-2xl lg:text-3xl [text-wrap:balance] bg-clip-text text-transparent text-center bg-gradient-to-r from-slate-200/60 to-50% to-slate-200"
          variants={fadeAnimationVariant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          What I Know
        </motion.h1>
        <div className="flex flex-wrap gap-x-3 gap-y-3 lg:px-[15rem] items-center justify-center">
          {skills.map((item, index) => {
            return <SkillBadge skill={item.skill} index={index} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

const SkillBadge = ({ skill, index }) => {
  return (
    <>
      <motion.span
        variants={fadeAnimationVariant}
        initial="initial"
        custom={index}
        whileInView="animate"
        viewport={{ once: true }}
        className="text-white inline-flex items-center px-3 py-1 text-sm font-normal gradient-border"
      >
        {skill}
      </motion.span>
    </>
  );
};

export default TechStackScroll;

const skills = [
  {
    id: 1,
    skill: "Html5",
  },
  {
    id: 2,
    skill: "CSS3",
  },
  {
    id: 3,
    skill: "JavaScript",
  },
  {
    id: 4,
    skill: "React",
  },
  {
    id: 5,
    skill: "Node Js",
  },
  {
    id: 6,
    skill: "Express Js",
  },
  {
    id: 7,
    skill: "MongoDB",
  },
  {
    id: 8,
    skill: "MySQL",
  },
  {
    id: 9,
    skill: "Figma",
  },
  {
    id: 10,
    skill: "Tailwind Css",
  },
  {
    id: 11,
    skill: "Bootstrap",
  },
  {
    id: 12,
    skill: "Sass",
  },
  {
    id: 13,
    skill: "Wordpress",
  },
  {
    id: 14,
    skill: "Adobe Illustrator",
  },
];
