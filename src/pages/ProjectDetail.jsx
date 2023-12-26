import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Glide from "@glidejs/glide";
import { Link, useParams } from "react-router-dom";
import { Client, Databases } from "appwrite";


const client = new Client();

const databases = new Databases(client);

client
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

const ProjectDetail = () => {
  const { id } = useParams();
  const [pid, setPid] = useState(id);
  const [fetchedProject, setFetchedProject] = useState([]);

  useEffect(() => {
    const fetchProjectDataAsync = async () => {
      try {
        const response = await databases.getDocument(
          import.meta.env.VITE_APPWRITE_PROJECT_DATABASE_ID,
          import.meta.env.VITE_APPWRITE_PROJECT_COLLECTION_ID,
          pid
        );
        console.log(response); // Success
        setFetchedProject(response);
      } catch (error) {
        console.error("Error fetching project:", error);
      }
    };

    fetchProjectDataAsync();
  }, [pid]);

  useEffect(() => {
    const slider = new Glide(".glide-01", {
      type: "slider",
      focusAt: "center",
      perView: 1,
      autoplay: 3000,
      animationDuration: 700,
      gap: 0,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
    }).mount();
    return () => {
      slider.destroy();
    };
  }, [fetchedProject]);

  return (
    <>
      <div className="about-wrapper lg:m-0 lg:p-0 w-screen lg:w-[calc(100vw-8rem)] overflow-hidden border-x border-b border-[#ffffff0a]">
        <motion.div
          className="eclipse-top w-full"
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}
        />
        <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full mb-8 md:w-1/2 md:mb-0">
              <div className="relative w-full glide-01">
                {/*    <!-- Slides --> */}
                <div className="overflow-hidden" data-glide-el="track">
                  <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
                    <li>
                      <img
                        src={fetchedProject.mobile_image}
                        className="w-auto h-[34rem] object-cover m-auto"
                      />
                    </li>
                    <li>
                      <img
                        src={fetchedProject.laptop_image}
                        className="w-auto h-[34rem] object-cover m-auto"
                      />
                    </li>
                    <li>
                      <img
                        src={fetchedProject.tab_image}
                        className="w-auto h-[34rem] object-cover m-auto"
                      />
                    </li>
                    <li>
                      <img
                        src={fetchedProject.desktop_image}
                        className="w-auto h-[34rem] object-cover m-auto"
                      />
                    </li>
                  </ul>
                </div>
                {/*    <!-- Controls --> */}
                <div
                  className="absolute left-0 flex items-center justify-between w-full h-0 px-4 top-1/2 "
                  data-glide-el="controls"
                >
                  <button
                    className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full border-slate-700 bg-white/20 text-slate-700 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
                    data-glide-dir="<"
                    aria-label="prev slide"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <title>prev slide</title>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                      />
                    </svg>
                  </button>
                  <button
                    className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full border-slate-700 bg-white/20 text-slate-700 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
                    data-glide-dir=">"
                    aria-label="next slide"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <title>next slide</title>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 ">
              <div className="lg:pl-20">
                <div className="mb-8 ">
                  <h2 className="max-w-xl mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                    {fetchedProject.title}
                  </h2>
                  <p className="inline-block mb-6 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      Category:
                    </span>
                    <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                      &nbsp;&nbsp;{fetchedProject.category}
                    </span>
                  </p>
                  <p className="max-w-md text-gray-700 dark:text-gray-400">
                    Tags: {fetchedProject.Description}
                  </p>
                </div>
                <div className="mb-8">
                  <Link
                    className="w-16 pb-1 mb-4 text-2xl font-bold border-b border-blue-300 dark:text-gray-400 dark:border-gray-600"
                    to={fetchedProject.projectlink}
                  >
                    Live Link 🔗
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
