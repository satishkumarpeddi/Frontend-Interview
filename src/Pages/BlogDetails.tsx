import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getBlogById } from "../api/blogsApi";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../Components/ui/card";
import BlogList from "./BlogList";
const BlogDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["blog", id],
    queryFn: () => getBlogById(id!),
    enabled: !!id,
  });
  console.log(data?.coverImage);
  if (isLoading) return <p>Loading blog...</p>;
  if (error) return <p>Error loading blog</p>;
  return (
    <div className="flex w-full h-auto p-8 gap-5  sm:flex-col lg:flex-row">
      <div className="w-full lg:w-[30%] overflow-y-scroll">
        <BlogList />
      </div>
      <div className="w-full lg:w-[70%]">
        <Card>
          <CardHeader>
            <CardTitle className="font-bold text-3xl">{data!.title}</CardTitle>
            <CardDescription>
              <img
                src={data?.coverImage}
                alt={data?.title || "Blog cover image"}
                className="object-cover rounded-xl w-full md:h-2/5 h-auto flex m-auto"
              />
              {data!.descirption}
            </CardDescription>
            <CardAction>{data!.author}</CardAction>
          </CardHeader>
          <CardContent className="text-left font-bold whitespace-break-spaces">
            {data!.content}
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default BlogDetails;
