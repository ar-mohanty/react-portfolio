import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/images/profile.jpg";

const fadeAnimationVariant = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5 * index,
    },
  }),
};

const About = () => {
  return (
    <>
      <div className="about-wrapper lg:m-0 lg:p-0 w-screen lg:w-[calc(100vw-8rem)] overflow-hidden border-x border-b border-[#ffffff0a]">
        <motion.div
          className="eclipse-top w-full"
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}
        />
        <div className="wrapper flex flex-col justify-center">
          <div className="flex flex-col justify-center items-center">
            <motion.h1
              className="font-satoshi pb-10 lg:pb-5 font-extrabold text-4xl [text-wrap:balance] bg-clip-text text-transparent text-center bg-gradient-to-r from-slate-200/60 to-50% to-slate-200"
              variants={fadeAnimationVariant}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              The Developer
            </motion.h1>
            <motion.span
              className="text-stroke text-7xl font-bold text-center tracking-wider absolute leading-[3rem]"
              variants={fadeAnimationVariant}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              Behind the <br />
              screen
            </motion.span>
          </div>
          <div className="about-section flex flex-col lg:flex-row items-stretch justify-center pt-36 px-12 lg:px-20">
            <div className="profile-img w-full lg:w-1/2 flex justify-center items-start pb-12 lg:pb-0">
              <motion.img
                src={profilePic}
                alt="profile-pic"
                className="w-64 h-64 object-cover object-top rounded-lg"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 3 }}
              />
            </div>
            <div className="about-details w-full lg:w-1/2 flex flex-col justify-center items-center">
              <motion.p
                className="text-lg leading-normal text-zinc-500"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 3 }}
              >
                I'm Anurag Mohanty, a dedicated Full Stack Developer committed
                to delivering top-tier development solutions that drive
                businesses forward. When you partner with me, you can anticipate
                a personalized one-on-one approach that shines a spotlight on
                your project.
                <br />
                <br />
                My approach is straightforward and designed to simplify your
                life. Rather than wrestling with complex pricing structures, I
                offer a flat monthly rate that covers all your development
                needs. This approach allows you to concentrate on growing your
                business without the hassle of fluctuating costs.
                <br />
                <br />
              </motion.p>
              <motion.q
                className="text-xl leading-normal text-white font-medium border-l-4 border-zinc-200 p-3"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 3, delay: 1 }}
              >
                I'm unwavering in my dedication to your success. I won't rest
                until I not only meet but exceed your expectations. Your success
                is my ultimate objective.
              </motion.q>
            </div>
          </div>
          <motion.div
            className="eclipse-bottom w-full top-44"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3 }}
          />
        </div>
      </div>
    </>
  );
};

export default About;
