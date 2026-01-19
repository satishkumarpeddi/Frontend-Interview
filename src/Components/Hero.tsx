import { useEffect } from "react";
import BlogList from "../Pages/BlogList";
import BlogDetails from "../Pages/BlogDetails";
import CreateBlog from "../Pages/CreateBlog";
import { Routes, Route, Link } from "react-router-dom";
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
      <div className="text-center p-4 md:p-8 gap-y-5">
        <h1 className="font-bold text-2xl whitespace-nowrap">CA Monk Blog</h1>
        <p className="font-serif">
          Stay updated with the latest trends in finance, accounting, and career
          growth.
        </p>
        <nav className="font-semibold text-xl flex items-center justify-end gap-x-6">
          <Link
            className="text-amber-200 bg-blue-300 p-2 rounded-md hover:bg-blue-400"
            to="/"
          >
            Blogs
          </Link>{" "}
          |||{" "}
          <Link
            className="text-amber-200 bg-blue-300 p-2 rounded-md hover:bg-blue-400"
            to="/create"
          >
            Create Blog
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="/create" element={<CreateBlog />} />
        </Routes>
      </div>
    </div>
  );
};

export default Hero;
