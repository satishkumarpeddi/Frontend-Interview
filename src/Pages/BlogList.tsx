import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "@/api/blogsApi";
import { Link } from "react-router-dom";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../Components/ui/card";
const BlogList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });
  if (isLoading) return <p>Loading blogs...</p>;
  if (error) return <p>Failed to load blogs</p>;
  return (
    <div>
      <h2>All Blogs</h2>
      {data!.map((blog) => (
        <Card>
          <CardHeader>
            <CardTitle>{blog.title}</CardTitle>
            <CardDescription></CardDescription>
            <CardAction>{blog.author}</CardAction>
          </CardHeader>
          <CardContent></CardContent>
          <CardFooter>
            <Link to={`/blogs/${blog.id}`}>Read More</Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default BlogList;
