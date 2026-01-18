import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row p-8 w-full gap-3">
        <div className="w-full md:w-[35%]">
          <div>
            <h1 className="uppercase font-bold">ca monk</h1>
            <p>
              Empowering the next generation of financial leaders with tools,
              community, and knowledge.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 sm:flex-row md:gap-y-0 justify-between w-full md:w-[65%]">
          <div className="flex flex-col  gap-y-4">
            <h2 className="uppercase">resources</h2>
            <ul>
              <li>Blog</li>
              <li>Webinars</li>
              <li>Case Studies</li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-4">
            <h2 className="uppercase">platform</h2>
            <ul>
              <li>Job Board</li>
              <li>Practice Tests</li>
              <li>Mentorship</li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-4">
            <h2 className="uppercase">connect</h2>
            <ul>
              <li>LinkedIn</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="p-6">
        <hr />
      </div>
      <div className="flex flex-col sm:flex-row justify-between p-8">
        <p>2026 CA Monk. All rights reserved.</p>
        <div className="flex gap-3 ">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
