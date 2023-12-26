import React, { useEffect, useState } from "react";
import fetchData from "../../config/appwriteConfig";
import { motion } from "framer-motion";
import { Triangle } from "react-loader-spinner";
import { Link } from "react-router-dom";

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

const Projects = () => {
  const [loading, setLoading] = useState(false);
  const [fetchedProject, setFetchedProject] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchDataAsync = async () => {
      try {
        const response = await fetchData();
        console.log("consoled projects", response); // Log the response
        setFetchedProject(response); // Assuming you have a state variable to store the response
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    setTimeout(() => {
      fetchDataAsync();
    }, 3000);
  }, [setFetchedProject]);
  return (
    <>
      <div className="work-wrapper lg:m-0 lg:p-0 w-screen lg:w-[calc(100vw-8rem)] overflow-hidden border-x border-b border-[#ffffff0a] ">
        <div className="wrapper  pb-68">
          <motion.div
            className="eclipse-top w-full"
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3 }}
          />
          <motion.h1
            className="pb-10 lg:pb-5 font-extrabold text-4xl md:text-4xl lg:text-6xl [text-wrap:balance] bg-clip-text text-transparent text-center bg-gradient-to-r from-slate-200/60 to-50% to-slate-200"
            variants={fadeAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Recents Projects
          </motion.h1>
          <motion.span
            className="font-satoshi text-xs lg:text-sm pb-10 lg:pb-20 font-semibold text-slate-500 uppercase tracking-widest"
            variants={fadeAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            checkout some latest work
          </motion.span>
          <div className="projects-cards p-5 lg:p-0 flex flex-wrap gap-16 lg:gap-5 items-center justify-center">
            {loading ? (
              <div className="flex flex-col items-center justify-center">
                <Triangle
                  height="60"
                  width="60"
                  color="purple"
                  ariaLabel="triangle-loading"
                  visible={true}
                />
                <span className="text-zinc-500 text-md">Fetching Projects</span>
              </div>
            ) : (
              fetchedProject.map((item, index) => {
                return (
                  <ProjectCard
                    key={index}
                    index={index}
                    img={item.image_url}
                    title={item.title}
                    desc={item.Description}
                    pagelink={item.title}
                  />
                );
              })
            )}
          </div>
          <motion.div
            className="eclipse-bottom w-full top-48"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3 }}
          />
        </div>
      </div>
    </>
  );
};

const ProjectCard = ({ index, img, title, desc, pagelink }) => {
  return (
    <>
      <Link
        to={pagelink}
        className="w-full lg:w-[22%] rounded-xl overflow-hidden hover:shadow-custom bg-[#ffffff] border border-zinc-700 hover:shadow-fuchsia-800 hover:cursor-pointer min-h-[19rem] duration-700"
      >
        <motion.div
          className="rounded-xl overflow-hidden hover:shadow-custom bg-[#ffffff] border border-zinc-700 hover:shadow-fuchsia-800 hover:cursor-pointe duration-700"
          variants={fadeAnimationVariant}
          initial="initial"
          custom={index}
          whileInView="animate"
          viewport={{ once: true }}
        >
          <img
            className="w-full m-0 h-48 object-cover"
            src={img}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-satoshi font-bold text-md text-zinc-800 mb-1">
              {title}
            </div>
            <p className="max-w-xs text-xs text-zinc-600 line-clamp-2">
              {desc}
            </p>
          </div>
        </motion.div>
      </Link>
    </>
  );
};
export default Projects;
