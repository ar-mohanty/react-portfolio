import { motion } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const fadeAnimationVariant = {
  initial: {
    opacity: 0,
    scale: 0.5,
    y: 100,
  },
  animate: (key) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  }),
};

const handleGlareEffect = (e) => {
  for (const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }
};

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // This ensures the animation only triggers once
  });
  return (
    <>
      <div className="wrapper py-10 overflow-hidden">
        <div className="py-28 text-center">
          <motion.h1
            className="pb-10 lg:pb-5 font-extrabold text-4xl md:text-4xl lg:text-6xl [text-wrap:balance] bg-clip-text text-transparent text-center bg-gradient-to-r from-slate-200/60 to-50% to-slate-200"
            variants={fadeAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            What successful business
          </motion.h1>
          <motion.span
            className="font-satoshi text-xs lg:text-sm pb-10 lg:pb-20 font-semibold text-slate-500 uppercase tracking-widest"
            variants={fadeAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            owners are saying about me
          </motion.span>
        </div>
        <div id="cards" onMouseMove={(e) => handleGlareEffect(e)}>
          {testimonials.map((item, index) => {
            return (
              <>
                <motion.div
                  className="card max-h-fit"
                  variants={fadeAnimationVariant}
                  initial="initial"
                  whileInView="animate"
                  custom={item.id}
                  viewport={{ once: true }}
                >
                  <Card
                    key={index}
                    rating={item.rating}
                    comment={item.comment}
                    company={item.company}
                    logo={item.logo}
                    name={item.name}
                    link={item.link}
                  />
                </motion.div>
              </>
            );
          })}
        </div>
        <motion.div
          className="eclipse-bottom w-full top-56"
          ref={ref}
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 3 }}
          viewport={{ once: true }}
        />
      </div>
    </>
  );
};

const Card = ({rating, comment, company, logo, name, link }) => {
  return (
    <>
      <div className="flex flex-col justify-start items-start p-5 md:p-10 lg:p-8 gap-6">
        <ReactStars
          count={rating}
          size={30}
          activeColor="#ffd700"
          color="#F2C14B"
        />
        <p className="font-satoshi font-normal text-md md:text-lg lg:text-lg text-[#acadb3]">
          {comment}
        </p>
        <img
          src={logo}
          alt={company}
          width={46}
          height={46}
          className="card-image rounded-3xl"
        />
        <p className="flex flex-col gap-1 font-satoshi font-bold text-md text-[#dddee5] z-50">
          {company}
          <Link
            to={link}
            className={
              "font-satoshi text-xs text-[#706f75] font-normal" +
              (link !== "#" ? " underline" : " no-underline")
            }
          >
            {name}
          </Link>
        </p>
      </div>
    </>
  );
};

export default Testimonials;

const testimonials = [
  {
    id: 1,
    rating: 5,
    name: "CEO of Leaf Bazar Technologies",
    comment:
      "Very good and fast work team Egniol, good communication, very fast website developing, quality work, affordable rates, speed reply. I am so happy with team Egniol especially Diwakar Kumar ,Anurag mohanty, Hemakshivala, Avadh, Nishant joshi",
    company: "Leaf Bazar Tachnologies",
    logo: "https://ui-avatars.com/api/?background=random&name=Leaf+Bazar",
    link: "https://www.google.com/maps/contrib/100538093735726889085/reviews/@23.0710657,72.517823,17z/data=!4m3!8m2!3m1!1e1?hl=en-US&entry=ttu",
  },
  {
    id: 2,
    rating: 5,
    name: "Mr. Harsh Jain CEO of Sajjan Creations",
    comment:
      "My warm thanks to Egniol Team to make my dream work live on portal. My website sajjancreationss.in is all set to meet my audience. Special thanks to Mr. Anurag Mohanty to develop my site, Mr. Vivek Shah for smooth co-ordination and end-to-end support ,to rectify my queries, understanding my requirements. Good work!",
    company: "Sajjan Creations",
    logo: "https://ui-avatars.com/api/?background=random&name=Sajjan+Creations",
    link: "https://www.google.com/maps/contrib/108499700993053885969/reviews/@23.0710657,72.517823,17z/data=!4m3!8m2!3m1!1e1?hl=en-US&entry=ttu",
  },
  {
    id: 3,
    rating: 5,
    name: "Mr. Ranjan Sen SEO of Nix Mould Pvt. Ltd.",
    comment:
      "I’m having excellent experience with EGNIOL Services. I must say Egniol staff is highly professional & cooperative, especially Anurag Mohanty he is very proactive communicator & he made it very easy for me to make my website live. I really thank all team of Egniol. Nix Mould Craft Pvt Ltd",
    company: "Nix Mould Pvt Ltd",
    logo: "https://ui-avatars.com/api/?background=random&name=Nix+Mould",
    link: "https://www.google.com/maps/reviews/@23.0710657,72.517823,17z/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sChdDSUhNMG9nS0VJQ0FnSURPdkpPbGp3RRAB!2m1!1s0x0:0xb7a256ca08ef6145?hl=en-US&entry=ttu",
  },
  {
    id: 4,
    rating: 5,
    name: "CTO of Classic Moonneting",
    comment:
      "Thanks Egniol team for developing my company's website. I m happy with the work delivered by the digital team. Special thanks to Mr Anurag Mohanty who took great efforts to make it look attractive, Vivek Shah, Avadh Hirpara and Ravi Patel, thanks for mutual support in the process.Happy with the service.",
    company: "Classic Moonneting",
    logo: "https://ui-avatars.com/api/?background=random&name=Classic+Moonneting",
    link: "#",
  },
];
