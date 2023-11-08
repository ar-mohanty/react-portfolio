import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TimelineObserver from "react-timeline-animation";
import planningSvg from "../../assets/planning1.svg";
import frontendSvg from "../../assets/frontend.svg";
import backendSvg from "../../assets/backend.svg";

const Timeline = ({ setObserver, callback }) => {
  const [ref1, inView1] = useInView({
    triggerOnce: true, // This ensures the animation only triggers once
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true, // This ensures the animation only triggers once
  });
  const [ref3, inView3] = useInView({
    triggerOnce: true, // This ensures the animation only triggers once
  });
  const [ref4, inView4] = useInView({
    triggerOnce: true, // This ensures the animation only triggers once
  });
  const [ref5, inView5] = useInView({
    triggerOnce: true, // This ensures the animation only triggers once
  });

  const timeline1 = useRef(null);
  const timeline2 = useRef(null);
  const timeline3 = useRef(null);
  const timeline4 = useRef(null);
  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);
  const circle4 = useRef(null);

  useEffect(() => {
    setObserver(timeline1.current);
    setObserver(timeline2.current);
    setObserver(timeline3.current);
    setObserver(timeline4.current);
    setObserver(circle1.current);
    setObserver(circle2.current);
    setObserver(circle3.current);
    setObserver(circle4.current);
  }, []);

  return (
    <div className="wrapper pt-36 w-[calc(100vw - 3.5rem)]">
      <span className="font-satoshi text-xs lg:text-sm pb-3 font-semibold text-slate-500 uppercase tracking-widest">
        How I handle project
      </span>
      <h1 className="pb-5 lg:pb-5 font-extrabold text-4xl md:text-4xl lg:text-6xl [text-wrap:balance] bg-clip-text text-transparent text-center bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">
        Work Approach
      </h1>
      <div id="timeline1" ref={timeline1} className="timeline" />
      <div className="circleWrapper">
        <motion.img
          src={planningSvg}
          ref={ref1}
          initial={{ opacity: 0, x: -100 }}
          animate={inView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="gradient-box-shadow absolute -top-[50%] right-16 lg:right-20 min-w-[8rem] md:min-w-[15rem] lg:min-w-[22rem]"
        />
        <div
          id="circle1"
          ref={circle1}
          className="circle w-10 h-10 lg:w-14 lg:h-14"
        >
          1
        </div>
        <div className="flex flex-col gap-5  text-slate-200 absolute -top-[200%] md:-top-[50%] lg:top-[0%] left-14 lg:left-20 font-satoshi text-md md:text-2xl lg:text-2xl min-w-[32vw]">
          <span
            className="text-left"
            ref={ref1}
            initial={{ opacity: 0, x: 100 }}
            animate={inView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Project Planning and Setup
          </span>
          <motion.span
            className="p-0 lg:p-1 font-satoshi text-left text-sm md:text-lg text-[#929199] font-normal lg:text-md"
            ref={ref1}
            initial={{ opacity: 0, x: 100 }}
            animate={inView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Project begins with requirements, scope, tech selection (e.g.,
            React, backend), environment setup, Git, and structure.
          </motion.span>
        </div>
      </div>
      <div id="timeline2" ref={timeline2} className="timeline" />
      <div className="circleWrapper">
        <div className="flex flex-col gap-5  text-slate-200 absolute -top-[200%] md:-top-[50%] lg:top-[0%] right-14 lg:right-20 font-satoshi text-md md:text-2xl lg:text-2xl min-w-[32vw]">
          <span
            className="text-left"
            ref={ref2}
            initial={{ opacity: 0, x: -100 }}
            animate={inView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Frontend Development
          </span>
          <motion.span
            className="px-0 lg:px-1 font-satoshi text-left text-sm md:text-lg text-[#929199] font-normal lg:text-md"
            ref={ref2}
            initial={{ opacity: 0, x: -100 }}
            animate={inView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Development steps: React components, routing, state, APIs, CSS,
            testing, accessibility, performance.
          </motion.span>
        </div>
        <div
          id="circle2"
          ref={circle2}
          className="circle w-10 h-10 lg:w-14 lg:h-14"
        >
          2
        </div>
        <motion.img
          src={frontendSvg}
          ref={ref2}
          initial={{ opacity: 0, x: 100 }}
          animate={inView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="gradient-box-shadow absolute -top-[50%] lg:-top-[100%] left-14 lg:left-20 min-w-[8rem] md:min-w-[15rem] lg:min-w-[22rem]"
        />
      </div>
      <div id="timeline3" ref={timeline3} className="timeline" />
      <div className="circleWrapper">
        <motion.img
          src={backendSvg}
          ref={ref3}
          initial={{ opacity: 0, x: -100 }}
          animate={inView3 ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="gradient-box-shadow absolute -top-[50%] right-14 lg:right-20 min-w-[8rem] md:min-w-[15rem] lg:min-w-[22rem]"
        />
        <div
          id="circle3"
          ref={circle3}
          className="circle w-10 h-10 lg:w-14 lg:h-14"
        >
          3
        </div>
        <div className="flex flex-col gap-5  text-slate-200 absolute -top-[200%] md:-top-[50%] lg:top-[0%] left-16 lg:left-20 font-satoshi text-md md:text-2xl lg:text-2xl min-w-[30vw]">
          <span
            className="text-left"
            ref={ref3}
            initial={{ opacity: 0, x: 100 }}
            animate={inView3 ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Backend Development
          </span>
          <motion.span
            className="px-0 lg:px-1 font-satoshi text-left text-sm md:text-lg text-[#929199] font-normal lg:text-md"
            ref={ref3}
            initial={{ opacity: 0, x: 100 }}
            animate={inView3 ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Backend tasks: APIs, database, auth, data validation, security,
            error handling, frontend integration.
          </motion.span>
        </div>
      </div>
      <div id="timeline4" ref={timeline4} className="timeline" />
      <div className="circleWrapper">
        <div
          id="circle4"
          ref={circle4}
          className="circle w-10 h-10 lg:w-14 lg:h-14"
        >
          4
        </div>
        <div className="flex flex-col gap-5  text-slate-200 absolute pt-[25rem] -translate-x-[45%] -translate-y-[50%] lg:-translate-x-[48%] font-satoshi text-md md:text-2xl lg:text-2xl">
          <span
            className="text-center"
            ref={ref4}
            initial={{ opacity: 0, x: 100 }}
            animate={inView4 ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            ♾️ Simplifying revisions:
          </span>
          <motion.span
            className="px-0 lg:px-1 font-satoshi text-center text-sm md:text-lg text-[#929199] font-normal lg:text-lg min-w-[32vw]"
            ref={ref4}
            initial={{ opacity: 0, y: 100 }}
            animate={inView4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            I offer unlimited revisions to ensure that the final design meets
            your expectations.
          </motion.span>
          <motion.div
            className="eclipse-bottom w-screen top-36"
            ref={ref5}
            initial={{ opacity: 0, y: 100 }}
            animate={inView5 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 3 }}
            viewport={{ once: true }}
          />
        </div>
      </div>
    </div>
  );
};

export default function TimeLineComponent() {
  const onCallback = () => {
    console.log("awesome");
  };

  return (
    <div className="timeline-wrapper">
      <TimelineObserver
        initialColor="#e5e5e5"
        fillColor="purple"
        hasReverse="true"
        handleObserve={(setObserver) => (
          <Timeline
            callback={onCallback}
            className="timeline"
            setObserver={setObserver}
          />
        )}
      />
    </div>
  );
}
