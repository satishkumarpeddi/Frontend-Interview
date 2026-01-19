const Footer = () => {
  return (
    <div className="bg-blue-300 text-amber-100">
      <div className="flex flex-col  md:flex-row p-8 w-full gap-8">
        <div className="w-full md:w-[35%]">
          <div>
            <h1 className="uppercase font-bold text-center md:text-left">
              ca monk
            </h1>
            <p className="text-center md:text-left">
              Empowering the next generation of financial leaders with tools,
              community, and knowledge.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 sm:flex-row md:gap-y-0 justify-between w-full md:w-[65%]">
          <div className="flex flex-col text-center md:text-left gap-y-4">
            <h2 className="uppercase font-semibold">resources</h2>
            <ul className="gap-x-3 text-left">
              <li className="cursor-pointer">Blog</li>
              <li className="cursor-pointer">Webinars</li>
              <li className="cursor-pointer">Case Studies</li>
            </ul>
          </div>
          <div className="flex flex-col text-center md:text-left gap-y-4">
            <h2 className="uppercase font-semibold">platform</h2>
            <ul className="gap-x-3 text-left">
              <li className="cursor-pointer">Job Board</li>
              <li className="cursor-pointer">Practice Tests</li>
              <li className="cursor-pointer">Mentorship</li>
            </ul>
          </div>
          <div className="flex flex-col text-center md:text-left gap-y-4">
            <h2 className="uppercase font-semibold">connect</h2>
            <ul className=" gap-x-3 text-left">
              <li className="cursor-pointer">LinkedIn</li>
              <li className="cursor-pointer">Twitter</li>
              <li className="cursor-pointer">Instagram</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="p-6">
        <hr />
      </div>
      <div className="flex flex-col sm:flex-row justify-between p-8">
        <p>© 2026 CA Monk. All rights reserved.</p>
        <div className="flex gap-3 ">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
