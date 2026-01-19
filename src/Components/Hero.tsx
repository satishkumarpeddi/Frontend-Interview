import React, { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    const fetchMethod = async () => {
      const res = await fetch("http://localhost:3001/blogs");
      const data = await res.json();
      console.log(data);
    };
    fetchMethod();
  }, []);
  return (
    <div>
      {/**Top Section */}
      <div className="text-center p-8">
        <h1 className="font-bold text-2xl whitespace-nowrap">CA Monk Blog</h1>
        <p className="font-serif">
          Stay updated with the latest trends in finance, accounting, and career
          growth.
        </p>
      </div>
    </div>
  );
};

export default Hero;
