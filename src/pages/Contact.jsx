import React from "react";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import { motion } from "framer-motion";
import logo from "../assets/images/arlogo.svg";

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

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Contact = () => {
  window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
      form.reset();
    }
  };
  return (
    <>
      <div className="about-wrapper lg:m-0 lg:p-0 w-screen lg:w-[calc(100vw-8rem)] overflow-hidden border-x border-b border-[#ffffff0a]">
        <motion.div
          className="eclipse-top w-full"
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}
        />
        <div className="isolate bg-transparent px-6 pb-36 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center items-center">
              <img src={logo} alt="armohanty-logo" className="w-36"/>
            </div>
            <h2 className="font-satoshi text-4xl font-bold tracking-tight text-zinc-300 lg:text-5xl">
              Let's Connect
            </h2>
            <p className="font-satoshi mt-2 text-lg leading-8 text-zinc-600">
              Get in Touch for Collaboration and Inquiries
            </p>
          </div>
          <form
            action="https://formspree.io/f/mzblwyoe"
            method="POST"
            className="mx-auto mt-16 max-w-xl sm:mt-20"
          >
            <input
              name="subject"
              type="hidden"
              value="New submission from {{ first-name }}"
            />
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="font-satoshi block text-sm font-normal leading-6 text-zinc-400"
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-zinc-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-zinc-600 sm:text-sm sm:leading-6 bg-transparent caret-white"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="font-satoshi block text-sm font-normal leading-6 text-zinc-500"
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-zinc-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-zinc-600 sm:text-sm sm:leading-6 bg-transparent caret-white"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="company"
                  className="font-satoshi block text-sm font-normal leading-6 text-zinc-500"
                >
                  Company
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    autoComplete="organization"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-zinc-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-zinc-600 sm:text-sm sm:leading-6 bg-transparent caret-white"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="font-satoshi block text-sm font-normal leading-6 text-zinc-500"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-zinc-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-zinc-600 sm:text-sm sm:leading-6 bg-transparent caret-white"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="font-satoshi block text-sm font-normal leading-6 text-zinc-500"
                >
                  Phone number
                </label>
                <div className="relative mt-2.5">
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <label htmlFor="country" className="sr-only">
                      Country
                    </label>
                  </div>
                  <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-zinc-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-zinc-600 sm:text-sm sm:leading-6 bg-transparent caret-white"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="font-satoshi block text-sm font-normal leading-6 text-zinc-500"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-zinc-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-zinc-600 sm:text-sm sm:leading-6 bg-transparent caret-white"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md gradient-background px-3.5 py-2.5 text-center text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Let's talk
              </button>
            </div>
          </form>
        </div>
        <motion.div
          className="eclipse-bottom w-full top-44"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}
        />
      </div>
    </>
  );
};

export default Contact;
