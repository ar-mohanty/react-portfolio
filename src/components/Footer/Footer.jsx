import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="h-full w-full bg-[#0D0A12]">
        <div className="wrapper p-5 lg:p-8 flex flex-col lg:flex-row items-center justify-between gap-5">
          <div>
            <p className="font-satoshi text-[#939499]">
              © 2023 Anurag Mohanty. All rights reserved.
            </p>
          </div>
          <div className="flex gap-x-5">
            <a
              href="https://twitter.com/MohantyAnurag2"
              className="footerlinks"
            >
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/anuragrmohanty/"
              className="footerlinks"
            >
              Linkedin
            </a>
            <a href="https://github.com/ar-mohanty" className="footerlinks">
              Github
            </a>
            <a
              href="https://www.instagram.com/a.r_mohanty/"
              className="footerlinks"
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
